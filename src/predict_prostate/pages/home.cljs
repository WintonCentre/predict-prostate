(ns predict-prostate.pages.home
  (:require [rum.core :as rum]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [predict-prostate.layout.header :refer [header footer]]
            [predict-prostate.content-reader :refer [section all-subsections]]
            [predict-prostate.state.run-time :refer [route-change help-key-change t-state-cursor]]
            [predict-prostate.results.util :refer [alison-blue-1 alison-blue-2 alison-blue-3 alison-pink]]
            [predict-prostate.components.button :refer [start-button-group]]
            [predict-prostate.components.bs3-modal :refer [top-modal editor-modal]]
            [interop.utils :refer [scrollTo]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]
            ))


(rum/defc block [ttt {:keys [section-id extras]}]

  (let [[title & content] (section ttt section-id)]
    [:.panel                                                ;.panel-default
     [:.panel-heading {:key 1 :style {:color "#005EB4" :background-color "#ffffff" :padding-bottom 0}}
      [:h2 title]]
     [:.panel-body {:key 2 :style {:padding-top 0 :padding-bottom 0}}
      content
      (when extras [:div {:key 2} extras])]]
    ))

(rum/defc home-header
  [ttt supported-languages]
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
       [:h1.alison-blue-2 {:style {:margin "15px" :margin-top 30}} "Predict Prostate"]
       (let [[title [el1 _ p1] [el2 _ p2] [el3 _ p3]] (section ttt "home-strap-line")]
         [:div
          [el1 {:style {:font-size 20 :margin-left 15}} p1]
          [el2 {:style {:font-size 14 :margin-left 15}} p2]])

       [:p {:style {:font-size 18 :margin-left 15}} [:a {:href "https://www.nice.org.uk/guidance/ng131/resources/endorsed-resource-predict-prostate-6898604077" :target "_blank"} (ttt [:home/endorsement "Endorsed by the National Institute for Health and Care Excellence in the UK"])]]
       #_[:p {:style {:font-size 14 :margin-left 15}} [:a {:href "#" :on-click #(publish help-key-change "endorsement")} "Endorsed by the National Institute for Health and Care Excellence in the UK"]]

       (start-button-group ttt supported-languages)

       [:p {:style {:margin-left 15}}
        [:i (ttt [:home/dymtv "Did you mean to visit"]) " "] [:a {:href "https://breast.predict.nhs.uk"} "Predict Breast Cancer"] (ttt [:home/qmark "?"])]
       [:p {:style {:margin-left 15
                    :color "#4c4c6b"}}
        (ttt [:home/notice "As Predict's usage grows, we have moved to a new URL. Please adjust your bookmarks."])]]
      [:.col-sm-6
       [:img.img-responsive {:src         "assets/icon-imagery.png"
                             ;:src         "assets/del-temp-smiley-scaled.jpg"
                             :alt         "banner imagery"
                             :aria-hidden true
                             ;:style       {
                             ;              :width "90%"
                             ;              :border-radius "15px 50px 30px"
                             ;              :padding "15px"}
                             }]]]]]])

