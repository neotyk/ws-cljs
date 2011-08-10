(ns localstorage
  (:require [goog.storage.Storage :as Storage]
            [goog.storage.mechanism.HTML5LocalStorage :as html5localstore]))

(defn- storage []
  (let [mech (goog.storage.mechanism.HTML5LocalStorage.)
        store (goog.storage.Storage. mech)]
    store))

(defn get!
  "Gets value from local storage."
  [key]
  (let [store (storage)]
    (.get store key)))

(defn set!
  "Stores key value in local storage."
  [key val]
  (let [store (storage)]
    (.set store key val)))
