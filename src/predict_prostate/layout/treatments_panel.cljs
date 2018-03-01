(ns predict-prostate.layout.treatments-panel
  (:require                                                 ;[org.martinklepsch.derivatives :as derivs :refer [drv]]
            [rum.core :as rum]
            [clojure.string :as s :refer [replace lower-case]]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [graphics.simple-icons :refer [icon]]
            [predict-prostate.mixins :refer [sizing-mixin]]
            [predict-prostate.state.run-time :refer [model results-cursor input-widget input-cursor input-label]]
            [predict-prostate.components.panels :refer [titled-panel]]
            [predict-prostate.components.button :refer [small-help-button treatment-help-button]]
            [predict-prostate.state.load-config :refer [live-keys-by-model]]
            [predict-prostate.state.localStorage :refer [get-settings!]]
            [predict-prostate.mixins :refer [treatment-monitor]]
            [predict-prostate.content-reader :refer [all-subsections]]
    ;[predict-prostate.results.util :refer [strip-root]]
            [pubsub.feeds :refer [publish]]
            [interop.jsx :refer [jsx]]))


(defstyle treatments-style
  ["div" {:font-size "12px"}]
  [".treatments-header"
   {:background-color "rgba(255, 140, 0, 1) !important"
    :color            "white !important"
    :font-size        "10px !important"}
   ["form" {:border "1px solid red"}]])

(defstyle treatment-input-style
  [".closer" {:margin-bottom "10px"}])

(rum/defc dummy-input < rum/reactive rum/static
  [{:keys [label help-id key error] :as props} children]

  #_[:div {:key   key :data-key key
           :class (str "form-group " (:closer treatment-input-style) (if error " has-error" ""))}
     [:.col-xs-6
      [:label.control-label {:style {:width "100%" :text-align "right"} :for (name key)} label " "
       (when help-id (small-help-button {:help-id (s/replace (lower-case help-id) " " "-")}))
       ]]
     [:.col-xs-6
      children]]

  [:div {:key   key :data-key key
         :class (str "form-group ")
         :style {:vertical-align "top"
                 :width          "100%"
                 :display        "inline-block"}}

   [:div {:style {:display        "inline-block"
                  :margin-left    "10px"
                  :width          "30px"
                  :vertical-align "middle"}}
    (when help-id (small-help-button {:help-id (s/replace (lower-case help-id) " " "-")}))]

   [:div {:style {:display        "inline-block"
                  :vertical-align "middle"
                  :width          "100px"}}
    [:label.control-label {:style {:width      "100%"
                                   :text-align "left"
                                   :padding    "1px 5px"} :for (name key)} label
     ]]

   [:div {:style {:display        "inline-block"
                  :margin-left    "10px"
                  :text-align     "left"
                  :width          "auto"                    ;"calc(100% - 150px)"
                  :vertical-align "middle"
                  }}
    [:div {:style {:padding-left   0
                   :display        "inline-block"
                   :vertical-align "middle"
                   }} children]]]

  )

(rum/defc treatment-input < rum/reactive rum/static treatment-monitor
  [{:keys [label help-id key]} children]
  (let [tk key]
    [:div {:key   key :data-key key
           :class (str "form-group ")
           :style {:vertical-align "top"
                   :width          "100%"
                   :display        "inline-block"}}

     [:div {:style {:display        "inline-block"
                    :margin-left    "10px"
                    :width          "140px"
                    :vertical-align "middle"}}
      (when help-id (treatment-help-button {:help-id (s/replace (lower-case help-id) " " "-")}))]

     [:div {:style {:display        "inline-block"
                    :vertical-align "middle"
                    :width          "100px"}}
      [:label.control-label {:style (merge {:width     "100px"
                                            :textAlign "left"
                                            :padding   "1px 5px"}
                                           (when (= :disabled (rum/react (input-cursor key)))
                                             {:color "#CCC"}))
                             :for   (name key)}
       label]]
     [:div {:style {:display        "inline-block"
                    :margin-left    "10px"
                    :text-align     "left"
                    :width          "auto"                  ;"calc(100% - 150px)"
                    :vertical-align "middle"
                    }}
      [:div {:style {:padding-left   0
                     :display        "inline-block"
                     :vertical-align "middle"
                     }} children]
      ]

     ])
  )


(defn add-suffix [key n] key)

(comment
  (add-suffix :chemo 0)
  ; => :chemo
  )


(rum/defc assumed-treatment < rum/reactive
                              "Creates a labelled treatment input widget for the given treatment option and key"
  [label key]
  (dummy-input {:label   (input-label key)                  ; (if-let [lab (input-label key-n)] lab label)
                :help-id label
                :key     key}
               (input-widget key)))

(rum/defc labelled-treatment < rum/reactive
                               "Creates a labelled treatment input widget for the given treatment option and key"
  [label key]
  (treatment-input {:label   (input-label key)              ; (if-let [lab (input-label key-n)] lab label)
                    :help-id label
                    :key     key}
                   (input-widget key)))


(rum/defcs treatments-form < rum/reactive sizing-mixin
  [state {:keys [width font-scale h-over-w option]
          :or   {width      "100%"
                 h-over-w   1
                 font-scale 1}}]
  (let [width-1 (rum/react (:width state))]

    [:form.form-horizontal {:style {:width     width
                                    :font-size (* (/ width-1 25) font-scale)}}
     [:div
      (labelled-treatment "Regime" :primary-rx)
      ]]))



(rum/defc treatments-options < rum/reactive
  []
  (when (rum/react results-cursor)
    (treatments-form {:h-over-w 1.5}))
  )


(comment

  (live-keys-by-model model)
  (:chemo (live-keys-by-model model))
  )