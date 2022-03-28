(ns predict-prostate.components.helpful-form-groups
  (:require [clojure.string :as str :refer [replace lower-case index-of]]
            [rum.core :as rum]
            [predict-prostate.components.select :refer [picker]]
            [predict-prostate.state.run-time :refer [input-cursor input-change input-widget input-label error? error-by-key? ttt-cursor]]
            [predict-prostate.mixins :refer [active-monitor]]
            [predict-prostate.components.button :refer [small-help-button]]
            [predict-prostate.components.util :refer [widget-ttt]]
            [predict-prostate.state.load-config :refer [render-widget]]
    ;[predict-prostate.results.util :refer [error? error-by-key?]]
            [pubsub.feeds :refer [publish]]
            ))

(rum/defc helpful-input < rum/static rum/reactive [{:keys [ttt label key error help-id] :as props} children]
  [:div {:key   key :data-key key
         :class (str "form-group" (if error " has-error" ""))
         :style {:vertical-align "top"
                 :width          "100%"
                 :display        "inline-block"}}
   [:div {:style {:display        "inline-block"
                  :margin-left    "10px"
                  :width          "30px"
                  :vertical-align "middle"}}
    (when help-id (small-help-button {:help-id help-id}))]

   [:div {:style {:display        "inline-block"
                  :vertical-align "middle"
                  :width          "100px"}}
    [:label.control-label {:style (merge {:textAlign "left"
                                          :padding   "1px 5px"
                                          :word-break "break-word"}
                                         (when (= (rum/react (input-cursor key)) :disabled) {:color "#CCC"}))
                           :for   (name key)}
     (widget-ttt ttt "help" key label) #_(if (fn? label) (label) label)]]

   [:div {:style {:display        "inline-block"
                  :margin-left    "10px"
                  :text-align     "left"
                  :width          "auto"                    ;"calc(100% - 150px)"
                  :vertical-align "middle"
                  }}
    [:div {:style {:padding-left   0
                   :display        "inline-block"
                   :vertical-align "middle"
                   }} children]]])

; todo: remove label parameters and use (input-label key) instead
; This allows us to use different widgets and different labels in different models

(rum/defc form-entry < rum/reactive active-monitor [{:keys [ttt label key]}]
  (helpful-input {:ttt     (if ttt ttt (rum/react ttt-cursor))
                  :label   (input-label key)                ;label
                  :key     key
                  :help-id (if label (replace (lower-case label) " " "-"))
                  :error   (error? (rum/react (input-cursor key)))}
                 (render-widget ttt key) #_(input-widget key)))



