(ns predict-prostate.models.adapters.predict
  (:require [predict-prostate.models.prostate :refer [run-prostate]]
            [clojure.string :refer [starts-with?]]
            [cljs.reader :refer [read-string]]
            [goog.object :refer [getValueByKeys]]
            ))

;;;
;; Call predict-prostate - cljs version (slower but nicer!)
;;;



(defn predict-prostate
  "Call the v2 model using v3 data. Note that fields that MUST be entered should NOT have default values. This is so we
  can detect incomplete entries by looking for nil values."
  [input-map]

  (println "input-map:" input-map)

  (let [
        tim (-> input-map
                (update :age read-string)
                (update :n (constantly 10))
                (update :psa read-string)
                (update :t-stage identity)
                (update :grade-group identity)
                (update :charlson-comorbidity identity)
                (update :biopsy50 #(if (= :unknown %) 0 %))
                (assoc :protect 0))]

    (println "transformed input-map" tim)

    (println "result:" (run-prostate [tim])))


  true
  )

