(ns wc-rum-lib.numeric-input
  (:refer-clojure :exclude [max min])
  (:require [rum.core :as rum]
            [clojure.string :refer [split trim starts-with?]]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            #_[hashp.core]
            ))

(defstyle style
  [".numeric-input" {:width      "130px"
                     :tab-index  1
                     :selectable true}
   [".incdec"
    [".right" {:border-top-right-radius    "10px"
               :border-bottom-right-radius "10px"
               :width                      "36px"}]
    [".left" {:border-top-left-radius    "10px"
              :border-bottom-left-radius "10px"
              :width                     "36px"}]]])


(defn error? [value] (or (nil? value) (= "" value) (js/isNaN value)))

;;
;; Numeric values are always stored in state as strings, but processed as numerics
;;
(defn str-to-num
  "convert str to num or to ##NaN if not possible"
  [s]
  (js/parseFloat s))
(comment
  (str-to-num "3.5")                                        ;=> 3.5
  (str-to-num 3.5)                                          ;=> 3.5
  )

(def epsilon 1e-8)

(defn near-integer? [n]
  (< (js/Math.abs (- n (js/Math.round n))) epsilon))

(defn trim-trailing-zero [s]
  (if-let [[m m1] (re-matches #"(.*\.\d)\d+" s)]
    m1 s))

(defn at-precision [n precision]
  (cond
    (= 0 precision)
    ; display as integer
    (str (js/Math.ceil n))

    (= 3 precision)
    ; flexible display up to 3dp
    (if (near-integer? n)
      (str (js/floor n))
      (-> n
        (.toPrecision (js/Number. 3))
        (trim-trailing-zero)))

    (= 2 precision)
    ; display with 2dp always
    (.toFixed (js/Number. n) 2)

    (= 1 precision)
    ; display with 1dp always
    (.toFixed (js/Number. n) 1)
    )
  )

(defn num-to-str
  ([n]
   ; default to integer
   (num-to-str n 0))
  ([n precision]
   (if (string? n)
     (do
       ;(println n " returning unchanged string")
       n)
     (if (js/isNaN n)
       ""
       (if (near-integer? n)
         (str (js/Math.floor n))
         (if precision
           (do
             ;(println "num-to-str precision " n precision)
             (at-precision n precision))
           (at-precision n 0))
         #_(-> n
             (.toPrecision (js/Number. 3))
             (trim-trailing-zero)))))))

; this can be global as there is only one input under focus at any one time
;(def timer (atom nil))


(comment
  (validate-input "" 25 95 1) " :0"
  (validate-input nil 25 95 1) " :0"
  (validate-input ##NaN 25 95 1) " :0"
  (validate-input " " 25 95 1) " :0"
  (validate-input "3" 25 95 1) "4:4"
  (validate-input "8" 25 95 1) "9:9"
  (validate-input 8 25 95 1) "9:9"
  (validate-input ":0" 25 95 1) " :0"
  (validate-input " :0" 25 95 1) " :0"
  (validate-input "4:4" 25 95 1) "5:5"
  (validate-input "5:5" 25 95 1) "6:6"
  (validate-input "24:24" 25 95 1) 25
  (validate-input "96" 25 95 1) "97:97"
  (validate-input "-1" 25 95 1) "0:0"
  (validate-input "-2" 25 95 1) "-1:-1"
  )



#_(defn validate-typed-input [value nmin nmax step]
  (let [value (str-to-num value)
        nmin (if (fn? nmin) @(nmin) nmin)
        nmax (if (fn? nmax) @(nmax) nmax)                   ;(if (keyword? nmax) @(input-cursor nmax) nmax)
        val-1 (if (js/isNaN value)                          ; is value blank? (Note: (= (str-to-num "") (str-to-num nil) ##NaN)
                (if (pos? step)                             ; is it an increment?
                  (dec nmin)                                ; yes - go to one less than minimum (we'll increment later)
                  (if (neg? step)                           ; is it a decrement?
                    (inc nmax)                              ; yes - got to one more than maximum (we'll decrement later)
                    nmin                                    ; no ; TODO???
                    ))
                value)
        val-2 val-1                                         ;(+ step val-1)                                ; do the increment
        val-3 (if (< val-2 nmin)                            ; is it too small?
                (str (num-to-str val-2) ":" val-2)          ; yes
                (if (> val-2 nmax)                          ; no; is it too big?
                  (str (num-to-str val-2) ":" val-2)        ; yes, return good and bad values, in colon separated string
                  val-2))]                                  ; no
    ;(println "(validate " value nmin nmax step ") = " val-3)
    #_(when (or (= val-3 35))
      (js/alert (str "tv " value " v1 " val-1 " v2 " val-2 " v3 " val-3))) ; no
    (if (js/isNaN value)                                    ; Case when user has deleted value using backspace.
      " :0"                                                 ; and there is no input there.
      val-3                                                 ; Otherwise return
      )
    ))

#_(defn validate-button [value nmin nmax step]
  (let [value (str-to-num value)
        nmin (if (fn? nmin) @(nmin) nmin)
        nmax (if (fn? nmax) @(nmax) nmax)                   ;(if (keyword? nmax) @(input-cursor nmax) nmax)
        val-1 (if (js/isNaN value)                          ; is value blank?
                (if (pos? step)                             ; is it an increment?
                  (dec nmin)                                ; yes - go to one less than minimum (we'll increment later)
                  (if (neg? step)                           ; is it a decrement?
                    (inc nmax)                              ; yes - got to one more than maximum (we'll decrement later)
                    nmin                                    ; no - todo: This inserts nmin into val-1
                    ))
                value)
        val-2 (+ step val-1)                                ; do the increment

        val-3 (if (< val-2 nmin)                            ; is it too small?
                (str (num-to-str val-2) ":" val-2)          ; yes
                (if (> val-2 nmax)                          ; no; is it too big?
                  (str (num-to-str val-2) ":" val-2)        ; yes, return good and bad values, in colon separated string
                  val-2))
        ]
    #_(when (or (= val-3 35))
      (js/alert (str "bv " value " v1 " val-1 " v2 " val-2 " v3 " val-3))) ; no
    (if (js/isNaN value)                                    ; Case when user has deleted value using backspace.
      " :0"                                                 ; and there is no input there.
      val-3                                                 ; Otherwise return
      )))

(defn validate-input [value nmin nmax step]
  #_(js/console.log "in value " value)
  #_(js/console.log "nmin " nmin)
  #_(js/console.log "nmax " nmax)
  #_(js/console.log "step " step)
  (let [value (str-to-num value)
        nmin (if (fn? nmin) @(nmin) nmin)
        nmax (if (fn? nmax) @(nmax) nmax)                   ;(if (keyword? nmax) @(input-cursor nmax) nmax)
        val-1 (if (js/isNaN value)                          ; is value blank?
                (if (pos? step)                             ; is it an increment?
                  (dec nmin)                                ; yes - go to one less than minimum (we'll increment later)
                  (if (neg? step)                           ; is it a decrement?
                    (inc nmax)                              ; yes - got to one more than maximum (we'll decrement later)
                    nmin                                    ; no - check: This inserts nmin into val-1
                    ))
                value)
        val-2 (+ step val-1)                                ; do the increment

        val-3 (if (< val-2 nmin)                            ; is it too small?
                (str (num-to-str val-2) ":" val-2)          ; yes
                (if (> val-2 nmax)                          ; no; is it too big?
                  (str (num-to-str val-2) ":" val-2)        ; yes, return good and bad values, in colon separated string
                  val-2))
        ]
    #_(js/console.log "out-value " value)
    (if (js/isNaN value)                                    ; Case when user has deleted value using backspace.
      " :0"                                                 ; and there is no input there.
      val-3                                                 ; Otherwise return
      )))

(defn handle-inc [value onChange nmin nmax precision step]
  (let [v (validate-input value nmin nmax step)]
    ;#_(js/console.log "onChange " v)
    (onChange (num-to-str v precision))))


(defn handle-typed-input [nmin nmax precision onChange e]
  (let [value (.. (-> e .-target) -value)]
    ;(.log js/console "t:" value)
    (if (re-matches #"\s*\d*\.?\d*\s*" value)               ; todo: should this be d+ rather than d*?
      (onChange (num-to-str (validate-input (str-to-num value) nmin nmax 0) precision))
      (onChange ""))                                        ; todo: should this be nil or ##NaN?
    ))
(comment
  (re-matches #"\s*\d*\.?\d*\s*" "6")                       ;"6"
  (re-matches #"\s*\d*\.?\d*\s*" "")                        ;""
  (re-matches #"\s*\d*\.?\d*\s*" "0.7")                        ;"0.7"
  (re-matches #"\s*\d*\.?\d*\s*" ".7")                        ;".7"
  (re-matches #"\s*\d*\.?\d*\s*" "7.")                        ;"7."
  (re-matches #"\s*\d*\.?\d*\s*" "a")                       nil
  )

(defn update-value [value nmin nmax precision step onChange]
  (handle-inc value onChange nmin nmax precision step))

(rum/defcs inc-dec-button < rum/static rum/reactive         ;(rum/local nil ::timer)
  [state
   {:keys [cursor increment onChange min max nmin nmax precision]
    :as   props}]
  (let [value (str-to-num (rum/react cursor))]
    [:span {:class-name "incdec"}
     [:button {:class-name  (str (if (pos? increment) "right" "left") " btn btn-default ")
               :aria-hidden "true"
               :disabled    (if (pos? increment)
                              (if (>= value (str-to-num (if (fn? max) (rum/react (max)) max))) "disabled" nil)
                              (if (<= value nmin) "disabled" nil))
               :tab-index   -1
               :on-click    #(update-value @cursor nmin nmax precision increment onChange)}
      (if (pos? increment) "+" "–")]]))



(rum/defc numeric-input < rum/static rum/reactive           ;echo-update
  [{:keys [key input-ref onChange min max error-color color precision] :or {error-color "red" color "black"} :as props}]

   (let [[good bad] (split (rum/react input-ref) #":")
        value (str-to-num good)
        nmin (str-to-num (if (fn? min) (rum/react (min)) min))
        nmax (str-to-num (if (fn? max) (rum/react (max)) max))
         ;_ (js/console.log "store " (rum/react input-ref))

        mutate (fn [e]
                 #_(js/console.log "nativeEvent " e)
                 #_(js/console.log "inputType " (.. e -nativeEvent -inputType))
                 (handle-typed-input
                   min
                   max
                   precision
                   onChange e))]

    [:div {:class       "numeric-input"
           :style       {:min-width      "100px"
                         :tab-index  1
                         :selectable true}
           :on-key-down #(let [key-code (.. % -nativeEvent -code)]
                           (when (#{"ArrowUp" "ArrowDown"} key-code)
                             (.preventDefault %))
                           (update-value value nmin nmax precision
                             (cond
                               (= "ArrowUp" key-code) 1
                               (= "ArrowDown" key-code) -1
                               :else 0)
                             onChange))}
     [:.button-group
      (inc-dec-button (assoc props :nmin nmin :nmax nmax :precision precision :increment -1 :cursor input-ref))
      [:input
       {:type      "text"
        :value     good
        :id        key
        :on-click  mutate
        :on-change mutate
        :style     {:width            "58px" :height "36px" :font-size "14px"
                    :border-top       "2px solid #ddd"
                    :border-left      "2px solid #ddd"
                    :background-color (if (js/isNaN value) "#fff" "#CCEEF8")
                    :color            (if (nil? bad) color error-color)
                    :padding          "0 0 4px 0"
                    :text-align       "center"
                    #_#_:font-weight "bold"}
        }]
      (inc-dec-button (assoc props :nmin nmin :nmax nmax :precision precision :increment 1 :cursor input-ref))
      ]]

    ))
