(ns translations.root
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [t-state-cursor ttt-cursor edit-change]]
            [pubsub.feeds :refer [publish]]))

(defn _ttt
  [ttt arg]
  (let [text-or-v (ttt arg)
        text (if (vector? text-or-v)
               (if (> (count text-or-v) 1)
                 (second text-or-v)
                 (if (> (count text-or-v) 0)
                   (str (first text-or-v))
                   "**argv**"))
               text-or-v)
        lang (:lang (rum/react t-state-cursor))]
    [lang text]))

; prod mode ttt
(rum/defc ttt < rum/reactive
  [arg]
  (let [[lang text] (_ttt (rum/react ttt-cursor) arg)]
    [:span text]))

; editor mode ttt
; edit mode
(rum/defc ttt-edit < rum/reactive
  "Further wrap the translation function in one that provides an editable and clickable span instead of just the string.
                     Note that this naturally sits in the application rather than in the translations namespace."
  [arg]
  (let [[lang text] (_ttt (rum/react ttt-cursor) arg)]

    (if (and (not= :en (:lang (rum/react t-state-cursor)))
             (vector? arg)
             (not= text (get-in @t-state-cursor [:translations lang (first arg)])))
      [:span {:style    {:background-color "#e488"
                         :color            "#fff"
                         :border           "1px dashed #e48"}
              :on-click #(do
                           ;(println "ttt-edit 1 text = " text "arg = " arg)
                           (publish edit-change arg)
                           (.stopPropagation %))} text]

      [:span {:style    {:background-color "#e482"
                         ;:display          "inline-block" ;this disrupts the alignment of text in the home page
                         :min-width        "1ex"
                         :min-height       "10px"
                         :border           (if (= text "") "1px solid red" "1px solid #ccc")
                         }
              :on-click #(do
                           (publish edit-change arg)
                           (.stopPropagation %))} text])))


