(ns predict-prostate.layout.input-panels
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [model
                                                     input-cursor
                                                     input-change
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

;;;
;; PATIENT RELATED
;;;

(rum/defc patient-related-form < rum/reactive [model-keys]
  [:div
   (clear-all-button {:on-click clear-inputs :style {:float "left"}})
   [:div {:style {:float        "right"
                  :margin-top   "8px"
                  :margin-right "15px"}} (settings-button)]

   [:form.form-horizontal {:on-key-press key-event
                           :on-submit    submit-event}
    (when (model-keys :age) (form-entry {:label "Age" :key :age}))
    (when (model-keys :psa) (form-entry {:label "PSA" :key :psa}))
    (when (model-keys :t-stage) (form-entry {:label "T stage" :key :t-stage}))

    [:div {:style {:display (if (#{:grade-group :both} (rum/react (input-cursor :hist-scale)))
                              "block"
                              "none")}}
     (form-entry {:label "Histological grade group" :key :grade-group})]
    [:div {:style {:display (if (#{:gleason :both} (rum/react (input-cursor :hist-scale)))
                              "block"
                              "none")}}
     (form-entry {:label "Gleason scale" :key :gleason})]

    (when (model-keys :biopsy50) (form-entry {:label "Biopsy" :key :biopsy50}))
    (when (model-keys :h-admissions) (form-entry {:label "h-admissions" :key :h-admissions}))

    (when (= (rum/react (input-cursor :h-admissions)) 1)
      (when (model-keys :charlson-comorbidity) (form-entry {:label "comorb" :key :charlson-comorbidity})))
    ]])

(rum/defc patient-related-panel < rum/static [model-keys]
  (titled-panel {}
    (patient-related-form model-keys))
  )

;;;
;; TUMOUR RELATED
;;;

(rum/defc tumour-related-form < rum/reactive rum/static [model-keys]
  [:form.form-horizontal {:on-key-press key-event
                          :on-submit    submit-event}

   (when (model-keys :size) (form-entry {:label "Size" :key :size}))
   (when (model-keys :grade) (form-entry {:label "Grade" :key :grade}))
   (when (model-keys :mode) (form-entry {:label "Detected by" :key :mode}))
   (when (model-keys :nodes)
     [:div
      (form-entry {:label "Positive nodes" :key :nodes})
      (form-entry {:label "Micrometastases" :key :micromets})
      [:div {:style {:color       "#AAA"
                     :margin-left "145px"
                     :margin-top  -5}} "Enabled when positive nodes is zero"]
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

(rum/defc inputs-column < rum/reactive tt-mixin []
  (let [model-keys (live-keys-by-model model)]

    [:.row
     [:.col-sm-12 {:style {:padding-right 0}}
      (patient-related-panel model-keys)
      (tumour-related-panel model-keys)
      (hormone-panel model-keys)
      ]]
    ))