(ns predict-prostate.layout.input-panels
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [model
                                                     input-cursor
                                                     input-change
                                                     help-key-change
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

;;;
;; PATIENT RELATED
;;;

(rum/defc patient-related-form < rum/reactive [model-keys]
  [:div

   [:form.form-horizontal {:on-key-press key-event
                           :on-submit    submit-event}
    (when (model-keys :age) [:div (form-entry {:label "Age" :key :age})
                             #_[:div {:style {:color       "#686868"
                                            :margin-left "145px"
                                            :margin-top  -5}}
                              "Age must be between 35 and 95"]])
    (when (model-keys :psa) (form-entry {:label "PSA" :key :psa}))
    (when (model-keys :t-stage) (form-entry {:label "T stage" :key :t-stage}))
    (when (= 4 (rum/react (input-cursor :t-stage))) (less-well-tested "The tool is less well tested in higher stages"))
    (when (model-keys :h-admissions) (form-entry {:label "h-admissions" :key :h-admissions}))
    (when (= (rum/react (input-cursor :h-admissions)) 1)
      (when (model-keys :charlson-comorbidity) (form-entry {:label "comorb" :key :charlson-comorbidity})))
    (when (model-keys :brca) (form-entry {:label "BRCA" :key :brca}))
    ]])

(rum/defc patient-related-panel < rum/static [model-keys]
  (patient-related-form model-keys)
  )

;;;
;; TUMOUR RELATED
;;;
(rum/defc biopsy-core-examples []
  [:span  [:a {:style    {:color  "#000" :text-decoration "underline"
                                   :cursor "pointer"}
                        :on-click #(publish help-key-change "biopsy-examples")} "See examples"]])


(rum/defc tumour-related-form < rum/static rum/reactive [model-keys]
  [:form.form-horizontal {:on-key-press key-event
                          :on-submit    submit-event}

   [:div (form-entry {:label "Histological grade group" :key :grade-group})
    (when (#{4 5} (rum/react (input-cursor :grade-group)))
      (less-well-tested "The tool is less well tested for higher scores"))]
   (form-entry {:label "Gleason score" :key :gleason})


   (when (model-keys :biopsy50)
     (form-entry {:label "Biopsy" :key :biopsy50}))

   (when (model-keys :biopsy-done) (form-entry {:label "Biopsy" :key :biopsy-done}))

   (when (= (rum/react (input-cursor :biopsy-done)) 1)
     [:div
      (when (model-keys :biopsy-cores-taken)
        (form-entry {:label "Number of biopsy cores taken" :key :biopsy-cores-taken}))
      [:div {:style {:color       "#686868"
                     :margin-left "145px"
                     :margin-top  0}}
       "Biopsy cores taken from a target site are considered as 1 core regardless of the number of biopsy cores taken. "
       (biopsy-core-examples)]
      (when (model-keys :biopsy-cores-involved)
        [:span
         (form-entry {:label "Number of biopsy cores with prostate cancer" :key :biopsy-cores-involved})])

      ])



   ])

(rum/defc tumour-related-panel < rum/static [model-keys]
  [:div
   (titled-panel
     {:key   "about-the-tumour-physical"
      :title "Tumour: physical characteristics"
      :help  nil}
     (tumour-related-form model-keys)
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

(rum/defc inputs-row < rum/reactive tt-mixin []
  (let [model-keys (live-keys-by-model model)]
    [:div
     [:.row
      [:.col-md-11.col-md-offset-1.screen-only
       (clear-all-button {:on-click clear-inputs})]]
     [:.row
      [:.col-sm-6.col-sm-offset-1.screen-only {:style {:padding-right 0}}
       (patient-related-panel model-keys)]
      [:.col-sm-5.screen-only {:style {:padding-right 0}}
       (tumour-related-panel model-keys)]

      ]]
    ))
