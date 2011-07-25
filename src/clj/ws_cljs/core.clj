(ns ws-cljs.core
  (:use [aleph.http :only [start-http-server wrap-aleph-handler wrap-ring-handler]]
        [compojure.core :only [GET defroutes]]
        [lamina.core :only [channel map* receive siphon]]
        [ring.middleware.file :only [wrap-file]]
        [ring.middleware.file-info :only [wrap-file-info]]
        [ring.util.response :only [redirect]])
  (:require [compojure.route :as route]))

(def broadcast-channel (channel))

(defn chat-handler [ch {id :remote-addr}]
  (println (format "Connected from %s." id))
  (receive ch
           (fn [name]
             (siphon (map* #(str id ": " %) ch) broadcast-channel)
             (siphon broadcast-channel ch))))

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
        
