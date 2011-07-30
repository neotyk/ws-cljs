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
  (let [nick (atom :no-name)]
    (println ip ": Connected")
    (swap! counter inc)
    (lamina/enqueue broadcast-channel (str "/count " @counter))

    ;; register close handler
    (lamina/on-closed ch (create-close-handler ip nick))

    ;; drained handler
    (lamina/on-drained ch (create-drained-handler ip nick))

    (lamina/receive ch
                    (fn [name]
                      (when name
                        (do
                          (println ip ": /nick" name)
                          (reset! nick name)
                          (lamina/enqueue broadcast-channel (str "/joined " name))
                          (lamina/siphon (lamina/map*
                                          (fn [msg]
                                            (when msg
                                              (println ip ":" name ":" msg)
                                              (str "/msg " name " " msg)))
                                          ch)
                                         broadcast-channel)
                          (lamina/siphon broadcast-channel ch)
                          (lamina/enqueue ch (format "server: Hello %s! Enjoy your stay and share if you like it." name))))))
    (lamina/enqueue ch "server: What is your name?")))

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
        