(rum/defc home < rum/static rum/reactive
  [ttt]
  (let [t-state (rum/react t-state-cursor)
        supported-languages (:languages t-state)]

    [:.container-fluid
     (header ttt)
     (home-header ttt supported-languages)


     [:.row {:style {:margin "0px -30px 15px"}}
      [:.col-sm-10.col-sm-offset-1 {:key 1}
       [:.row

        [:.col-md-4 {:key 1}
         (rum/with-key  (block ttt {:icon       [:img {:src         "assets/graph-icon.png"
                                                       :alt         "patient icon"
                                                       :aria-hidden true
                                                       :style       {:margin-top 20}}]
                                    :section-id "home-what-is"}) 1)]
        [:.col-md-4 {:key 2}
         (rum/with-key  (block ttt {:icon       [:img {:src         "assets/graph-icon.png"
                                                       :alt         "patient icon"
                                                       :aria-hidden true
                                                       :style       {:margin-top 20}}]
                                    :section-id "home-how-use"}) 2)]
        [:.col-md-4 {:key 3}
         (rum/with-key (block ttt {:icon       [:img {:src         "assets/patient-icon.png"
                                                      :alt         "graph icon"
                                                      :aria-hidden true
                                                      :style       {:margin-top 20}}]
                                   :section-id "home-what-tell"}) 3)]]]
      [:.col-sm-10.col-sm-offset-1 {:key 2}
       [:.row
        [:.col-md-4 {:key 1
                     :style {:font-size 16}}
         [:p {:style {:margin-left 15}} (ttt [:home/tfivaa "The following introductory videos are available:"])]]
        [:.col-md-8 {:key 2
                     :style {:font-size 16 #_#_:margin-left 15}}
         [:.row {:key 2 :style {:margin-left 0}}
          [:.col-sm-2 {:key 1 :style {:font-size 16 :margin-left 0}} (ttt [:hi "Hindi"])]
          [:.col-sm-9 {:key 2 :style {:font-size 16 :margin-left 0}}
           [:a {:href   "https://youtu.be/BN6Hsjq4vRM"
                :target "_blank"} "प्रिडिक्ट प्रॉस्टेट वेब टूल : प्रॉस्टेट कैन्सर होने पर उसके उपचार हेतु निर्णय लेने में आपका नसहायक"]]
          [:.col-sm-2 {:key 3 :style {:font-size 16 :margin-left 0}} (ttt [:ar "Arabic"])]
          [:.col-sm-9 {:key 4 :style {:font-size 16 :margin-left 0}}
           [:a {:href   "https://youtu.be/rk9gtlvYI0Y"
                :target "_blank"} "أداة Predict Prostate على الأنترنت: تساعدك على اتخاذ القرارات بعد التشخيص بسرطان البروستاتا"]]

          [:.col-sm-2 {:key 5 :style {:font-size 16 :margin-left 0}} (ttt [:en "English"])]
          [:.col-sm-9 {:key 6 :style {:font-size 16 :margin-left 0}}
           [:a {:href   "https://youtu.be/TL53pULR-94"
                :target "_blank"} "The Predict Prostate web tool: helping you make decisions after a new diagnosis of prostate cancer"]]

          [:.col-sm-2 {:key 13 :style {:font-size 16 :margin-left 0}} (ttt [:de "German"])]
          [:.col-sm-9 {:key 14 :style {:font-size 16 :margin-left 0}}
           [:a {:href   "https://youtu.be/bNxJJipnq28"
                :target "_blank"} "Das Predict Prostate tool: Hilfe bei der Entscheidungsfindung nach einer
                        diagnose von Prostatakrebs"]]

          [:.col-sm-2 {:key 7 :style {:font-size 16 :margin-left 0}} (ttt [:zh-yue "Cantonese"])]
          [:.col-sm-9 {:key 8 :style {:font-size 16 :margin-left 0}}
           [:a {:href   "https://youtu.be/jCnXBCd13c8"
                :target "_blank"} "PREDICT預報前列線網上工具——幫助初確診前列線癌病患作出醫療決定：https://prostate.predict.nhs.uk"]]


          [:.col-sm-2 {:key 9 :style {:font-size 16 :margin-left 0}} (ttt [:zh-cmn "Mandarin"])]
          [:.col-sm-9 {:key 10 :style {:font-size 16 :margin-left 0}}
           [:a {:href   "https://youtu.be/7sGtrnNOWE0"
                :target "_blank"} "PREDICT 预报前列线网上工具--帮助初确诊前列线癌病患作出医疗决定: https://prostate.predict.nhs.uk"]]

          [:.col-sm-2 {:key 11 :style {:font-size 16 :margin-left 0}} (ttt [:es "Spanish"])]
          [:.col-sm-9 {:key 12 :style {:font-size 16 :margin-left 0}}
           [:a {:href   "https://youtu.be/_pyDIrDCdE8"
                :target "_blank"} "Predict prostata- le ayuda a tomar decisiones después de un nuevo diagnóstico de cáncer de próstata."]]]]]]]
     (editor-modal)
     (scrollTo 0)
     [:.row.screen-only
      (footer)
      (top-modal ttt)]]))

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