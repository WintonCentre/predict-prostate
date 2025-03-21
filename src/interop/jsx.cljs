(ns interop.jsx
  (:require [oops.core :refer [oget ocall+]]))

;(def oget goog.object.getValueByKeys)


(def jq$ (oget js/window "jQuery"))
(defn jq$find [id] (jq$ id))
(defn jq$call
  ([id method]
   (ocall+ (jq$find id) method))
  ([id method p1]
   (ocall+ (jq$find id) method p1)))


; create alias with aget to avoid advanced compiler optimisation munging "createElement"
(def create-element (aget js/React "createElement"))

(defn jsx [element props content]
  (.createElement js/React element (clj->js props) content))

(defn jsx* [element props & children]
  (apply create-element element (clj->js props) children))

;
; Note that we can make specific elements too
;

(defn make-element [tag]
  (fn [props & children]
    (apply create-element tag (clj->js props) children)))

(def div (make-element "div"))
(def p (make-element "p"))

;; etc etc.

;; NB See https://github.com/levand/quiescent/blob/release/src/quiescent/dom.clj and dom.cljs for a way to
;; automate this...