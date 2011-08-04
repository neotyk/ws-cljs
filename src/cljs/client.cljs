(ns client
  (:require [logger :as log]
            [websocket :as socket]
            [clojure.string :as string]
            [goog.dom :as dom]
            [goog.ui.AnimatedZippy :as anim-zip]
            [goog.ui.LabelInput :as label-input]
            [goog.ui.Tooltip :as tooltip]
            [goog.events :as events]
            [goog.events.EventType :as event-type]
            [goog.events.EventHandler :as event-handler]))

;; State
(def init-state {:nick nil
                 :count 0
                 :connected #{}})

(def state (atom init-state))

;; Display
(defn my-nick
  "Sets new nickname used by this client"
  [nick]
  (swap! state assoc :nick nick)
  (when-let [nick-el (dom/getElement "nick")]
    (set! nick-el.textContent nick)))

(defn new-nickname [body]
  (let [parts (string/split body #" ")]
    (if (= 2 (count parts))
      ;; nick change
      (let [[old new] parts]
        (if (= old (:nick @state))
          ;; my nick change
          (my-nick new)
          ;; others nick change
          (log/info "TODO"  "Others nickname change to implement.")
          ))
      ;; nick set
      (my-nick body)
      )))

(defn new-message [msg]
  (let [msgs-container (dom/getElement "messages")
        new-msg (dom/createElement "li")]
    (dom/setTextContent new-msg msg)
    (dom/appendChild msgs-container new-msg)))

(defn new-joiner [nick]
  (new-message (str nick " joined")))

(defn new-leaver [nick]
  (new-message (str nick " left")))

(defn new-count [nr]
  (new-message (str "#" nr " connected")))

;; WebSocket handlers
(defn websocket-opened [event]
  (log/info "websocket" (str "WebSocket opened: " event)))

(defn websocket-message [cmd body]
  (cond
   (= cmd "nick") (new-nickname body)
   (= cmd "msg") (new-message body)
   (= cmd "joined") (new-joiner body)
   (= cmd "left") (new-leaver body)
   (= cmd "count") (new-count body)))

(defn websocket-error [event]
  (log/info "websocket" (str "WebSocket error: " event)))

(defn websocket-closed [event]
  (log/info "websocket" (str "WebSocket closed: " event)))

;; UI handling
(defn extract-command
  "Extracts command and args from message, nil if not found"
  [msg]
  (->> (re-matches #"^/([^ ]+) (.*)$" msg)
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
  (if-let [socket (-> (socket/create)
                      (socket/configure websocket-opened
                                        websocket-message
                                        websocket-error
                                        websocket-closed)
                      (socket/connect! (js* "'ws://' + document.location.host + '/socket'")))]
    (do
      (install-shutdown-hook #((socket/close! socket)))
      (init-controls (create-message-change socket)))
    (do
      (disable-controls)
      (new-message "No WebSocket supported, get a decent browser."))))

(init)
