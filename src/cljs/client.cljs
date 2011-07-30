(ns client
  (:require [goog.debug :as debug]
            [goog.debug.FancyWindow :as fancy-window]
            [goog.debug.DivConsole :as div-console]
            [goog.debug.Logger :as log]
            [goog.dom :as dom]
            [goog.ui.LabelInput :as label-input]
            [goog.events :as events]
            [goog.events.EventType :as event-type]
            [goog.events.EventHandler :as event-handler]
            [goog.net.WebSocket :as websocket]
            [goog.net.WebSocket.EventType :as websocket-event]
            [goog.net.WebSocket.MessageEvent :as websocket-message]))

;; State
(def initial-state {:websocket nil
                    :nickname nil})

(def state (atom initial-state))


;; Log
(defn info [msg]
  (let [logger (goog.debug.Logger/getLogger "client")]
    (.info logger msg)))

(defn warn [msg]
  (let [logger (goog.debug.Logger/getLogger "client")]
    (.warning logger msg)))

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

(defn create-websocket! []
  (let [soc (goog.net.WebSocket.)]
    (swap! state assoc :websocket soc)
    soc))

(defn connect-websocket!
  "Connects WebSocket"
  [socket url]
  (try
   (.open socket url)
   socket
   (catch js/Error e
       (warn "No WebSocket supported, get a decent browser."))))

(defn close-websocket!
  "Closes WebSocket"
  [socket]
  (.close socket)
  (swap! state dissoc :websocket))

(defn configure-websocket
  "Configures WebSocket"
  ([websocket opened message]
     (configure-websocket websocket opened message nil))
  ([websocket opened message error]
     (configure-websocket websocket opened message error nil))
  ([websocket opened message error closed]
     (let [handler (events/EventHandler.)]
       (.listen handler websocket websocket-event/OPENED opened)
       (.listen handler websocket websocket-event/MESSAGE message)
       (when error
         (.listen handler websocket websocket-event/ERROR error))
       (when closed
         (.listen handler websocket websocket-event/CLOSED closed))
       websocket)))

(defn websocket-opened [event]
  (info (str "WebSocket opened: " event)))

(defn websocket-message [event]
  (let [payload (.message event)]
    (info (str "Message received: " payload))
    (add-message payload)))

(defn websocket-error [event]
  (info (str "WebSocket error: " event)))

(defn websocket-closed [event]
  (info (str "WebSocket closed: " event)))


(defn create-message-change [websocket]
  (fn [event]
    (let [e (.target event)
          msg (.value e)]
      (emit websocket msg)
      (js* "~{e}.value = ''"))))

(defn init-controls [handler]
  (let [input (dom/getElement "msg")]
    (-> (goog.ui.LabelInput.)
        (.decorate input))
    (info (str "Installing handler on " input))
    (events/listen input event-type/CHANGE handler)
    (.focus input)))

(defn disable-controls []
  (let [input (dom/getElement "msg")]
    (js* "~{input}.disabled = true")
    (js* "~{input}.hidden = true")))

(defn ^:export unload
  []
  (close-websocket! (get-websocket)))

(defn init []
  (init-logger)
  (info "Initilizing application.")
  (if-let [socket (-> (create-websocket!)
                      (configure-websocket websocket-opened
                                           websocket-message
                                           websocket-error
                                           websocket-closed)
                      (connect-websocket! (js* "'ws://' + document.location.host + '/socket'")))]
    (init-controls (create-message-change socket))
    (do
      (disable-controls)
      (add-message "No WebSocket supported, get a decent browser."))))

(init)
