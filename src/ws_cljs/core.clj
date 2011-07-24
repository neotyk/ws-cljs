(ns ws-cljs.core
  (:use [aleph.http :only [start-http-server wrap-aleph-handler wrap-ring-handler]]
        [compojure.core :only [GET defroutes]]
        [hiccup.page-helpers :only [html5 include-js]]
        [lamina.core :only [channel map* receive siphon]]
        [ring.middleware.file :only [wrap-file]])
  (:require [compojure.route :as route]))

(def broadcast-channel (channel))

(defn chat-handler [ch handshake]
  (println "Connected " handshake)
  (receive ch
           (fn [name]
             (println "Hello " name)
             (siphon (map* #(str name ": " %) ch) broadcast-channel)
             (siphon broadcast-channel ch))))

(defn layout [& content]
  (html5 [:head [:title "new page"] (include-js "js/ws-control.js")]
         [:body content]))

(defroutes my-app 
  (GET "/" [] (layout [:p "awesome!"]))
  (GET "/socket" [] (wrap-aleph-handler chat-handler))
  (route/not-found (layout [:p "aww... this doesn't exist"])))

(defn -main []
  (start-http-server (-> my-app
                         (wrap-file "html")
                         wrap-ring-handler) {:port 8080 :websocket true})
  (println "server started"))
        
