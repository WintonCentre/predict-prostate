(ns predict-prostate.pages.home
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [predict-prostate.layout.header :refer [header footer]]
            [predict-prostate.content-reader :refer [section all-subsections]]
            [predict-prostate.state.run-time :refer [route-change]]
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


(rum/defc home < rum/static [section-id]

  [:.container
   [:.row
    [:.col-sm-12
     (header)

     [:.row {:style {:margin-top "20px"}}
      [:.col-sm-12
       [:.row
        [:.col-sm-5
         (rum/with-key (block {:section-id "home-what-is"}) 1)
         (rum/with-key (block {:section-id "home-what-tell"}) 2)
         (rum/with-key (block {:section-id "home-how-use"
                               :extras     [:button.btn.btn-primary.btn-lg.pull-right {:style    {:margin-right  "5px"
                                                                                                  :margin-bottom "5px"}
                                                                                       :on-click #(publish route-change [:tool nil nil])}


                                            (icon {:family :ionicon} "ion-stats-bars") " Predict Tool"]}) 3)]


        [:.col-xs-12.col-sm-7 {:style {:border "1px none #CCCCCC" :border-radius "10px" :padding "15px" :margin-left "-15px" :padding-top "50px"}}
         [:row
          [:.col-xs-12
           [:img.img-responsive {:src "assets/home-example-screens.png"}]]
          [:.col-xs-12.text-center {:style {:color "#005EB4" :padding-top "10px" :font-size "14px"}} "Example outputs"]]
         ]]
       ]]

     (footer)]]])

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