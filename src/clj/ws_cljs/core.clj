(ns ws-cljs.core
  (:use [aleph.http :only [start-http-server wrap-aleph-handler wrap-ring-handler]]
        [compojure.core :only [GET defroutes]]
        [lamina.core :only [channel enqueue map* receive siphon]]
        [ring.middleware.file :only [wrap-file]]
        [ring.middleware.file-info :only [wrap-file-info]]
        [ring.util.response :only [redirect]])
  (:require [compojure.route :as route]))

(def broadcast-channel (channel))

(defn chat-handler [ch {id :remote-addr}]
  (println (format "Connected from %s." id))
  (receive ch
           (fn [name]
             (siphon (map*
                      (fn [msg]
                        (println (format "Message from %s: '%s'." name msg))
                        (str name ": " msg))
                      ch)
                     broadcast-channel)
             (siphon broadcast-channel ch)
             (enqueue ch (format "server: Hello %s! Enjoy your stay and share if you like it." name))))
  (enqueue ch "server: What is your name?"))

(defroutes my-app 
  (GET "/" [] (redirect "index.html"))
  (GET "/socket" [] (wrap-aleph-handler chat-handler))
  (route/not-found "What you're looking for is not here, sorry."))

(defn -main []
  (let [port (or (when-let [p (System/getenv "PORT")]
                   (Integer/parseInt p))
                 8108)]
    (start-http-server (-> my-app
                           (wrap-file "static-resources")
                           wrap-file-info
                           wrap-ring-handler) {:port port :websocket true})
    (println "Server started on port" port)))
        
