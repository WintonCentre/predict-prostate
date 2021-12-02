(ns predict-prostate.layout.input-panels
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [model
                                                     input-cursor
                                                     input-change
                                                     help-key-change
                                                     route-change
                                                     ]]
            [predict-prostate.components.button :refer [settings-button]]

    ;[predict-prostate.layout.input-panels :refer [clear-all-button]]
            [predict-prostate.layout.navbar :refer [clear-all-button]]
            [predict-prostate.state.load-config :refer [live-keys-by-model]]
            [predict-prostate.state.mutations :refer [clear-inputs]]
            [predict-prostate.components.helpful-form-groups :refer [form-entry]]
            [predict-prostate.components.panels :refer [titled-panel]]
            [predict-prostate.components.helpful-form-groups :refer [helpful-input form-entry]]
            [predict-prostate.components.bs-mixins :refer [tt-mixin]]
            [pubsub.feeds :refer [publish]]
            ))


(defn key-event
  "prevent undesirable reload behaviour on form events - particularly in IE10 - due to unwanted onSubmits"
  [e]
  (let [nev (.-nativeEvent e)]
    (when (= "Enter" (.-key nev))
      (.preventDefault nev))))

(defn submit-event
  "prevent undesirable reload behaviour on form events - particularly in IE10 - due to unwanted onSubmits"
  [e]
  (let [nev (.-nativeEvent e)]
    (.preventDefault nev)
    (.stopPropagation nev)
    ))


;;;
;; TREATMENTS RECEIVED
;;;
(rum/defc treatments-received-help < rum/static []
  [:div "Treatments received help"])


(rum/defc treatments-received-form < rum/static [model-keys]
  [:form.form-horizontal {:on-key-press key-event
                          :on-submit    submit-event}
   ])

(rum/defc treatments-received-panel < rum/static [model-keys]
  [:div
   (titled-panel
     {:key   "treatments-already-received"
      :title "Treatments already received"
      :help  treatments-received-help}
     (treatments-received-form model-keys))]
  )

(rum/defc less-well-tested [text]
  [:div {:style {:color       "#686868"
                 :margin-left "145px"
                 :margin-top  0}}
   [:i.fa.fa-exclamation-triangle {:aria-hidden "true" :style {:color "orange" :padding-right 5}}]
   text])

(rum/defc mets-warning [text]
  [:div {:style {:color       "#686868"
                 :margin-left "145px"
                 :margin-top  0}}
   [:i.fa.fa-exclamation-triangle {:aria-hidden "true" :style {:color "orange" :padding-right 5}}]
   text]
  )

(rum/defc mets-danger [text]
  [:div {:style {:color       "#f00"                        ;"#686868"
                 :margin-left "145px"
                 :margin-top  0}}
   [:i.fa.fa-exclamation-triangle {:aria-hidden "true" :style {:color "red" :padding-right 5}}]
    text]
  )
;;;
;; PATIENT RELATED
;;;

(rum/defc patient-related-form < rum/reactive [ttt model-keys]
  [:div

   [:form.form-horizontal {:on-key-press key-event
                           :on-submit    submit-event}
    (when (model-keys :age) [:div (form-entry {:ttt ttt :label "Age" :key :age})
                             #_[:div {:style {:color       "#686868"
                                              :margin-left "145px"
                                              :margin-top  -5}}
                                "Age must be between 35 and 95"]])

    (when (model-keys :psa) (form-entry {:ttt ttt :label "PSA" :key :psa}))
    (when (model-keys :t-stage) (form-entry {:ttt ttt :label "T stage" :key :t-stage}))
    (when (= 4 (rum/react (input-cursor :t-stage))) (less-well-tested "The tool is less well tested in higher stages"))
    (when (model-keys :h-admissions) (form-entry {:ttt ttt :label "h-admissions" :key :h-admissions}))
    (when (= (rum/react (input-cursor :h-admissions)) 1)
      (when (model-keys :charlson-comorbidity) (form-entry {:ttt ttt :label "comorb" :key :charlson-comorbidity})))
    (when (model-keys :brca) (form-entry {:ttt ttt :label "BRCA" :key :brca}))
    (form-entry {:ttt ttt :label "Ethnicity" :key :ethnicity})]])


(rum/defc patient-related-panel < rum/static [ttt model-keys]
  (patient-related-form ttt model-keys)
  )

