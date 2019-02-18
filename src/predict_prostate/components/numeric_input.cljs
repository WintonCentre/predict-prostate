(ns predict-prostate.components.numeric-input
  (:refer-clojure :exclude [max min])
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [input-cursor]]
            [clojure.string :refer [split trim]]
            [cljs-css-modules.macro :refer-macros [defstyle]]))

(defstyle style
  ["#numeric-input" {:width      "130px"
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

(defn num-to-str [n] (if (js/isNaN n) "" (str n)))

; this can be global as there is only one input under focus at any one time
(def timer (atom nil))

(defn validate [value nmin nmax step]
  (let [value (str-to-num value)
        nmin (if (fn? nmin) (nmin) nmin)
        nmax (if (fn? nmax) (nmax) nmax)                    ;(if (keyword? nmax) @(input-cursor nmax) nmax)
        val-1 (if (js/isNaN value)                          ; is value blank?
                (if (pos? step)                             ; is it an increment?
                  (dec nmin)                                ; yes - go to one less than minimum (we'll increment later)
                  (if (neg? step)                           ; is it a decrement?
                    (inc nmax)                              ; yes - got to one more than maximum (we'll decrement later)
                    nmin                                    ; no
                    ))
                value)
        val-2 (+ step val-1)                                ; do the increment

        ; todo: can we disable inc/dec buttons? if necessary?
        val-3 (if (< val-2 nmin)                            ; is it too small?
                (str (if (pos? val-2) val-2 0) ":" val-2)   ; yes
                (if (> val-2 nmax)                          ; no; is it too big?
                  (str nmax ":" val-2)                      ; yes, return good and bad values, in colon separated string
                  val-2))]                                  ; no
    (str val-3)))

(defn handle-inc [value onChange nmin nmax step]
  (let [v (validate value nmin nmax step)]
    ;(js/console.log "onChange " v)
    (onChange v)))


(defn handle-typed-input [nmin nmax onChange e]

  (let [value (.. (-> e .-target) -value)]
    (if (re-matches #"\s*\d+\s*" value)
      (onChange (str (validate (str-to-num value) nmin nmax 0)))
      (onChange (num-to-str ##NaN)))
    ))

(defn update-value [value nmin nmax step onChange e]
  (let [value (str-to-num value)]

    ;(js/console.log "update value = " value)
    ;(js/console.log "update value nmin = " nmin)
    ;(js/console.log "update value nmax = " nmax)
    (handle-inc value onChange nmin nmax step)
    ))

(rum/defcs inc-dec-button < rum/static rum/reactive (rum/local nil ::timer)
  [state
   {:keys [cursor increment onChange min max nmin nmax]
    :as   props}]
  (let [value (rum/react cursor)
        start-timer (fn [e] (js/setInterval #(handle-inc @cursor onChange nmin nmax increment) 250))]
    [:span {:class-name "incdec"}
     ;
     ;todo: for some reason I was using a butonified :a  here. Keep an eye out for issues with :button
     ;
     [:button {:class-name    (str (if (pos? increment) "right" "left") " btn btn-default ")
               :aria-hidden   "true"
               :disabled      (if (pos? increment)
                                (if (>= value (str-to-num (if (fn? max) (max) max))) "disabled" nil)
                                (if (<= value nmin) "disabled" nil))
               :tab-index     -1
               :on-mouse-down #(do (reset! (::timer state) (start-timer %)))
               :on-mouse-up   #(do (js/clearInterval @(::timer state))
                                   (reset! (::timer state) nil))
               :on-mouse-out  #(do (js/clearInterval @(::timer state))
                                   (reset! (::timer state) nil))
               :on-click      #(update-value @cursor nmin nmax increment onChange %)}
      (if (pos? increment) "+" "–")]]))



(rum/defc numeric-input < rum/static rum/reactive           ;echo-update
  [{:keys [input-ref onChange min max error-color color] :or {error-color "red" color "black"} :as props}]

  ;(js/console.log "props: " props)
  (let [[good bad] (split (rum/react input-ref) #":")
        #_#_value (str-to-num (rum/react input-ref))
        value (str-to-num good)
        nmin (str-to-num (if (fn? min) (min) min))
        nmax (str-to-num (if (fn? max) (max) max))
        mutate (fn [e]
                 ;(js/console.log "mutating, :nmin = " nmin " value = " value " bad = " bad)
                 (handle-typed-input (str-to-num (if (fn? min) (min) min))
                   (str-to-num (if (fn? max) (max) max))
                   onChange e))]

    [:div {:id          "numeric-input"
           :style       {:width      "130px"
                         :tab-index  1
                         :selectable true}
           :on-key-down #(let [key-code (.. % -nativeEvent -code)]
                           (.preventDefault %)
                           (handle-inc value onChange nmin nmax
                             (cond
                               (= "ArrowUp" key-code) 1
                               (= "ArrowDown" key-code) -1
                               :else 0)))}
     [:button-group.form-control
      (inc-dec-button (assoc props :nmin nmin :nmax nmax :increment -1 :cursor input-ref))
      [:input
       {:type      "text"
        :value     good                                     ;(num-to-str value)
        :on-click  mutate
        :on-change mutate
        :style     {:width            "58px" :height "36px" :font-size "14px"
                    :border-top       "2px solid #ddd"
                    :border-left      "2px solid #ddd"
                    :background-color (if (js/isNaN value) "#fff" "#CCEEF8")
                    :color            (if (nil? bad) color error-color #_(<= nmin value nmax))
                    :padding          "0 0 4px 0"
                    :text-align       "center"
                    #_#_:font-weight "bold"}
        }]
      (inc-dec-button (assoc props :nmin nmin :nmax nmax :increment 1 :cursor input-ref))
      ]]

    ))
