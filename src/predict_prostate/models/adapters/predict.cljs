(ns predict-prostate.models.adapters.predict
  (:require [predict-prostate.models.prostate :refer [run-prostate]]
            [clojure.string :refer [starts-with?]]
            [goog.object :refer [getValueByKeys]]
            ))


;;;
;; Data adapters that allows us to call the predict_v2 model using v3 inputs
;;;

; map v3 to v1
(def detection-v1 {
                   :screen      1
                   :symptomatic 0                           ; 0,1 reversal is required
                   :unknown     0.204
                   })

; map v3 to v2
(def grade-v1 {
               :grade1  1.0
               :grade2  2.0
               :grade3  3.0
               :unknown 2.13
               })

(def er-status-v1 {
                   :yes 1
                   :no  0
                   })

(def her2-status-v1 {
                     :yes     2
                     :no      1
                     :unknown 0
                     })

(def ki67-v1 {
              :yes     2
              :no      1
              :unknown 0
              })

;; NB chemo is a treatment, so the input is not required and a nil value is possible, meaning "None"
(def chemoGen-v1 {
                  nil  0
                  :2nd 2
                  :3rd 3
                  })

#_(def micromets-v1 {
                     :yes     1
                     :no      0
                     :unknown 9
                     })

(defn nodes-v1 [nodes]
  (cond
    (<= nodes 2) nodes
    (<= nodes 4) 2
    (<= nodes 9) 3
    (<= nodes 99) 4
    :else 1.5))


;
; map v3 to v2
;
(defn numeric [sv] (js/parseInt sv))

(def detection-v2 {
                   :screen      1
                   :symptomatic 0                           ; 0,1 reversal is required
                   :unknown     2
                   })

; map v3 to v2
(def grade-v2 {
               :grade1  1.0
               :grade2  2.0
               :grade3  3.0
               :unknown 9
               })

(def er-status-v2 {
                   :yes 1
                   :no  0
                   })

(def her2-status-v2 {
                     :yes     1
                     :no      0
                     :unknown 9
                     })

(def ki67-v2 {
              :yes     1
              :no      0
              :unknown 9
              })

;; NB chemo is a treatment, so the input is not required and a nil value is possible, meanning "None"
(def chemoGen-v2 {
                  nil  0
                  :2nd 2
                  :3rd 3
                  })

(def micromets-v2 {
                   :yes      1
                   :no       0
                   :unknown  9
                   :disabled 9
                   })

(defn nodes-v2 [nodes micromets]
  (let [nodes (if (string? nodes) (numeric nodes) nodes)]
    (if (and (zero? nodes) (= micromets :yes))
      0.5
      nodes)))

;;;
;; Call predict-prostate - cljs version (slower but nicer!)
;;;
(defn- predict-prostate
  "Call the v2 model using v3 data. Note that fields that MUST be entered should NOT have default values. This is so we
  can detect incomplete entries by looking for nil values."
  [{:keys [age size nodes grade er-status mode chemo her2-status ki67-status micromets rtime]
    :or   {age 25 size 10 nodes 1 grade :unknown er-status :yes mode :screen chemo :2nd her2-status :yes ki67-status :unknown micromets :no rtime 5}
    :as   v3-data
    }]

  (run-prostate (numeric age)
           size
           (nodes-v2 nodes micromets)
           (grade-v2 grade)
           (er-status-v2 er-status)
           (detection-v2 mode)
           (chemoGen-v2 chemo)
           (her2-status-v2 her2-status)
           (ki67-v2 ki67-status)
           rtime)

  )

(comment
  (predict2-from-v3-inputs {:nodes 1, :tra :yes, :age 41, :size 45, :her2-status :yes, :mode :symptomatic, :grade :unknown, :horm :yes, :ki67-status :yes, :er-status :yes, :chemo :3rd, :micromets :unknown, :rtime 10})

  ;version 1 tests
  (predict1-from-v3-inputs {})
  (predict1-from-v3-inputs {:rtime 5})
  (predict1-from-v3-inputs {:rtime 10})

  ;version 2 tests
  (into (sorted-map) (predict2-from-v3-inputs {}))
  (predict2-from-v3-inputs {:rtime 5})
  (predict2-from-v3-inputs {:rtime 10})

  (def js-map #js {"a" 1 "b" "c"})
  (js->clj js-map :keywordize-keys true)
  ; => {"a" 1, "b" "c"}  ???? why not {:a 1, :b "c"} ???
  )