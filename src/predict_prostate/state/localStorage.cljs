(ns predict-prostate.state.localStorage
  (:require [cljs.reader :refer [read-string]]))


(defn get-settings!
  [default-value]
  (let [x (if-let [settings (.getItem js/localStorage "predict-prostate-1.0")]
            (merge default-value (read-string settings))
            default-value)]
    x))

(defn put-settings!
  [settings]
  (let [old-settings (get-settings! {})]
    (.setItem js/localStorage "predict-prostate-1.0" (merge old-settings settings))))

(comment

  (put-settings! {})
  (get-settings! {})
  (put-settings! {:plot-style :area1})
  )