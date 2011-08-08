(ns state
  (:require [logger :as log]
            [goog.dom :as dom]))

;; State
(def init-state {:nick nil
                 :users #{}})

(def state (atom init-state))

;; Nickname
(defn nick
  "Gets nickname used by this client"
  []
  (:nick @state))

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
    (set! nick-el.textContent nick)))

;; Users
(defn get-users
  "Gets current list of users."
  []
  (:users @state))

(defn set-users!
  "Sets set of connected users."
  [users]
  (swap! state assoc :users users))

(defn add-user!
  "Adds new user to users set."
  [nick]
  (swap! state #(->> (conj (:users %) nick)
                     (assoc % :users))))

(defn rm-user!
  "Removes user from users set."
  [nick]
  (swap! state #(->> (disj (:users %) nick)
                     (assoc % :users))))

(defn mv-user!
  "Renames user in users set."
  [old new]
  (swap! state #(assoc % :users (-> (disj (:users %) old)
                                    (conj new)))))
