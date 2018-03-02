(ns predict-prostate.components.primitives
  (:require [rum.core :as rum]
            [graphics.simple-icons :refer [icon]]
            ))


(rum/defc pic [{:keys [fill x y]}]
  [:div {:style {:fontSize "20px"
                 :display  "inline-block"
                 :position "absolute"
                 :left     (str (+ (* 20 (- 9 x)) 15) "px")
                 :bottom   (str (+ (* 20 y) -219) "px")
                 }}
   ;(println "pic fill" fill "x" x "y" y)
   [:svg {:width 20 :height 20}
    [:circle {:cx 10 :cy 11 :r 8 :fill fill :stroke fill :stroke-width 2.5}]]])

(rum/defc pic-dead [{:keys [fill x y]}]
  ;(println "pic-dead fill" fill "x" x "y" y)
  [:div {:style {:fontSize "20px"
                 :display  "inline-block"
                 :position "absolute"
                 :left     (str (+ (* 20 (- 9 x)) 15) "px")
                 :bottom   (str (+ (* 20 y) -219) "px")}}
   [:svg {:width 20 :height 20}
    [:circle {:cx 10 :cy 11 :r 8 :fill "none" :stroke fill :stroke-width 2.5}]]])

(rum/defc dead-icon [fill]
  [:svg {:width 20 :height 20}
   [:circle {:cx 10 :cy 12 :r 8 :fill fill :stroke "none"}]])

(rum/defc open-icon [fill]
  [:svg {:width 20 :height 20}
   [:circle {:cx 10 :cy 10 :r 8 :stroke-width 2.5 :stroke fill :fill "none"}]])

