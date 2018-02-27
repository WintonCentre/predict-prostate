(ns predict-prostate.models.adapters.predict
  (:require [predict-prostate.models.prostate :refer [run-prostate]]
            [clojure.string :refer [starts-with?]]
            [cljs.reader :refer [read-string]]
            [goog.object :refer [getValueByKeys]]
            ))

(defn predict-prostate
  "Run the prostate model, mapping input factors to numeric model parameters."
  [input-map]
  (-> input-map
    (update :age read-string)
    (update :n (constantly 10))
    (update :psa read-string)
    (update :t-stage identity)
    (update :grade-group identity)
    (update :charlson-comorbidity identity)
    (update :biopsy50 #(if (= :unknown %) 0 %))
    (assoc :protect 0)
    (run-prostate)))

