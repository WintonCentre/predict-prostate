(ns predict-prostate.components.button
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [unknown input-cursor input-change help-key-change settings-change]]
            [graphics.simple-icons :as simple]
            [pubsub.feeds :refer [publish]]
            [clojure.pprint :refer [cl-format]]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            ))

;; Generic toggle
(rum/defc toggle-button < rum/static [{:keys [key value topic disabled]
                                       :or   {disabled false}} label]
  (let [handler #(when (not= key value) (publish topic key))]

    [:button {:class-name  (str "btn btn-default btn-sm custom" (if (= key value) " active" ""))
              :disabled    disabled
              :type        "button"
              :key         label
              :on-key-down #(when (= (.. % -nativeEvent -code) "Enter")
                              (handler))
              :onClick     handler
              }
     label]))


(rum/defc radio-button-group < rum/reactive [{:keys [key aria-label aria-describedby values unknowable vertical]
                                              :as   props} group-cursor]
  (let [group-value (rum/react group-cursor)]
    ;; extra divs are necessary for correct error state outlining
    ;;
    ;; Apart from valid values, the value may also be :disabled
    [:div
     [:div
      [:div {:role       "group" :aria-label aria-label :aria-describedby aria-describedby
             :class-name (str "btn-group" (if vertical "-vertical" ""))}

       (map (fn [[val label]]
              (rum/with-key
                (toggle-button {:key val :value group-value :topic (input-change key) :disabled (= group-value :disabled)} label)
                label))
            values)

       (when unknowable
         (toggle-button {:key :unknown :value group-value :topic (input-change key) :disabled (= group-value :disabled)}
                        unknown))
       ]]]))

(rum/defc horiz-radio-button-group < rum/reactive [{:keys [key aria-label aria-describedby values unknowable] :as props} group-cursor]
  (let [group-value (rum/react group-cursor)]
    [:div {:role       "group" :aria-label aria-label :aria-describedby aria-describedby
           :style      {:display "inline-block"}
           :class-name (str "btn-group")}

     (map (fn [[val label]]
            (rum/with-key
              (toggle-button {:key val :value group-value :topic (input-change key)} label)
              label))
          values)

     (when unknowable
       (toggle-button {:key :unknown :value group-value :topic (input-change key)} unknown))
     ]))

(rum/defc year-picker []
  (horiz-radio-button-group {:key    :result-year
                             :values [[10 "10"]
                                      [15 "15"]
                                      ]}
                            (input-cursor :result-year)))

(rum/defc radio-button-group-vertical
  [props group-cursor]
  (radio-button-group (merge props {:vertical true}) group-cursor))

;;;
;; Buttons invoking modals
;;;


(rum/defc small-help-button < rum/static [{:keys [help-id icon-name title text] :as props}]
  [:button.btn.btn-info.btn-sm
   {:type         "button"
    :role         "button"
    :tabIndex     "0"
    :data-toggle  "modal"
    ;:data-target  "#infoModal"
    :data-target  "#topModal"
    :title        title
    :data-content "Help TBD"
    :on-click     #(publish help-key-change help-id)
    :on-key-down  #(when (= "Enter" (.. % -nativeEvent -code))
                     (publish help-key-change help-id))}
   (simple/icon {:family :fa} "info") ""])

(rum/defc treatment-help-button < rum/static [{:keys [help-id icon-name title text] :as props}]
  [:button.btn.btn-info.btn-sm
   {:type         "button"
    :role         "button"
    :tabIndex     "0"
    :data-toggle  "modal"
    ;:data-target  "#infoModal"
    :data-target  "#topModal"
    :title        title
    :data-content "Help TBD"
    :on-click     #(publish help-key-change help-id)
    :on-key-down  #(when (= "Enter" (.. % -nativeEvent -code))
                     (publish help-key-change help-id))}
   (simple/icon {:family :fa} "warning") " Potential harms"])


(rum/defc settings-button < rum/static []
  (let [settings "settings"]
    [:button.btn.btn-default
     {:type         "button"
      :role         "button"
      :tabIndex     "0"
      :data-toggle  "modal"
      :data-target  "#settingsModal"
      :title        "Settings"
      :data-content "Settings content"
      :on-click     #(publish settings-change settings)
      :on-key-down  #(when (= "Enter" (.. % -nativeEvent -code))
                       (publish settings-change settings))
      }
     (simple/icon {:family :fa} "cog") " Settings"]))



