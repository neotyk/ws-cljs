(ns client
  (:require [goog.debug :as debug]
            [goog.debug.FancyWindow :as fancy-window]
            [goog.debug.DivConsole :as div-console]
            [goog.debug.Logger :as log]
            [goog.dom :as dom]
            [goog.events :as events]
            [goog.events.EventType :as event-type]
            [goog.events.EventHandler :as event-handler]
            [goog.net.WebSocket :as ws]
            [goog.net.WebSocket.EventType :as ws-event]
            [goog.net.WebSocket.MessageEvent :as ws-message]))

(def ws-url (js* "'ws://' + document.location.host + '/socket'"))


;; State
(def initial-state {:websocket nil
                    :nickname nil})

(def state (atom initial-state))


;; Log
(defn info [msg]
  (let [logger (goog.debug.Logger/getLogger "client")]
    (.info logger msg)))

(defn init-logger []
  (let [win (goog.debug.DivConsole. (dom/getElement "log"))]
    (.setCapturing win true)))

;; Display
(defn add-message [msg]
  (let [msgs-container (dom/getElement "messages")
        new-msg (dom/createElement "li")]
    (dom/setTextContent new-msg msg)
    (dom/appendChild msgs-container new-msg)))


;; WebSocket
(defn get-websocket []
  (:websocket @state))

(defn emit [socket msg]
  (info (str "emit '" msg "' on '" socket "'."))
  (.send socket msg))

(defn create-web-socket! []
  (let [soc (goog.net.WebSocket.)]
    (swap! state assoc :websocket soc)
    soc))

(defn connect-web-socket!
  "Connects WebSocket"
  [socket]
  (.open socket ws-url)
  socket)

(defn configure-web-socket
  "Configures WebSocket"
  ([ws opened message]
     (configure-web-socket ws opened message nil))
  ([ws opened message error]
     (configure-web-socket ws opened message error nil))
  ([ws opened message error closed]
     (let [handler (events/EventHandler.)]
       (.listen handler ws ws-event/OPENED opened)
       (.listen handler ws ws-event/MESSAGE message)
       (when error
         (.listen handler ws ws-event/ERROR error))
       (when closed
         (.listen handler ws ws-event/CLOSED closed)))))

(defn ws-opened-handler [event]
  (info (str "WebSocket opened: " event)))

(defn ws-message-handler [event]
  (let [payload (.message event)]
    (info (str "Message received: " payload))
    (add-message payload)))

(defn ws-error-handler [event]
  (info (str "WebSocket error: " event)))

(defn ws-closed-handler [event]
  (info (str "WebSocket closed: " event)))


(defn create-message-change-handler [ws]
  (fn [event]
    (let [e (.target event)
          msg (.value e)]
      (emit ws msg)
      (js* "~{e}.value = ''"))))

(defn init-controls [ws]
  (let [input (dom/getElement "msg")
        handler (create-message-change-handler ws)]
    (info (str "Installing handler on " input))
    (events/listen input event-type/CHANGE handler)))

(defn init []
  (init-logger)
  (info "Initilizing application.")
  (let [socket (create-web-socket!)]
    (configure-web-socket socket
                          ws-opened-handler
                          ws-message-handler
                          ws-error-handler
                          ws-closed-handler)
    (connect-web-socket! socket)
    (init-controls socket)))

(init)
