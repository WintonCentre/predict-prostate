(ns predict-prostate.components.helpful-form-groups
  (:require [clojure.string :as str]
            [rum.core :as rum]
            [predict-prostate.components.select :refer [picker]]
            [predict-prostate.state.run-time :refer [input-cursor input-change input-widget input-label]]
            [predict-prostate.mixins :refer [active-monitor]]
            [predict-prostate.components.button :refer [small-help-button]]
            [pubsub.feeds :refer [publish]]
            ))

(rum/defc helpful-input < rum/static rum/reactive [{:keys [label key error help-id] :as props} children]
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
                                          :padding   "1px 5px"}
                                         (when (= (rum/react (input-cursor key)) :disabled) {:color "#CCC"}))
                           :for   (name key)}
     label]]

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

(defn error? [v]
  (or (nil? v) (= v "")))

(rum/defc form-entry < rum/reactive active-monitor [{:keys [label key] :as props}]
  (helpful-input {:label   (input-label key)                ;label
                  :key     key
                  :help-id (if label (str/replace (str/lower-case label) " " "-"))
                  :error   (error? (rum/react (input-cursor key)))}
                 (input-widget key)))