;;;
;; TUMOUR RELATED
;;;
(rum/defc biopsy-core-examples [ttt]
  [:span  [:a {:style    {:color  "#000" :text-decoration "underline"
                                   :cursor "pointer"}
                        :on-click #(publish help-key-change "biopsy-examples")} (ttt [:bio/examples "See examples"])]
   " " (ttt [:bio/and "and"]) " "
   [:a {:style    {:color  "#000" :text-decoration "underline"
                   :cursor "pointer"}
        :on-click #(publish route-change [:about {:page :faqs}])} (ttt [:bio/faqs "FAQs"])]
   "."])

(rum/defc biopsy-small-text
  ([ttt top-offset]
   [:div {:style {:color       "#686868"
                  :margin-left "145px"
                  :margin-top  (str top-offset "px")}}
    (ttt [:bio/cores "Biopsy cores taken from a target site are considered as 1 core regardless of the number of biopsy cores taken. "])
    (biopsy-core-examples ttt)]))


(rum/defc tumour-related-form < rum/static rum/reactive [ttt model-keys]
  [:form.form-horizontal {:on-key-press key-event
                          :on-submit    submit-event}

   [:div (form-entry {:ttt ttt :label "Histological grade group" :key :grade-group})
    (when (#{4 5} (rum/react (input-cursor :grade-group)))
      (less-well-tested (ttt [:tumour/lwt "The tool is less well tested for higher scores"])))]
   (form-entry {:ttt ttt :label "Gleason score" :key :gleason})

   (when (model-keys :biopsy50)
     (form-entry {:ttt ttt :label "Biopsy" :key :biopsy50}))

   (when (model-keys :biopsy-done) (form-entry {:ttt ttt :label "Biopsy" :key :biopsy-done}))

   (when (= (rum/react (input-cursor :biopsy-done)) 1)
     [:div
      (when (model-keys :biopsy-cores-taken)
        (form-entry {:ttt ttt :label "Number of biopsy cores taken" :key :biopsy-cores-taken}))
      (biopsy-small-text ttt 0)

      (when (model-keys :biopsy-cores-involved)
        (form-entry {:ttt ttt :label "Number of biopsy cores with prostate cancer" :key :biopsy-cores-involved}))
      (biopsy-small-text ttt -12)
      ])

   (when (model-keys :intra-ductal) (form-entry {:ttt ttt :label "intraductal" :key :intra-ductal}))
   (when (#{:yes} (rum/react (input-cursor :intra-ductal)))
     (mets-danger (ttt [:tumour/notsuit "This tool is not suitable for men where these features are present."])))
   (when (#{:unknown} (rum/react (input-cursor :intra-ductal)))
     (mets-warning (ttt [:tumour/notacc "This tool does not account for intra-ductal carcinoma or invasive cribriform component. If you're unsure use the data with caution and please consult your medical professional."])))


   (when (model-keys :metastasis) (form-entry {:ttt ttt :label "metastasis" :key :metastasis}))
   (when (#{:yes} (rum/react (input-cursor :metastasis)))
     (mets-danger (ttt [:tumour/notdisplayed "Results will not be displayed as this tool is only for use in men without metastatic disease."])))
   (when (#{:unknown} (rum/react (input-cursor :metastasis)))
     (mets-warning (ttt [:tumour/onlywithout "This tool is only for use in men without metastatic disease. If you're unsure use the data with caution and please consult your medical professional"])))
   ])

(rum/defc tumour-related-panel < rum/static [ttt model-keys]
  [:div
   (titled-panel
     {:key   "about-the-tumour-physical"
      :title "Tumour: physical characteristics"
      :help  nil}
     (tumour-related-form ttt model-keys)
     )]
  )


(rum/defc hormone-form < rum/static [model-keys]
  [:form.form-horizontal {:on-key-press key-event
                          :on-submit    submit-event}
   (when (model-keys :er-status) (form-entry {:label "ER status" :key :er-status}))
   (when (model-keys :her2-status) (form-entry {:label "HER2 status" :key :her2-status}))
   (when (model-keys :ki67-status) (form-entry {:label "Ki-67 status" :key :ki67-status}))
   ])

(rum/defc hormone-panel < rum/static [model-keys]
  [:div
   (titled-panel
     {:key   "about-the-tumour-biological"
      :title "Tumour: biological characteristics"
      :help  nil}
     (hormone-form model-keys))]
  )

(rum/defc inputs-row < rum/reactive tt-mixin [ttt]
  (let [model-keys (live-keys-by-model model)]
    [:div
     [:.row
      [:.col-md-11.col-md-offset-1.screen-only
       (clear-all-button {:ttt ttt :on-click clear-inputs})]]
     [:.row
      [:.col-sm-6.col-sm-offset-1.screen-only {:style {:padding-right 0}}
       (patient-related-panel ttt model-keys)]
      [:.col-sm-5.screen-only {:style {:padding-right 0}}
       (tumour-related-panel ttt model-keys)]

      ]]
    ))


