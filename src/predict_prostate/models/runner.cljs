(ns predict-prostate.models.runner
  (:require [predict-prostate.state.run-time :refer [results-change results-cursor input-map
                                                     on-screen-inputs-cursor]]
            [predict-prostate.models.adapters.predict :refer [predict-prostate]]
            [pubsub.feeds :refer [publish]]
            ))

(defn key-entered [input-map k]
  (let [v (input-map k)]
    (and v (not= v ""))))

(defn recalculate-model?
  "return true if the model can be calculated, else nil.
  im is the result of calling input-map. Note that we have to
  take care when @on-screen-inputs-cursor is the empty set."
  [input-map]
  (and (seq @on-screen-inputs-cursor)
    (every? (fn [k] (key-entered input-map k)) @on-screen-inputs-cursor))
  )

(comment
  (input-map)
  (recalculate-model? (input-map))
  )

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
                (assert (= radical (:radical results)))
                (println "radical = " (get radical :pred-PC-cum))
                results))))
  ([input-map]
    (recalculate-model input-map 10)))


(comment                                                    ;; --- tests

  (recalculate-model? (input-map))
  @results-cursor

  )
