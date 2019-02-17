(ns predict-prostate.components.numeric-input
  (:require [rum.core :as rum]
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


(defn handle-inc [value onChange nmin nmax step]
  (let [_ (js/console.log "incdec nmin " nmin " value " value " step " step)
        val-1 (if (js/isNaN value)
                (if (pos? step)
                  (dec nmin)
                  (if (neg? step)
                    (inc nmax)
                    nmin))
                value)
        val-2 (+ step val-1)
        val-3 (if (< val-2 nmin)
                nmin
                (if (> val-2 nmax)
                  nmax
                  val-2))]

    (js/console.log "onChange " val-3)
    (onChange (str val-3))))


(defn handle-numeric-input [value nmin nmax color onChange e]

  (let [el (-> e .-target)
        ;value (str-to-num (.. el -target -value))
        ]

    (js/console.log "handle-numeric-input: value = " value)
    (js/console.log "nmin = " value)
    (handle-inc value onChange nmin nmax 0)
    ;(onChange (str value))
    ))

(defn update-value [value nmin nmax step onChange e]
  (let [el (-> e .-target)
        _ (js/console.log "target.value" (.. el -target -value))
        value (str-to-num value)]

    (js/console.log "update value = " value)
    (js/console.log "update value nmin = " nmin)
    (js/console.log "update value nmax = " nmax)
    (handle-inc value onChange nmin nmax step)
    ))

(rum/defcs inc-dec-button < rum/static (rum/local nil ::timer)
  [state
   {:keys [cursor increment onChange min max]
    :as   props}]
  (let [start-timer (fn [e] (js/setInterval #(handle-inc @cursor onChange min max increment) 333))]
    [:span {:class-name "incdec"}
     [:a {:class-name    (str (if (pos? increment) "right" "left") " btn btn-default")
          :aria-hidden   "true"
          :tab-index     -1
          :on-mouse-down #(do (reset! (::timer state) (start-timer %)))
          :on-mouse-up   #(do (js/clearInterval @(::timer state))
                              (reset! (::timer state) nil))
          :on-mouse-out  #(do (js/clearInterval @(::timer state))
                              (reset! (::timer state) nil))
          :on-click      #(update-value @cursor min max increment onChange %) #_#(handle-inc @cursor onChange min max increment)}
      (if (pos? increment) "+" "–")]]))



(rum/defc numeric-input < rum/static rum/reactive           ;echo-update
  [{:keys [input-ref onChange min max error-color color] :or {error-color "red" color "black"} :as props}]

  (js/console.log "props: " props)
  (let [value (str-to-num (rum/react input-ref))
        nmin (str-to-num (if (fn? min) (min) min))
        nmax (str-to-num (if (fn? max) (max) max))
        mutate (fn [e]
                 (js/console.log "mutating, :nmin = " nmin)
                 (handle-numeric-input value nmin nmax color onChange e))]
    ; nmin and nmax can be functions, so in particular they may be calls to rum/react

    [:div {:id          "numeric-input"
           :style       {:width      "130px"
                         :tab-index  1
                         :selectable true}
           :on-key-down #(let [key-code (.. % -nativeEvent -code)]
                           (handle-inc value onChange nmin nmax
                             (cond
                               (= "ArrowRight" key-code) 5
                               (= "ArrowUp" key-code) 1
                               (= "ArrowDown" key-code) -1
                               (= "ArrowLeft" key-code) -5
                               :else 0)))}
     [:button-group.form-control
      (inc-dec-button (assoc props :increment -1 :cursor input-ref))
      [:input
       {:type      "text"
        :value     (num-to-str value)
        :on-click  mutate
        :on-change mutate
        :style     {:width            "58px" :height "36px" :font-size "14px"
                    :border-top       "2px solid #ddd"
                    :border-left      "2px solid #ddd"
                    :background-color (if (js/isNaN value) "#fff" "#CCEEF8")
                    :color            (if (<= nmin value nmax) color error-color)
                    :padding          "0 0 4px 0"
                    :text-align       "center"
                    #_#_:font-weight "bold"}
        }]
      (inc-dec-button (assoc props :increment 1 :cursor input-ref))
      ]]

    ))
