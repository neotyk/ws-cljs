(ns autocomplete
  (:require [goog.dom :as dom]
            [goog.ui.AutoComplete :as ac]
            [goog.ui.AutoComplete.Basic :as autobasic]))

(defn update
  "Updates autocompletion.

  Arguments:
  - old-ac: previous autocompletion to detach
  - completions: new completions
  - elem: element to attach autocompletion

  Returns: new autocompletion based on provided completions and attached to elem. "
  [old-ac completions elem]
  (when old-ac
    (.detachInputs old-ac elem))
  (ac/Basic. (apply array completions)
                       elem
                       false
                       true))
