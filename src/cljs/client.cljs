(ns client
  (:require [commands :as cmd]
            [state :as state]
            [localstorage :as storage]
            [logger :as log]
            [websocket :as socket]
            [goog.dom :as dom]
            [goog.ui.AnimatedZippy :as anim-zip]
            [goog.ui.LabelInput :as label-input]
            [goog.ui.Tooltip :as tooltip]
            [goog.events :as events]
            [goog.events.EventType :as event-type]
            [goog.events.EventHandler :as event-handler]))

;; WebSocket handlers
(defn websocket-opened [soc]
  (fn [event]
    (log/info "websocket" (str "WebSocket opened: " event))
    (when-let [saved-nick (storage/get! "nick")]
      (socket/emit! soc "nick" saved-nick))))

(defn websocket-message [cmd body]
  (cond
   (= cmd "nick") (cmd/new-nickname body)
   (= cmd "msg") (cmd/new-message body)
   (= cmd "joined") (cmd/new-joiner body)
   (= cmd "left") (cmd/new-leaver body)
   (= cmd "count") (cmd/new-count body)
   (= cmd "users") (cmd/users-list body)))

(defn websocket-error [event]
  (log/info "websocket" (str "WebSocket error: " event)))

(defn websocket-closed [event]
  (log/info "websocket" (str "WebSocket closed: " event)))

;; UI handling
(defn extract-command
  "Extracts command and args from message, nil if not found"
  [msg]
  (->> (re-matches #"^/([^ ]+)(?: )?(.*)$" msg)
       (drop 1)
       seq))

(defn create-message-change [soc]
  (fn [event]
    (let [e (.target event)
          msg (.value e)]
      (if-let [cmd (extract-command msg)]
        (apply socket/emit! soc cmd)
        (socket/emit! soc "msg" msg))
      (set! e.value ""))))

(defn init-controls [handler]
  (let [input (dom/getElement "msg")]
    (-> (goog.ui.LabelInput.)
        (.decorate input))
    (goog.ui.Tooltip. input (.getAttribute input "label"))
    (log/info "client" (str "Installing handler on " input))
    (events/listen input event-type/CHANGE handler)
    (.focus input true)
    (goog.ui.AnimatedZippy. "log-h" "log" false)))

(defn disable-controls []
  (let [input (dom/getElement "msg")]
    (set! input.disabled true)
    (set! input.hidden true)))

(defn install-shutdown-hook [f]
  (let [body (js* "document.body")]
    (log/info "client" "Installing unload hook.")
    (set! body.onunload f)))

(defn init []
  (log/init "log")
  (log/info "client" "Initilizing application.")
  (let [socket (socket/create)]
    (if-let [socket (-> socket
                        (socket/configure (websocket-opened socket)
                                          websocket-message
                                          websocket-error
                                          websocket-closed)
                        (socket/connect! (js* "'ws://' + document.location.host + '/socket'")))]
      (do
        (install-shutdown-hook #((socket/close! socket)))
        (init-controls (create-message-change socket)))
      (do
        (disable-controls)
        (cmd/new-message "No WebSocket supported, get a decent browser.")))))

(init)
