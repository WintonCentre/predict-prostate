(ns predict-prostate.components.primitives
  (:require [rum.core :as rum]
            [graphics.simple-icons :refer [icon]]
            ))

; These parameters size and position the round blob icons
(def psz 24)                                                ; 20 originally
(def x-centre-off (dec (int (/ psz 2))))                    ; 9 originally
(def cx (/ psz 2))                                          ; 10
(def cy (inc cx))                                           ; 11
(def gap 2)                                                 ; 2
(def r (- cx gap))                                          ; 8
(def xoff 15)                                               ; 15 originally
(def yoff (dec (* 10 (+ 3 psz))))                           ; 219 originally

(defn left [x] (str (+ (* psz (- x-centre-off x 2)) xoff) "px"))
(defn bottom [y] (str (+ (* psz y) (- yoff)) "px"))


(rum/defc pic [{:keys [fill x y]}]
  [:div {:style {:fontSize psz
                 :display  "inline-block"
                 :position "absolute"
                 :left     (left x)
                 :bottom   (bottom y)
                 }}
   ;(println "pic fill" fill "x" x "y" y)
   [:svg {:width psz :height psz}
    [:circle {:cx cx :cy cy :r r :fill fill :stroke fill :stroke-width 2.5}]]])

(rum/defc pic-dead [{:keys [fill x y]}]
  ;(println "pic-dead fill" fill "x" x "y" y)
  [:div {:style {:fontSize psz
                 :display  "inline-block"
                 :position "absolute"
                 :left     (left x)
                 :bottom   (bottom y)}}

   [:svg {:width psz :height psz}
    [:circle {:cx cx :cy cy :r r :fill "none" :stroke fill :stroke-width 2.5}]]])

(rum/defc dead-icon [fill]
  [:svg {:width psz :height psz :style {:margin-bottom -5}}
   [:circle {:cx cx :cy cy :r r :fill fill :stroke "none"}]])

(rum/defc open-icon [fill]
  [:svg {:width psz :height psz :style {:margin-bottom -5}}
   [:circle {:cx cx :cy cy :r r :stroke-width 2.5 :stroke fill :fill "none"}]])

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
