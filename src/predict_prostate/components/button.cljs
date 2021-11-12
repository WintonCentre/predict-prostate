(ns predict-prostate.components.button
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [unknown input-cursor input-change help-key-change settings-change print-change route-change language-change]]
            [graphics.simple-icons :as simple]
            [pubsub.feeds :refer [publish]]
            [clojure.pprint :refer [cl-format]]
            ))

;; Simple text only component that only echoes text
(rum/defc information < rum/reactive [{:keys [key values]
                                       :as   props} group-cursor]
  [:div
   [:div
    [:div values]]])


;; (rum/defc information < rum/reactive [{:keys [values ttt ttt-key]} _]
;;   [:div
;;    [:div
;;     [:div (ttt [ttt-key values])]]])


;; Generic toggle
(rum/defc toggle-button < rum/static [{:keys [ttt key value topic disabled]
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



(rum/defc radio-button-group < rum/reactive [{:keys [ttt key aria-label aria-describedby values unknowable vertical]} group-cursor]
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
                (toggle-button {:ttt ttt :key val :value group-value :topic (input-change key) :disabled (= group-value :disabled)} label)
                label))
            values)

       (when unknowable
         (toggle-button {:ttt ttt :key :unknown :value group-value :topic (input-change key) :disabled (= group-value :disabled)}
                        unknown))
       ]]]))

(rum/defc horiz-radio-button-group < rum/reactive [{:keys [ttt key aria-label aria-describedby values unknowable]} group-cursor]
  (let [group-value (rum/react group-cursor)]
    [:div {:role       "group" :aria-label aria-label :aria-describedby aria-describedby
           :style      {:display "inline-block"}
           :class-name (str "btn-group")}

     (map (fn [[val label]]
            (rum/with-key
              (toggle-button {:ttt ttt :key val :value group-value :topic (input-change key)} label)
              label))
          values)

     (when unknowable
       (toggle-button {:ttt ttt :key :unknown :value group-value :topic (input-change key)} unknown))
     ]))

(rum/defc year-picker < rum/reactive [ttt]
  (horiz-radio-button-group {:ttt ttt
                             :key    :result-year
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
    :aria-label   (str "info on " text)
    :tabIndex     "0"
    :data-toggle  "modal"
    ;:data-target  "#infoModal"
    :data-target  "#topModal"
    :title        title
    :data-content "Help TBD"
    :on-click     #(publish help-key-change help-id)
    :on-key-down  #(when (= "Enter" (.. % -nativeEvent -code))
                     (publish help-key-change help-id))
    :style        {:cursor        "pointer"
                   :padding       "0px 11px"
                   :font-size     "20px"
                   :border-radius 15}}
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


(rum/defc settings-button < rum/static [ttt]
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
     (simple/icon {:family :fa} "cog") " " (ttt [:tools/settings "Settings"])]))


(rum/defc print-button < rum/static [ttt]
  [:button.btn.btn-danger.btn-lg.screen-only.pull-right
   {:type         "button"
    :role         "button"
    :aria-label   "show printable results"
    :tab-index    "0"
    :data-toggle  "modal"
    :data-target  "#printModal"
    :title        "Print Results"
    :data-content "Print content"
    :on-click     #(publish print-change "print")
    :style        {:margin-right 15}
    :on-key-down  #(when (= "Enter" (.. % -nativeEvent -code))
                     (publish print-change "print"))
    }
   (simple/icon {:family :fa} "print") " " (ttt [:home/print-button "Print"])])

(defn menu-item [item lang]
  [:li
   [:a {:href "#"
        :on-click #(publish language-change lang)} item]])

;; Doesn't seem to be used in predict breast either
;; (defn change-language
;;   [ttt supported-languages]
;;   [:div [:button.btn.btn-warning.btn-lg.dropdown-toggle
;;          {:type "button"
;;           :data-toggle "dropdown"
;;           :aria-haspopup "true"
;;           :aria-expanded "false"}
;;          (ttt [:navbar/change-language "Change Language"]) " " [:span.caret]]
;;    (into [:ul.dropdown-menu.lang]
;;          (mapv
;;           (fn [lang] (menu-item (ttt [lang]) lang))
;;           supported-languages))])

(defn start-button [ttt]
  [:button.btn.btn-primary.btn-lg {:aria-label "go to predict tool"
                                   :type       "button"
                                   :on-click   #(publish route-change [:tool nil nil])}
   (simple/icon {:family :fa} "chevron-right") " " (ttt [:home/start-button "Start Predict"])])

(defn start-button-group [ttt supported-languages]
  [:.btn-group {:style {:width 975 :margin-left 15 :margin-bottom 15 :margin-top 15}}
   (start-button ttt)
   [:button.btn.btn-default.btn-lg.dropdown-toggle
    {:type "button"
     :data-toggle "dropdown"
     :aria-haspopup "true"
     :aria-expanded "false"}
    (ttt [:navbar/change-language "Change Language"]) " " [:span.caret]]
   (into [:ul.dropdown-menu.lang]
         (mapv
          (fn [lang] (menu-item (ttt [lang]) lang))
          supported-languages))])