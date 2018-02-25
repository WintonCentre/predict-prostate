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
   (->Input-group :chemo
                  "Chemotherapy"
                  :radio-group
                  [[nil "None"]
                   [:2nd "2nd gen"]
                   [:3rd "3rd gen"]
                   ]
                  false false nil
                  :treatment
                  #{"v1.2" "v2.1"}
                  nil)

   #_(->Input-group :chemo
                  "Chemotherapy"
                  :radio-group-vertical
                  [[:taxane "Taxane-containing"]
                   [:anthra "Anthra"]
                   [:cmf "CMF"]
                   [nil "None"]]
                  false false nil
                  :treatment
                  #{"next-gen" "research"}
                  nil)

   (->Input-group :radio
                  "Radiotherapy"
                  :radio-group
                  [[nil "No"]
                   [:yes "Yes"]]
                  false false nil
                  :treatment
                  #{"v2.1"}
                  nil)

   ; note that radiotherapy is enabled by a setting stored in localstorage
   (->Input-group :enable-radio
                  "Enable radiotherapy"
                  :radio-group
                  [[:no "No"]
                   [:yes "Yes"]]
                  false false nil
                  :settings
                  #{"v2.1"}
                  (:enable-radio (get-settings! {:enable-radio :no})))

   #_(->Input-group :heart-dose
                  "Heart Dose (Gy)"
                  :numeric-input
                  {:min 0 :max 50 :step 0.1 :precision 1}
                  false false true
                  :treatment
                  #{"research"}
                  nil)

   #_(->Input-group :lung-dose
                  "Ipsilateral lung dose (Gy)"
                  :numeric-input
                  {:min 0 :max 50 :step 0.1 :precision 1}
                  false false true
                  :treatment
                  #{"research"}
                  nil)

   (->Input-group :horm
                  "Hormone Therapy"
                  :radio-group
                  [
                   [nil "No"]
                   [:yes "Yes"]
                   ]
                  false false nil
                  :treatment
                  #{"v1.2" "v2.1"}
                  nil)

   (->Input-group :bis
                  "Bisphosphonates"
                  :radio-group
                  [[nil "No"]
                   [:yes "Yes"]]
                  false false nil
                  :treatment
                  #{"v2.1"}
                  nil)

   (->Input-group :tra
                  "Trastuzumab"
                  :radio-group
                  [
                   [nil "No"]
                   [:yes "Yes"]
                   ]
                  false false nil
                  :treatment
                  #{"v1.2" "v2.1"}
                  nil)

   (->Input-group :surgery-assumed
                  "Prior treatments"
                  :string
                  "Surgery is assumed"
                  false false false
                  :trp
                  #{"v2.1"}
                  nil)

   ;; inputs from here on
   #_(->Input-group :neo
                  "Neo-adjuvant chemotherapy?"
                  :radio-group
                  [[:yes "Yes"]
                   [:no "No"]]
                  false false false
                  :trp
                  #{"next-gen" "research"}
                  :no)
   #_(->Input-group :surgery
                  "Surgery"
                  :radio-group
                  [[:conserving "Conserving"]
                   [:mastectomy "Mastectomy"]]
                  false false false
                  :trp
                  #{"next-gen" "research"}
                  nil)

   ;; need to split this (v1.2 and v2 go down to 25 years), else min is 35
   (->Input-group :age
                  "Age at diagnosis"
                  :numeric-input
                  {:min 25 :max 85 :step 1 :precision 0}
                  false false true
                  :prp
                  #{"v1.2" "v2.1" "next-gen" "research"}
                  "")
   (->Input-group :post-meno
                  "Post Menopausal?"
                  :radio-group
                  [[:post "Yes"]
                   [:pre "No"]]
                  false false true
                  :prp
                  #{"v2.1"}
                  nil)
   #_(->Input-group :smoking
                  "Smoker?"
                  :radio-group
                  [[:current "Current"]
                   [:ex "Ex"]
                   [:never "Never"]]
                  false false true
                  :prp
                  #{"next-gen" "research"}
                  nil)
   #_(->Input-group :height
                  "Height"
                  :numeric-input
                  {:min 1 :max 3 :step 0.01 :precision 2 :unit "m"}
                  false false true
                  :prp
                  #{"research"}
                  nil)
   #_(->Input-group :weight
                  "Weight"
                  :numeric-input
                  {:min 20 :max 200 :step 0.05 :precision 2 :unit "kg"}
                  false false true
                  :prp
                  #{"research"}
                  nil)
   #_(->Input-group :bmi
                  "BMI"
                  :metric-bmi
                  {:precision 1 :unit "kg/m^2"}
                  true false true
                  :prp
                  #{"research"}
                  nil)
   #_(->Input-group :performance
                  "Performance status"
                  :radio-group
                  (into [] (zipmap (map #(keyword (str "perf" %)) (range 5)) (range 5)))
                  false false true
                  :prp
                  #{"research"}
                  nil)
   #_(->Input-group :ethnicity
                  "Ethnicity"
                  :select
                  {:menu [nil "White" "Black" "Indian subcontinent" "East Asian incl Chinese" "Other"]}
                  false false true
                  :prp
                  #{"research"}
                  nil)
   (->Input-group :mode
                  "Detected by"
                  :radio-group
                  [[:screen "Screening"]
                   [:symptomatic "Symptoms"]]
                  false false true
                  :trp
                  #{"v1.2" "v2.1" "next-gen" "research"}
                  nil)
   (->Input-group :grade
                  "Tumour grade"
                  :radio-group
                  [[:grade1 1] [:grade2 2] [:grade3 3]]
                  false false true
                  :trp
                  #{"v1.2" "v2.1" "next-gen" "research"}
                  nil)
   (->Input-group :size
                  "Tumour size (mm)"
                  :numeric-input
                  {:min 0 :max 500 :step 5 :precision 0}
                  false false true
                  :trp
                  #{"v1.2" "v2.1"}
                  "")
   #_(->Input-group :size
                    "Size"
                    :radio-group
                    [[:size1 "< 20 mm"]
                     [:size2 "20-49 mm"]
                     [:size3 "> 49 mm"]]
                    false false true
                    :trp
                    #{"next-gen" "research"}
                    nil)
   #_(->Input-group :side
                  "Side"
                  :radio-group
                  [[:left "Left"] [:right "Right"]]
                  false false true
                  :trp
                  #{"next-gen" "research"}
                  nil)
   #_(->Input-group :type
                  "Type"
                  :radio-group
                  [[:lobular "Lobular"]
                   [:ductal "Ductal"]
                   [:other "Other"]]
                  false false true
                  :trp
                  #{"research"}
                  nil)
   (->Input-group :nodes
                  "Positive nodes"
                  :numeric-input
                  {:min 0 :max 100 :step 1 :precision 0}
                  false false true
                  :arp
                  #{"v1.2" "v2.1"}
                  "")
   #_(->Input-group :nodes
                    "Positive nodes"
                    :radio-group
                    [[:nodes0 "0"]
                     [:nodes1-3 "1-3"]
                     [:nodes4-9 "4-9"]
                     [:nodes10+ "over 9"]]
                    false false true
                    :arp
                    #{"next-gen" "research"}
                    nil)
   (->Input-group :micromets
                  "Micrometastases"
                  :radio-group
                  [[:yes "Yes"]
                   [:no "No"]]
                  false false true
                  :arp
                  #{"v2.1" "research"}
                  :disabled)
   (->Input-group :er-status
                  "ER status"
                  :radio-group
                  [[:yes "Positive"]
                   [:no "Negative"]]
                  false false false
                  :arp
                  #{"v1.2" "v2.1" "next-gen" "research"}
                  nil)
   (->Input-group :her2-status
                  "HER2 status"
                  :radio-group
                  [[:yes "Positive"]
                   [:no "Negative"]]
                  false false true
                  :arp
                  #{"v1.2" "v2.1" "next-gen" "research"}
                  nil)
   (->Input-group :ki67-status
                  "Ki-67 status"
                  :radio-group
                  [[:yes "Positive"]
                   [:no "Negative"]]
                  false false true
                  :arp
                  #{"v1.2" "v2.1"}
                  nil)
   #_(->Input-group :pr-status
                  "PR status"
                  :radio-group
                  [[:yes "Positive"]
                   [:no "Negative"]]
                  false false true
                  :arp
                  #{"next-gen" "research"}
                  nil)
   #_(->Input-group :oncotype
                  "Oncotype Dx score"
                  :numeric-input
                  {:min 0 :max 100 :step 1 :precision 0 :unit "%"}
                  false false true
                  :arp
                  #{"next-gen" "research"}
                  nil)

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