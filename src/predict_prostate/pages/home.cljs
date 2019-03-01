(ns predict-prostate.pages.home
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [predict-prostate.layout.header :refer [header footer]]
            [predict-prostate.content-reader :refer [section all-subsections]]
            [predict-prostate.state.run-time :refer [route-change]]
            [predict-prostate.results.util :refer [alison-blue-1 alison-blue-2 alison-blue-3 alison-pink]]
            [predict-prostate.components.button :refer [start-button]]
            [interop.utils :refer [scrollTo]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]
            ))


(rum/defc block [{:keys [section-id extras]}]

  (let [[title & content] (section section-id)]
    [:.panel                                                ;.panel-default
     [:.panel-heading {:key 1 :style {:color "#005EB4" :background-color "#ffffff" :padding-bottom 0}}
      [:h2 title]]
     [:.panel-body {:key 2 :style {:padding-top 0 :padding-bottom 0}}
      content
      (when extras [:div {:key 2} extras])]]
    ))

(rum/defc home-header
  []
  [:#main-content.row {:tab-index -1
                       :style     {:margin-left  -30
                                   :margin-right -30}}
   [:.col-xs-12
    [:div {:style {:position         "relative"
                   :width            "100%"
                   :background-color alison-blue-1
                   }}
     [:div {:style {:position   "absolute"
                    :width      "100%"
                    :top        0
                    :bottom     "20%"
                    :opacity    0.25
                    :background "linear-gradient(rgba(255,255,255,0), #fff)"
                    }}]
     [:.row
      [:.col-sm-5.col-sm-offset-1
       [:h1.alison-blue-2 {:style {:margin "15px" :margin-top 30}} "What is Predict Prostate?"]
       (let [[title [el1 _ p1] [el2 _ p2]] (section "home-what-is")]
         [:div
          [el1 {:style {:font-size 20 :margin-left 15}} p1]
          [el2 {:style {:font-size 14 :margin-left 15}} p2]])
       (start-button)
       ]
      [:.col-sm-6
       [:img.img-responsive {:src         "assets/icon-imagery.png"
                             :alt         "banner imagery"
                             :aria-hidden true
                             :style       {:width "90%"}}]]]]]])

(rum/defc home < rum/static []

  [:.container-fluid
   (header)
   (home-header)


   [:.row {:style {:margin "0px -30px 15px"}}
    [::.col-sm-10.col-sm-offset-1
     [:.row

      [:.col-md-4 {:key 1}
       (rum/with-key  (block {:icon       [:img {:src         "assets/graph-icon.png"
                                                :alt         "patient icon"
                                                :aria-hidden true
                                                :style       {:margin-top 20 :margin-left 15}}]
                             :section-id "home-what-is"}) 1)]
      [:.col-md-4 {:key 2}
       (rum/with-key  (block {:icon       [:img {:src         "assets/graph-icon.png"
                                                :alt         "patient icon"
                                                :aria-hidden true
                                                :style       {:margin-top 20 :margin-left 15}}]
                             :section-id "home-how-use"}) 2)]
      [:.col-md-4 {:key 3}
       (rum/with-key (block {:icon       [:img {:src         "assets/patient-icon.png"
                                                :alt         "graph icon"
                                                :aria-hidden true
                                                :style       {:margin-top 20 :margin-left 15}}]
                             :section-id "home-what-tell"}) 3)]

      ]]]
   (scrollTo 0)
   [:.row.screen-only
    (footer)]
   ])

(comment
  {:style {:border "1px solid grey" :padding "10px" :height "370px"}}
  {:style {:border "1px solid grey" :padding "10px" :height "180px"}}
  [:div
   [:button.btn.btn-primary.btn-lg. {:style    {:margin-right  "5px"
                                                :margin-bottom "5px"}
                                     :on-click #(publish route-change [:tool nil nil])}


    (icon {:family :ionicon} "ion-stats-bars") " Predict Tool"]

   [:button.btn.btn-default.btn-lg {:style    {:margin-right  "5px"
                                               :margin-bottom "5px"}
                                    :on-click #(publish route-change [:patient nil nil])}

    (icon {:family :ionicon} "ion-ios-information-outline") " Patient Information"]]
  )