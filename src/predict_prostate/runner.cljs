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

;;
;; Define a multimethod that recalculate-models predictions based on a selected model
;;
(defmulti recalculate-model "recalculates the selected model" (fn [model inputs] model))

(defmethod recalculate-model "prostate"
  [model input-map]

  (publish results-change
           (when (recalculate-model? input-map)
             (let [results {:conservative (predict-prostate (assoc input-map :n 10 :primary-rx 0))
                            :radical      (predict-prostate (assoc input-map :n 10 :primary-rx 1))}]
               (println results)
               results
               )
             )))



(comment                                                    ;; --- tests

  (recalculate-model? (input-map))
  @results-cursor

  )
