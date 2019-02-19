(ns predict-prostate.models.runner
  (:require [predict-prostate.state.run-time :refer [results-change results-cursor input-map
                                                     on-screen-inputs-cursor recalculate-model?]]
            [predict-prostate.models.adapters.predict :refer [predict-prostate]]
            [pubsub.feeds :refer [publish]]
            ))

(defn recalculate-model
  "recalculate-model predictions based on a selected model for n years.
  Arity 1 is for 10 years"
  ([input-map n]
    ;(println "input-map " (input-map))
   (publish results-change
            (when (recalculate-model? input-map)
              (let [inputs input-map
                    radical (predict-prostate (assoc inputs :primary-rx 1) n)
                    results {:conservative (predict-prostate (assoc inputs :primary-rx 0) n)
                             :radical-low  (predict-prostate (assoc inputs :primary-rx 0.9) n)
                             :radical      (predict-prostate (assoc inputs :primary-rx 1) n)
                             :radical-high (predict-prostate (assoc inputs :primary-rx 1.1) n)
                             }
                    ]
                results))))
  ([input-map]
    (recalculate-model input-map 10)))

