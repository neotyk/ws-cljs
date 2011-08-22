(ns ws-cljs.core
  (:use [ring.middleware.file :only [wrap-file]]
        [ring.middleware.file-info :only [wrap-file-info]]
        [ring.util.response :only [redirect]])
  (:require [compojure.route :as route]
            [clojure.contrib.logging :as log]
            [aleph.http :as aleph]
            [lamina.core :as lamina]
            [compojure.core :as compojure]
            [swank.swank :as swank]))

(def broadcast-channel (lamina/permanent-channel))

(def *USERS* (ref #{}))

(defn state-add-user!
  [nick]
  (dosync (commute *USERS* conj nick))
  nick)

(defn state-rm-user!
  "Removes user from list of registered users."
  [nick]
  (dosync (commute *USERS* disj nick)))

(defn state-mv-user!
  "Renames user.
Has to be executed in tranasation."
  [from to]
  (commute *USERS*
           #(-> %
                (disj from)
                (conj to))))

(defn state-users-count
  []
  (count @*USERS*))

(defn state-ls-users
  "List users currently connected."
  []
  @*USERS*)

(defn create-close-handler
  "Create WebSocket close handler."
  [ip nick]
  (fn []
    (log/info (str ip " : Closing " @nick))
    (state-rm-user! @nick)
    (lamina/enqueue broadcast-channel (str "/left " @nick))))

(defn create-drained-handler
  "Create WebSocker backing channel drained halnder."
  [ip nick]
  (fn []
    (log/info (str ip " : Drained " @nick))))

(defn onMsg
  "On message handler.
  Called when message has been received by server."
  [_ nick-a body]
  (lamina/enqueue broadcast-channel (str "/msg " @nick-a " " body)))

(defn valid-nick-change?
  "Checks if nickname change is valid."
  [new-nick]
  (not (or (empty? new-nick)
           (contains? @*USERS* new-nick)
           (.contains new-nick " "))))

(defn nick-pipe
  "Pipeline executed on nick command"
  []
  (log/info "Creating nick pipeline")
  (lamina/pipeline
   (fn [{ch :channel nick :nick new-nick :body :as m}]
     (log/info (str "Executing nick pipeline with: " m))
     (let [old-nick @nick]
       (if (valid-nick-change? new-nick)
         (do ;; allowed to change
           (log/info (format "nick '%s' -> '%s'"  old-nick new-nick))
           (dosync
            (state-mv-user! old-nick new-nick)
            (ref-set nick new-nick))
           (lamina/enqueue broadcast-channel (str "/nick " old-nick " " new-nick)))
         (do ;; nickname already taken, or otherwise invalid
           (log/info (format "nick '%s' !> '%s'"  old-nick new-nick))
           (lamina/enqueue ch (str "/nick " old-nick))))))))

(defn send-users-list-pipe
  "Pipeline to send current users list"
  []
  (let [users (state-ls-users)]
    (lamina/pipeline
     #(when-not (or (lamina/closed? %)
                    (lamina/drained? %))
        (log/info "listing users")
        (lamina/enqueue % (str "/users " users))))))

(defn receive-handler
  "Receive message over WebWocket event handler.
  Arguments:
  - ip - ip of client
  - ch - channel to be used
  - nickname - atom to push nickname once set
  - msg - message received over channel"
  [ip ch nickname msg]
  (when msg ;; last message in a channel is nil
    (let [[_ cmd body] (re-matches #"\/([^ ]+) (.*)" msg)]
      (if cmd
        (do
          (log/info (str ip " : " @nickname " : " cmd " : " body))
          (cond
           (= cmd "msg") (onMsg ch nickname body)
           (= cmd "nick") ((nick-pipe) {:channel ch
                                        :nick nickname
                                        :body body})
           (= cmd "list") ((send-users-list-pipe) ch)
           :default (lamina/enqueue ch (str "/error Command /" cmd " not supported"))))
        (do
          (log/info (str ip " : " @nickname " : no command : " msg))
          (lamina/enqueue broadcast-channel (str "/msg " @nickname " " msg)))))))

(defn register-lifecycle-hooks
  "Register lifecycle hooks for channel"
  [ip nickname ch]
  ((lamina/pipeline
    #(create-close-handler ip %)
    #(lamina/on-closed ch %))
   nickname)
  ((lamina/pipeline
    #(create-drained-handler ip %)
    #(lamina/on-drained ch %))
   nickname))

(defn register-new-user
  "Registers new user"
  [ip nickname]
  ((lamina/pipeline
    #(state-add-user! %)
    #(lamina/enqueue broadcast-channel (str "/joined " %)))
   @nickname))

(defn connected-hook
  "Hook executed when new client connected."
  [ch ip nickname]
  (let [connect-pipeline (lamina/pipeline
                          #(register-lifecycle-hooks ip nickname %)
                          #(register-new-user ip nickname))]
    (connect-pipeline ch)

    ;; message handler
    (lamina/receive-all ch #(receive-handler ip ch nickname %))

    ;; publish events from broadcast-channel to clients channel
    (lamina/siphon broadcast-channel ch)

    ;; your nickname
    (lamina/enqueue ch (str "/nick " @nickname))

    ;; say hi
    ((send-users-list-pipe) ch)))

(defn websocket-handler
  "All WebSocket connections start here.
Called when client connects.
Sets up local atom for nickname (closed over by all event handlers).
Registers event handlers for new WebSocket connection (ch)."
  [ch {ip :remote-addr}]
  ;; Create random nickname for yet not identified users.
  (connected-hook ch ip (ref (gensym "Guest_"))))

(compojure/defroutes my-app 
  (compojure/GET "/" [] (redirect "index.html"))
  (compojure/GET "/socket" [] (aleph/wrap-aleph-handler websocket-handler))
  (route/not-found "What you're looking for is not here, sorry."))

(defn -main []
  (let [port (or (when-let [p (System/getenv "PORT")]
                   (Integer/parseInt p))
                 8108)]
    (aleph/start-http-server (-> #'my-app
                                 (wrap-file "static-resources")
                                 wrap-file-info
                                 aleph/wrap-ring-handler) {:port port :websocket true})
    (swank/start-repl 4005)
    (log/info (str "Server started on port " port))))
        
