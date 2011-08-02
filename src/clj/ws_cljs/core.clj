(ns ws-cljs.core
  (:use
        [ring.middleware.file :only [wrap-file]]
        [ring.middleware.file-info :only [wrap-file-info]]
        [ring.util.response :only [redirect]])
  (:require [compojure.route :as route]
            [aleph.http :as aleph]
            [lamina.core :as lamina]
            [compojure.core :as compojure]))

(def broadcast-channel (lamina/permanent-channel))

(def counter (atom 0))

(defn create-close-handler
  "Create WebSocket close handler."
  [ip nick]
  (fn []
    (println ip ": Closing" @nick)
    (swap! counter dec)
    (lamina/enqueue broadcast-channel (str "/left " @nick))))

(defn create-drained-handler
  "Create WebSocker backing channel drained halnder."
  [ip nick]
  (fn []
    (println ip ": Drained" @nick)))

(defn receive-handler
  "Receive message over WebWocket event handler.
  Arguments:
  - ip - ip of client
  - ch - channel to be used
  - nickname - atom to push nickname once set
  - msg - first message received over channel"
  [ip ch nickname msg]
  (when msg ;; last message in a channel is nil, so it can be the only one as well.
    (let [[_ nick] (re-matches #"\/nick (.+)" msg)] 
      (if nick
        (do (println ip ": /nick" nick)
            (reset! nickname nick)
            (lamina/enqueue broadcast-channel (str "/joined " nick)))
        (lamina/enqueue ch "/identify"))
      
      (lamina/siphon
       (lamina/map*
        (fn [msg]
          (when msg
            (if (not= :no-name @nickname)
              (let [[_ cmd body] (re-matches #"\/([^ ]+) (.*)" msg)]
                (println ip ":" nick ":" cmd ":" body)
                (cond
                 (= cmd "msg") (str "/msg " nick " " body)
                 (= cmd "nick") (let [old-nick @nickname]
                                  (reset! nickname body)
                                  (str "/nick " old-nick " " body))
                 :default (lamina/enqueue ch (str "/error Command /" cmd " not supported"))))
              (lamina/enqueue ch "/identify"))))
        ch)
       broadcast-channel)
      (lamina/siphon broadcast-channel ch)
      (lamina/enqueue ch (format "/motd Hello %s! Enjoy your stay and share if you like it." nick)))))

(defn chat-handler [ch {ip :remote-addr}]
  (let [nickname (atom :no-name)]
    (println ip ": Connected")
    (swap! counter inc)
    ;; register close handler
    (lamina/on-closed ch (create-close-handler ip nickname))

    ;; drain handler
    (lamina/on-drained ch (create-drained-handler ip nickname))

    ;; message handler
    (lamina/receive ch #(receive-handler ip ch nickname %))

    ;; say hi
    (lamina/enqueue broadcast-channel (str "/count " @counter))))

(compojure/defroutes my-app 
  (compojure/GET "/" [] (redirect "index.html"))
  (compojure/GET "/socket" [] (aleph/wrap-aleph-handler chat-handler))
  (route/not-found "What you're looking for is not here, sorry."))

(defn -main []
  (let [port (or (when-let [p (System/getenv "PORT")]
                   (Integer/parseInt p))
                 8108)]
    (aleph/start-http-server (-> my-app
                           (wrap-file "static-resources")
                           wrap-file-info
                           aleph/wrap-ring-handler) {:port port :websocket true})
    (println "Server started on port" port)))
        
