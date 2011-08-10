(ns state
  (:require [autocomplete :as ac]
            [localstorage :as store]
            [logger :as log]
            [goog.dom :as dom]))

;; State
(def init-state {:nick nil
                 :users #{}
                 :autocomplete nil})

(def state (atom init-state))

(defn nick
  "Gets nickname used by this client"
  []
  (:nick @state))

(defn get-users
  "Gets current list of users."
  []
  (:users @state))

(defn- fn-users
  [f & nick]
  (let [msg-el (dom/getElement "msg")]
    (swap! state
           (fn [{:keys [users autocomplete] :as m}]
             (let [new-users (f users)]
               (apply
                assoc m
                :users new-users
                :autocomplete (ac/update autocomplete
                                         (map #(str "@" %)
                                              new-users)
                                         msg-el)
                (when (seq nick)
                  [:nick (first nick)])))))))

(defn set-users!
  "Sets set of connected users."
  [users]
  (log/debug "state" (str "users= " (pr-str users)))
  (fn-users #(identity users)))

(defn add-user!
  "Adds new user to users set."
  [nick]
  (log/debug "state" (str "users+: " nick))
  (fn-users #(conj % nick)))

(defn rm-user!
  "Removes user from users set."
  [nick]
  (log/debug "state" (str "users-: " nick))
  (fn-users #(disj % nick)))

(defn mv-user!
  "Renames user in users set."
  [old new]
  (log/debug "state" (str "users>: " old " " new))
  (fn-users #(-> (disj % old)
                (conj new))))

(defn chnick!
  "Sets nickname used by this client"
  [new-nick]
  (log/debug "state" (str "nick= " new-nick))
  (when-let [nick-el (dom/getElement "nick")]
    (set! nick-el.textContent new-nick))
  (store/set! "nick" new-nick)
  (fn-users #(-> (disj % (nick))
                (conj new-nick))
           new-nick))






