(ns state
  (:require [logger :as log]
            [goog.dom :as dom]
            [goog.ui.AutoComplete :as autocomplete]
            [goog.ui.AutoComplete.Basic :as autobasic]))

;; State
(def init-state {:nick nil
                 :users #{}
                 :ac nil})

(def state (atom init-state))

(defn nick
  "Gets nickname used by this client"
  []
  (:nick @state))

(defn get-users
  "Gets current list of users."
  []
  (:users @state))

;; AutoComplete update
(defn autocomplete-update
  "Updates autocomplete source"
  []
  (let [old-ac (:ac @state)
        new-ac (autocomplete/Basic. (apply array (map #(str "@" %) (get-users)))
                                    (dom/getElement "msg")
                                    false
                                    true)]
    (when old-ac (.detachInputs old-ac (dom/getElement "msg")))
    (swap! state assoc :ac new-ac)))

(defn chnick!
  "Sets nickname used by this client"
  [nick]
  (swap! state (fn [m]
                 (let [users (:users m)
                       old-nick (:nick m)]
                   (log/debug "state" (str "chnick! " nick " users: " users))
                   (assoc m
                     :nick nick
                     :users (-> users
                                (disj old-nick)
                                (conj nick))))))
  
  (when-let [nick-el (dom/getElement "nick")]
    (set! nick-el.textContent nick))
  (autocomplete-update))

(defn set-users!
  "Sets set of connected users."
  [users]
  (swap! state assoc :users users)
  (autocomplete-update))

(defn add-user!
  "Adds new user to users set."
  [nick]
  (swap! state #(->> (conj (:users %) nick)
                     (assoc % :users)))
  (autocomplete-update))

(defn rm-user!
  "Removes user from users set."
  [nick]
  (swap! state #(->> (disj (:users %) nick)
                     (assoc % :users)))
  (autocomplete-update))

(defn mv-user!
  "Renames user in users set."
  [old new]
  (swap! state #(assoc % :users (-> (disj (:users %) old)
                                    (conj new))))
  (autocomplete-update))
