(ns ws-cljs.core
  (:use
        [ring.middleware.file :only [wrap-file]]
        [ring.middleware.file-info :only [wrap-file-info]]
        [ring.util.response :only [redirect]])
  (:require [compojure.route :as route]
            [aleph.http :as aleph]
            [lamina.core :as lamina]
            [compojure.core :as compojure]
            [swank.swank :as swank]))

(def broadcast-channel (lamina/permanent-channel))

(def *USERS* (atom #{}))

(defn state-add-user!
  [nick]
  (swap! *USERS* conj nick))

(defn state-rm-user!
  "Removes user from list of registered users."
  [nick]
  (swap! *USERS* disj nick))

(defn state-mv-user!
  "Renames user.
TODO: Check if to user was not registered already."
  [from to]
  (swap! *USERS* #(-> %
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
    (println ip ": Closing" @nick)
    (state-rm-user! @nick)
    (lamina/enqueue broadcast-channel (str "/left " @nick))))

(defn create-drained-handler
  "Create WebSocker backing channel drained halnder."
  [ip nick]
  (fn []
    (println ip ": Drained" @nick)))

(defn onMsg
  "On message handler.
  Called when message has been received by server."
  [_ nick-a body]
  (lamina/enqueue broadcast-channel (str "/msg " @nick-a " " body)))

(defn valid-nick-change?
  "Checks if nickname change is valid."
  [new-nick]
  (not (or (empty? new-nick)
           (contains? @*USERS* new-nick))))

(defn onNick
  "On nick handler.
  Called when nick command has been recived.
  Changes nickname (local to channel) and global user list.
  Notifies clients of nickname change.
  If nick to change to was taken already, rejection is sent to client
  in form of one argument nick command with original nick.

  Arguments:
  - ch - clients channel
  - nick-a - nickname atom used by this connection
  - new-nick - new nickname to change to if possible"
  [ch nick-a new-nick]
  (let [old-nick @nick-a]
    (if (valid-nick-change? new-nick)
      (do ;; allowed to change
        (println (format "nick '%s' -> '%s'"  old-nick new-nick))
        (state-mv-user! old-nick new-nick)
        (reset! nick-a new-nick)
        (lamina/enqueue broadcast-channel (str "/nick " old-nick " " new-nick)))
      (do ;; nickname already taken
        (println (format "nick '%s' !> '%s'"  old-nick new-nick))
        (lamina/enqueue ch (str "/nick " old-nick))))))

(defn sendList
  "Lists all connected users"
  [ch]
  (lamina/enqueue ch (str "/users " (state-ls-users))))

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
          (println ip ":" @nickname ":" cmd ":" body)
          (cond
           (= cmd "msg") (onMsg ch nickname body)
           (= cmd "nick") (onNick ch nickname body)
           (= cmd "list") (sendList ch)
           :default (lamina/enqueue ch (str "/error Command /" cmd " not supported"))))
        (do
          (println ip ":" @nickname ": no command :" msg)
          (lamina/enqueue broadcast-channel (str "/msg " @nickname " " msg)))))))

(defn connected-hook
  "Hook executed when new client connected."
  [ch ip nickname]
  (println ip ": Connected, assigned nick:" @nickname)
  (state-add-user! @nickname)
  (lamina/enqueue broadcast-channel (str "/joined " @nickname))
  
  ;; register close handler
  (lamina/on-closed ch (create-close-handler ip nickname))

  ;; drain handler
  (lamina/on-drained ch (create-drained-handler ip nickname))

  ;; message handler
  (lamina/receive-all ch #(receive-handler ip ch nickname %))

  ;; publish events from broadcast-channel to clients channel
  (lamina/siphon broadcast-channel ch)

  ;; your nickname
  (lamina/enqueue ch (str "/nick " @nickname))
  ;; say hi
  (sendList ch))

(defn websocket-handler
  "All WebSocket connections start here.
Called when client connects.
Sets up local atom for nickname (closed over by all event handlers).
Registers event handlers for new WebSocket connection (ch)."
  [ch {ip :remote-addr}]
  ;; Create random nickname for yet not identified users.
  (connected-hook ch ip (atom (gensym "Guest_"))))

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
    (println "Server started on port" port)))
        
