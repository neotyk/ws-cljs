(ns client
  (:require [state :as state]
            [logger :as log]
            [websocket :as socket]
            [cljs.reader :as reader]
            [clojure.string :as string]
            [goog.dom :as dom]
            [goog.dom.classes :as class]
            [goog.ui.AnimatedZippy :as anim-zip]
            [goog.ui.LabelInput :as label-input]
            [goog.ui.Tooltip :as tooltip]
            [goog.events :as events]
            [goog.events.EventType :as event-type]
            [goog.events.EventHandler :as event-handler]))

(defn refresh-users
  "Redispalys users list."
  ([]
     (refresh-users (state/get-users) (state/nick)))
  ([users me]
     (let [participants-el (dom/getElement "participants")]
       (dom/removeChildren participants-el)
       (doseq [user (sort users)]
         (let [user-el (dom/createDom "li")]
           (class/set user-el "nick")
           (when (= user me)
             (class/add user-el "me"))
           (dom/setTextContent user-el (name user))
           (dom/appendChild participants-el user-el))))))

(defn new-nickname [body]
  (let [parts (string/split body #" ")]
    (if (= 2 (count parts))
      ;; nick change
      (let [[old new] parts]
        (if (= old (state/nick))
          ;; my nick change
          (state/chnick! new)
          ;; others nick change
          (state/mv-user! old new))
        (refresh-users))
      ;; nick set
      (state/chnick! body)
      )))

;; Display
(defn new-message [msg]
  (let [msgs-container (dom/getElement "messages")
        new-msg (dom/createElement "li")]
    (dom/setTextContent new-msg msg)
    (dom/appendChild msgs-container new-msg)))

(defn new-joiner [nick]
  (state/add-user! nick)
  (new-message (str nick " joined"))
  (refresh-users))

(defn new-leaver [nick]
  (state/rm-user! nick)
  (new-message (str nick " left"))
  (refresh-users))

(defn new-count [nr]
  (new-message (str "#" nr " connected")))

(defn users-list
  "Updates participants list."
  [users-str]
  (when-let [users (into #{} (map name (reader/read-string users-str)))]
    (state/set-users! users)
    (refresh-users users (state/nick))))

;; WebSocket handlers
(defn websocket-opened [event]
  (log/info "websocket" (str "WebSocket opened: " event)))

(defn websocket-message [cmd body]
  (cond
   (= cmd "nick") (new-nickname body)
   (= cmd "msg") (new-message body)
   (= cmd "joined") (new-joiner body)
   (= cmd "left") (new-leaver body)
   (= cmd "count") (new-count body)
   (= cmd "users") (users-list body))
  (log/debug "websocket" (str cmd ":" body ": DONE")))

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
