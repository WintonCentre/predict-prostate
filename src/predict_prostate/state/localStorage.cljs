(ns predict-prostate.state.localStorage
  (:require [cljs.reader :refer [read-string]]))


(defn get-settings!
  [default-value]
  (if-let [settings (.getItem js/localStorage "predict-prostate-1.0")]
    (read-string settings)
    default-value
    ))

(defn put-settings!
  [settings]
  (let [old-settings (get-settings! {})]
    (.setItem js/localStorage "predict-prostate-1.0" (merge old-settings settings))))