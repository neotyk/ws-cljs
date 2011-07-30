(ns ws-cljs.core
  (:use
        [ring.middleware.file :only [wrap-file]]
        [ring.middleware.file-info :only [wrap-file-info]]
        [ring.util.response :only [redirect]])
  (:require [compojure.route :as route]
            [aleph.http :as aleph]
            [lamina.core :as lamina]
            [compojure.core :as compojure]))

(def broadcast-channel (lamina/channel))

(def counter (atom 0))

(defn create-close-handler
  "Create WebSocket close handler."
  [ch]
  (fn [] 
    (println "Closing " ch)
    (swap! counter dec)
    (lamina/enqueue broadcast-channel (str "/connected " @counter))))

(defn create-drained-handler
  "Create WebSocker backing channel drained halnder."
  [ch]
  (fn []
    (println "Drained " ch)))

(defn chat-handler [ch {id :remote-addr}]
  (println (format "Connected from %s." id))
  (swap! counter inc)
  (lamina/enqueue broadcast-channel (str "/connected " @counter))

  ;; register close handler
  (lamina/on-closed ch (create-close-handler ch))

  ;; drained handler
  (lamina/on-drained ch (create-drained-handler ch))

  (lamina/receive ch
                  (fn [name]
                    (println (format "%s introduced as '%s'." id name))
                    (lamina/enqueue broadcast-channel (str "/joined " name))
                    (lamina/siphon (lamina/map*
                                    (fn [msg]
                                      (println (format "Message from %s: '%s'." name msg))
                                      (cond
                                       (lamina/closed? ch)
                                       (do
                                         (println (format "%s disconnected." name))
                                         (str "/gone " name))

                                       (lamina/drained? ch)
                                       (do
                                         (println (format "%s channel drained, message: '%s'."
                                                          name msg)))

                                       :default
                                       (str name ": " msg)))
                                    ch)
                                   broadcast-channel)
                    (lamina/siphon broadcast-channel ch)
                    (lamina/enqueue ch (format "server: Hello %s! Enjoy your stay and share if you like it." name))))
  (lamina/enqueue ch "server: What is your name?"))

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
        
