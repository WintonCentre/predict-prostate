(ns predict-prostate.state.localStorage
  (:require [cljs.reader :refer [read-string]]))


(defn get-settings!
  [default-value]
  (if-let [settings (.getItem js/localStorage "predict-2.1-settings")]
    (read-string settings)
    default-value
    ))

(defn put-settings!
  [settings]
  (.setItem js/localStorage "predict-2.1-settings" settings))