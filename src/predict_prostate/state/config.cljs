(ns predict-prostate.state.config
  (:require [rum.core :as rum]
    ;[predict-prostate.eventbus :refer [event-bus]]
            [pubsub.feeds :refer [->Topic publish create-feed]]
            [predict-prostate.state.localStorage :refer [get-settings!]]))


(def event-bus (create-feed))

;;;
;; Input configuration
;; key - identifies the input widget
;; label - labells it when on screen
;; widget-type - is a key to the multi-method 'make-widget'
;; widget-params - are used by widget code
;; read-only - if true, a publication Topic is not created for ths widget
;; write-only - if true, a cursor is not created for this widget
;; unknowable - if true, an unknown value is valid
;; panel - a key indicating the panel where the widget will appear
;; models - the set of models which use this widget
;; default - the default value of the widget
;;;
(defrecord Input-group [key label widget-type widget-params read-only write-only unknowable panel models default])


(def input-groups
  "Define all input groups associated with one treatment option. The list of all treatment inputs are
  added into the list of input-groups at startup.

  If a treatment widget has value 'nil' we do not flag it as an error. Instead we assume the treatment is not
  to be graphed or displayed. "
  [
   ;; treatments first
   (->Input-group :primary-rx
                  "Treatment Regime"
                  :radio-group
                  [[0 "Conservative"]
                   [1 "Radical"]
                   ]
                  false false nil
                  :primary-rx
                  #{"prostate"}
                  0
                  )

   ;; INPUTS
   (->Input-group :age
                  "Age at diagnosis"
                  :numeric-input
                  {:min 18 :max 100 :step 1 :precision 0}
                  false false true
                  :prp
                  #{"prostate"}
                  "")
   (->Input-group :psa
                  "PSA (ng/ml)"
                  :numeric-input
                  {:min 0 :max 100 :step 1 :precision 1}
                  false false true
                  :prp
                  #{"prostate"}
                  "")
   (->Input-group :t-stage
                  "Clinical stage"
                  :radio-group
                  [[1 "1"]
                   [2 "2"]
                   [3 "3"]
                   [4 "4"]]
                  false false false
                  :prp
                  #{"prostate"}
                  nil)
   (->Input-group :hist-scale
                  "Histological scale"
                  :radio-group
                  [[:grade-group "Histological grade group"]
                   [:gleason "Gleason scale"]]
                  false false false
                  :prp
                  #{"prostate"}
                  :grade-group)
   (->Input-group :grade-group
                  "Histological grade group"
                  :radio-group
                  [[1 "1"]
                   [2 "2"]
                   [3 "3"]
                   [4 "4"]
                   [5 "5"]]
                  false false false
                  :prp
                  #{"prostate"}
                  nil)
   (->Input-group :gleason
                  "Gleason scale"
                  :radio-group
                  [[1 "3+3"]
                   [2 "3+4"]
                   [3 "4+3"]
                   [4 "8"]
                   [5 "9 or 10"]]
                  false false false
                  :prp
                  #{"prostate"}
                  nil)
   (->Input-group :biopsy50
                  "Number of biopsy cores involved"
                  :radio-group
                  [[1 "fewer than half"]
                   [2 "half or more"]]
                  false false true
                  :prp
                  #{"prostate"}
                  nil)
   (->Input-group :charlson-comorbidity
                  "Comorbidity"
                  :radio-group
                  [[0 "No"]
                   [1 "Yes"]]
                  false false false
                  :prp
                  #{"prostate"}
                  nil)

   ; Switches

   (->Input-group :result-year
                  "Years after surgery"
                  :radio-group
                  [[5 "5 years"]
                   [10 "10 years"]]
                  false false false
                  :tables
                  #{"v2.1"}
                  10)

   (->Input-group :show-uncertainty
                  "Show ranges?"
                  :radio-group
                  [[:yes "Yes"]
                   [:no "No"]]
                  false false false
                  :tables
                  #{"v2.1"}
                  :no)

   ]
  )


(defn get-input-default [input-groups key]
  (:default (first (get-in (group-by :key input-groups) [key])))
  )


(comment
  (group-by :panel input-groups)

  (get-input-default input-groups :nodes)
  ;=> ""
  )