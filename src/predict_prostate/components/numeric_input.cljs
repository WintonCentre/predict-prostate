(ns predict-prostate.components.numeric-input
  (:refer-clojure :exclude [max min])
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [input-cursor]]
            [clojure.string :refer [split trim]]
            [cljs-css-modules.macro :refer-macros [defstyle]]))

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
(defn str-to-num [s] (js/parseFloat s))
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
    (str (js/Math.round n))

    (= 3 precision)
    ; flexible display up to 3dp
    (if (near-integer? n)
      (str (js/Math.round n))
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
     n
     (if (js/isNaN n)
       ""
       (if (near-integer? n)
         (str (js/Math.round n))
         (if precision
           (at-precision n precision))
         #_(-> n
               (.toPrecision (js/Number. 3))
               (trim-trailing-zero)))))))

; this can be global as there is only one input under focus at any one time
(def timer (atom nil))

(defn validate [value nmin nmax step]
  (let [value (str-to-num value)
        nmin (if (fn? nmin) @(nmin) nmin)
        nmax (if (fn? nmax) @(nmax) nmax)                   ;(if (keyword? nmax) @(input-cursor nmax) nmax)
        val-1 (if (js/isNaN value)                          ; is value blank?
                (if (pos? step)                             ; is it an increment?
                  (dec nmin)                                ; yes - go to one less than minimum (we'll increment later)
                  (if (neg? step)                           ; is it a decrement?
                    (inc nmax)                              ; yes - got to one more than maximum (we'll decrement later)
                    nmin                                    ; no
                    ))
                value)
        val-2 (+ step val-1)                                ; do the increment

        val-3 (if (< val-2 nmin)                            ; is it too small?
                (str (num-to-str val-2) ":" val-2)          ; yes
                (if (> val-2 nmax)                          ; no; is it too big?
                  (str (num-to-str val-2) ":" val-2)        ; yes, return good and bad values, in colon separated string
                  val-2))]                                  ; no
    val-3))

(defn handle-inc [value onChange nmin nmax step]
  (let [v (validate value nmin nmax step)]
    (js/console.log "onChange " v)
    (onChange (num-to-str v))))


(defn handle-typed-input [nmin nmax onChange e]
  (let [value (.. (-> e .-target) -value)]
    (.log js/console value)
    (if (re-matches #"\s*\d*\.?\d*\s*" value)
      (onChange (num-to-str (validate (str-to-num value) nmin nmax 0)))
      (onChange (num-to-str ##NaN)))
    ))

(defn update-value [value nmin nmax step onChange]
  (handle-inc value onChange nmin nmax step)
  #_(let [value (str-to-num value)
          value (if (> value nmax) nmax (if (< value nmin) nmin value))]

      ;(js/console.log "update value = " value)
      ;(js/console.log "update value nmin = " nmin)
      ;(js/console.log "update value nmax = " nmax)
      (handle-inc value onChange nmin nmax step)
      ))

#_(defn clear-timer [state]
    (js/clearInterval @(::timer state))
    (reset! (::timer state) nil))


(rum/defcs inc-dec-button < rum/static rum/reactive (rum/local nil ::timer)
  [state
   {:keys [cursor increment onChange min max nmin nmax]
    :as   props}]
  (let [value (str-to-num (rum/react cursor))
        ;
        ; Removing the timer as I don't have a reliable trigger to cancel it yet. Maybe we should use global state in
        ; case of a component re initialisation?
        ;
        #_#_start-timer (fn [e] (js/setIntervak #(handle-inc @cursor onChange nmin nmax increment) 250))]
    [:span {:class-name "incdec"}
     ;
     ;todo: I was using a buttonified [:a]  here. Keep an eye out for issues with change to more semantic [:button]
     ;
     [:button {:class-name  (str (if (pos? increment) "right" "left") " btn btn-default ")
               :aria-hidden "true"
               :disabled    (if (pos? increment)
                              (if (>= value (str-to-num (if (fn? max) (rum/react (max)) max))) "disabled" nil)
                              (if (<= value nmin) "disabled" nil))
               :tab-index   -1
               ;:on-mouse-down #(do (reset! (::timer state) (start-timer %)))
               ;:on-mouse-up   #(clear-timer state)
               ;:on-mouse-out  #(clear-timer state)
               ;:on-mouse-leave  #(clear-timer state)
               :on-click    #(do                            ;(clear-timer state)
                               (update-value @cursor nmin nmax increment onChange))}
      (if (pos? increment) "+" "–")]]))



(rum/defc numeric-input < rum/static rum/reactive           ;echo-update
  [{:keys [key input-ref onChange min max error-color color precision] :or {error-color "red" color "black"} :as props}]

  (.log js/console "key: " input-ref " precision: " precision)

  ;(js/console.log "props: " props)
  (let [[good bad] (split (rum/react input-ref) #":")
        #_#_value (str-to-num (rum/react input-ref))
        value (str-to-num good)
        nmin (str-to-num (if (fn? min) (rum/react (min)) min))
        nmax (str-to-num (if (fn? max) (rum/react (max)) max))
        mutate (fn [e]
                 ;(js/console.log "mutating, :nmin = " nmin " value = " value " bad = " bad)
                 (handle-typed-input
                   (str-to-num (if (fn? min) @(min) min))
                   (str-to-num (if (fn? max) @(max) max))
                   onChange e))]

    [:div {:class       "numeric-input"
           :style       {:width      "130px"
                         :tab-index  1
                         :selectable true}
           :on-key-down #(let [key-code (.. % -nativeEvent -code)]
                           (when (#{"ArrowUp" "ArrowDown"} key-code)
                             (.preventDefault %))
                           (update-value value nmin nmax
                                         (cond
                                           (= "ArrowUp" key-code) 1
                                           (= "ArrowDown" key-code) -1
                                           :else 0)
                                         onChange))}
     [:button-group.form-control
      (inc-dec-button (assoc props :nmin nmin :nmax nmax :increment -1 :cursor input-ref))
      [:input
       {:type      "text"
        :value     good                                     ;(num-to-str value)
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
      (inc-dec-button (assoc props :nmin nmin :nmax nmax :increment 1 :cursor input-ref))
      ]]

    ))
