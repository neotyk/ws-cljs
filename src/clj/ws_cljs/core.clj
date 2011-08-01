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

(defn chat-handler [ch {ip :remote-addr}]
  (let [nickname (atom :no-name)]
    (println ip ": Connected")
    (swap! counter inc)
    (lamina/enqueue broadcast-channel (str "/count " @counter))

    ;; register close handler
    (lamina/on-closed ch (create-close-handler ip nickname))

    ;; handler
    (lamina/on-drained ch (create-drained-handler ip nickname))

    (lamina/receive ch
                    (fn [name]
                      (when name ;; last message in a channel is nil,
                        ;; so it can be the only one as well.
                        (println ip "->" name)
                        (let [[_ nick] (re-matches #"\/nick (.+)" name)] 
                          (println ip ": /nick" nick)
                          (reset! nickname nick)
                          (lamina/enqueue broadcast-channel (str "/joined " nick))
                          (lamina/siphon
                           (lamina/map*
                            (fn [msg]
                              (when msg
                                (let [[_ cmd body] (re-matches #"\/([^ ]+) (.*)" msg)]
                                  (println ip ":" nick ":" cmd ":" body)
                                  (cond
                                   (= cmd "msg") (str "/msg " nick " " body)
                                   (= cmd "nick") (let [old-nick @nickname]
                                                    (reset! nickname body)
                                                    (str "/nick " old-nick " " body))
                                   :default (lamina/enqueue ch (str "/error Command /" cmd " not supported"))))))
                            ch)
                           broadcast-channel)
                          (lamina/siphon broadcast-channel ch)
                          (lamina/enqueue ch (format "/motd Hello %s! Enjoy your stay and share if you like it." nick))))))
    (lamina/enqueue ch "/msg root Register with /nick <your nick name>")))

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
        
