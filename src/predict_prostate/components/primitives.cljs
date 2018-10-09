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

(rum/defc circ*
  [fill opacity stroke r cx]
  [:circle {:cx (+ cx r) :cy r :r r :fill fill :opacity opacity :stroke stroke :stroke-width 1}])

(rum/defc circ
  [fill stroke r cx]
  (circ* fill 1 stroke r cx))


(rum/defc blob [key fill r]
  [:svg {:key key :width (* 2 r) :height (* 2 r)}
   (circ fill (if (= fill "white") "#BBBBBB" "none") r 0)])


(rum/defc blob-10 [fill r]
  [:svg {:width (* 21 r) :height (* 2 r)}
   (map #(rum/with-key (circ fill
                             (if (= fill "white") "#BBBBBB" "none")
                             r
                             (* 2 r %)) (str "b10-" %))
        (range 10))])

(rum/defc mixed-10
  ([fill opacity r x]
   [:svg {:key "m10" :width (* 21 r) :height (* 2 r)}
    (map #(rum/with-key (circ* fill
                               1
                               "none"
                               r
                               (* 2 r %)) (str "m10+" %))
         (range (dec x)))
    (map #(rum/with-key (circ* fill
                               opacity
                               "none"
                               r
                               (* 2 r %)) (str "m10+" %))
         [(dec x)])

    (map #(rum/with-key (circ "white"
                              "#BBBBBB"
                              r
                              (* 2 r (+ x %))) (str "m10-" %))
         (range (- 10 x)))
    ])

  ([fill r x]
   (mixed-10 fill 1 r x)))
