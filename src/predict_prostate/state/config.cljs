(ns predict-prostate.state.config
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [help-key-change input-cursor]]
            [pubsub.feeds :refer [->Topic publish create-feed]]
            ;[tongue.core :as tongue]
            ;[translations.tongue-base :refer [wrap-translator]]
            ;[translations.config :refer [initial-supported-langs]]
            ))


(rum/defc any-of-these-diseases []
  [:span "Any of " [:a {:style    {:color  "#A94342" :text-decoration "underline"
                                   :cursor "pointer"}
                        :on-click #(publish help-key-change "comorb")} "these diseases?"]])


(rum/defc biopsy-core-examples []
  [:span "Any of " [:a {:style    {:color  "#CCCCCC" :text-decoration "underline"
                                   :cursor "pointer"}
                        :on-click #(publish help-key-change "biopsy-examples")} "See examples"]])


;;;
;; Initial language configuration - this data is used until the full translations files are read in.
;; It does not have to be very complete as calls to the translator function should include the English default
;;;
(def rtl-languages #{:ar :az :dv :he :ku :fa :ur})          ; switch into right to left for these languages



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
  [;; treatments first
   (->Input-group :primary-rx
                  "Treatment Regime"
                  :radio-group
                  [[#_0 :cons "Conservative"]
                   [#_1 :rad "Radical"]
                   ]
                  false false nil
                  :primary-rx
                  #{"prostate" "prostate-release"}
                  0
                  )

   (->Input-group :plot-style
                  "Plot style for treatment benefit"
                  :radio-group
                  [[:area1 "Area"]
                   [:line2 "Line"]]
                  false false nil
                  :plot-style
                  #{"prostate" "prostate-release"}
                  nil)


   ;; INPUTS
   (->Input-group :age
                  "Age at diagnosis"
                  :numeric-input
                  {:min 35 :max 95 :step 1 :precision 0}
                  false false true
                  :prp
                  #{"prostate" "prostate-release"}
                  "")
   (->Input-group :ethnicity
                  "Ethnic Origin"
                  :information
                  ;"Please click on the info button"
                  [:eth-info "Please click on the info button"]
                  false false true
                  :prp
                  #{"prostate" "prostate-release"}
                  "See FAQs")
   (->Input-group :psa
                  "PSA (ng/ml)"
                  :numeric-input
                  {:min 0 :max 100 :step 1 :precision 3}
                  false false true
                  :prp
                  #{"prostate" "prostate-release"}
                  "")
   (->Input-group :t-stage
                  "Clinical T stage"
                  :radio-group
                  [[#_1 :one "1"]
                   [#_2 :two "2"]
                   [#_3 :three "3"]
                   [#_4 :four "4"]]
                  false false false
                  :prp
                  #{"prostate" "prostate-release"}
                  nil)

   (->Input-group :grade-group
                  "Histological grade group"
                  :radio-group
                  [[#_1 :grade1 "1"]
                   [#_2 :grade2 "2"]
                   [#_3 :grade3 "3"]
                   [#_4 :grade4 "4"]
                   [#_5 :grade5 "5"]]
                  false false false
                  :prp
                  #{"prostate" "prostate-release"}
                  nil)
   (->Input-group :gleason
                  "Gleason score"
                  :radio-group
                  [[#_1 :threeplusthree "3+3"]
                   [#_2 :threeplusfour "3+4"]
                   [#_3 :fourplusthree "4+3"]
                   [#_4 :eight "8"]
                   [#_5 :nineorten "9 or 10"]]
                  false false false
                  :prp
                  #{"prostate" "prostate-release"}
                  nil)

   (->Input-group :brca
                  "BRCA"
                  :radio-group
                  [[:nou "Negative or Untested"]
                   [:pos "Positive"]
                   #_[2 "Untested"]]
                  false false false
                  :prp
                  #{"prostate-release"}
                  nil)

   (->Input-group :metastasis
                  "Has the cancer spread (metastasis)?"
                  :radio-group
                  [[:no "No"]
                   [:yes "Yes"]]
                  false false true
                  :prp
                  #{"prostate-release"}
                  nil)


   (->Input-group :intra-ductal
                  "Is there an intra-ductal carcinoma or invasive cribriform component reported  in the biopsies?"
                  :radio-group
                  [[:no "No"]
                   [:yes "Yes"]]
                  false false true
                  :prp
                  #{"prostate-release"}
                  nil)

   (->Input-group :biopsy50
                  "Number of biopsy cores with prostate cancer"
                  :radio-group
                  [[#_1 :fth "fewer than half"]
                   [#_2 :hom "half or more"]]
                  false false true
                  :prp
                  #{"prostate"}
                  nil)

   (->Input-group :biopsy-done
                  "Biopsy data available?"
                  :radio-group
                  [[#_0 :no "No"]
                   [#_1 :yes "Yes"]]
                  false false false
                  :prp
                  #{"prostate-release"}
                  "")

   (->Input-group :biopsy-cores-taken
                  "Biopsy cores taken"
                  :numeric-input
                  {:min 1 :max 100 :step 1 :precision 0}
                  false false false
                  :prp
                  #{"prostate-release"}
                  nil)

   (->Input-group :biopsy-cores-involved
                  "Biopsy cores with any prostate cancer in"
                  :numeric-input
                  #_{:min 1 :max :biopsy-cores-taken :step 1 :precision 0}
                  {:min 1 :max (fn [] (input-cursor :biopsy-cores-taken)) :step 1 :precision 0}
                  false false false
                  :prp
                  #{"prostate-release"}
                  nil)

   (->Input-group :h-admissions
                  "Hospital admission in last 2 years?"
                  :radio-group
                  [[#_0 :no "No"]
                   [#_1 :yes "Yes"]]
                  false false false
                  :prp
                  #{"prostate" "prostate-release"}
                  nil)

   (->Input-group :charlson-comorbidity
                  (any-of-these-diseases)
                  :radio-group
                  [[#_0 :no "No"]
                   [#_1 :yes "Yes"]]
                  false false false
                  :prp
                  #{"prostate" "prostate-release"}
                  nil)

   ; Switches
   (->Input-group :result-year
                  "Years after diagnosis"
                  :radio-group
                  [[#_10 :teny "10 years"]
                   [#_15 :fifty "15 years"]]
                  false false false
                  :tables
                  #{"v2.1"}
                  10)

   (->Input-group :show-uncertainty
                  "More detail?"
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
  (:default (first (get-in (group-by :key input-groups) [key]))))


(comment
  (group-by :panel input-groups)

  (get-input-default input-groups :nodes)
  ;=> ""
  )