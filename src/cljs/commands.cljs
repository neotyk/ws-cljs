(ns commands
  (:require [state :as state]
            [cljs.reader :as reader]
            [clojure.string :as string]
            [goog.dom :as dom]
            [goog.dom.classes :as class]))

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
    (dom/appendChild msgs-container new-msg)
    (set! msgs-container.scrollTop msgs-container.scrollHeight)))

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

