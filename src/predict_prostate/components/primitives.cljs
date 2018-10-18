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

(rum/defc tally*
  [fill opacity w x]
  [:rect {:fill fill :opacity opacity :x x :y 0 :height 20 :width w}])

(rum/defc tally
  [fill w x]
  (tally* fill 1 w x)
  )

(def twidth 3)
(def tspace 4)

(rum/defc blob [{:keys [key fill r tally?]}]
  [:svg {:key key :width (* 2 r) :height (* 2 r)}
   (if tally?
     (tally fill 1 0)
     (circ fill (if (= fill "white") "#BBBBBB" "none") r 0))])


(rum/defc blob-10 [{:keys [fill r tally?]}]
  [:svg {:width (* 11 (if tally? tspace (* 2 r))) :height (if tally? 15 (* 2 r))}
   (map #(rum/with-key (if tally? (tally fill
                                         twidth
                                         (* tspace %))
                                  (circ fill
                                        (if (= fill "white") "#BBBBBB" "none")
                                        r
                                        (* 2 r %))) (str "b10-" %))
        (range 10))])

(rum/defc mixed-10
  [{:keys [fill r x tally?]}]
  [:svg {:key "m10" :width (* 11 (if tally? tspace (* 2 r))) :height (if tally? 15 (* 2 r))}
   (map #(rum/with-key (if tally?
                         (tally fill
                                twidth
                                (* tspace %))
                         (circ* fill
                                1
                                "none"
                                r
                                (* 2 r %))) (str "m10+" %))
        (range (dec x)))
   (map #(rum/with-key (if tally?
                         (tally fill
                                twidth
                                (* tspace %))
                         (circ* fill
                                1
                                "none"
                                r
                                (* 2 r %))) (str "m10+" %))
        [(dec x)])

   (map #(rum/with-key (if tally?
                         (tally "#BBBBBB"
                                twidth
                                (* tspace (+ x %)))
                         (circ "white"
                               "#BBBBBB"
                               r
                               (* 2 r (+ x %)))) (str "m10-" %))
        (range (- 10 x)))
   ])
