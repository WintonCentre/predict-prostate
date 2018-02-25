(ns predict-prostate.components.numeric-input
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [input-cursor]]

            ))

(defn error? [val] (or (nil? val) (= "" val) (js/isNaN val)))

(defn handle-numeric-input [onChange e]
  (let [val (js/parseInt (.. e -target -value))
        val (if (error? val) "" val)]
    ;(.log js/console (.-nativeEvent e))
    (onChange (str val)))
  )

(defn handle-inc [val onChange min max step]
  ;(.log js/console (.-activeElement js/document))
  ;(.log js/console "handle-inc" val step e (.. e -target))
  (when (not= 0 step)
    ;(.stopPropagation (.. e -nativeEvent))
    ;(.preventDefault (.. e -nativeEvent))
    (let [val-1 (if (= val "")
                  (if (pos? step)
                    (dec min)
                    (if (neg? step) (inc max) ""))
                  (js/parseInt val))
          val-2 (if (error? val-1) "" (+ step val-1))
          val-3 (if (< val-2 min) min (if (> val-2 max) max val-2))]
      (onChange (str val-3))
      )))

(rum/defcs inc-dec-button < rum/static (rum/local nil ::timer)
  [state
   {:keys [cursor increment onChange min max precision unit]
    :as   props}]
  (let [[left-r right-r] (if (pos? increment) [10 0] [0 10])
        start-timer (fn [e] (js/setInterval #(handle-inc @cursor onChange min max increment) 200))
        ]
    [:a.btn.btn-default {:style         {:border-top-right-radius    left-r
                                         :border-bottom-right-radius left-r
                                         :border-top-left-radius     right-r
                                         :border-bottom-left-radius  right-r
                                         :width                      "36px"}
                         :aria-hidden   "true"
                         :tab-index     -1
                         :on-mouse-down #(do (reset! (::timer state) (start-timer %))
                                             ;(handle-inc @cursor onChange min max increment)
                                             )
                         :on-mouse-up   #(do (js/clearInterval @(::timer state))
                                             (reset! (::timer state) nil))
                         :on-mouse-out  #(do (js/clearInterval @(::timer state))
                                             (reset! (::timer state) nil))
                         :on-click      #(handle-inc @cursor onChange min max increment)}
     (if (pos? increment) "+" "–")]))

(rum/defc numeric-input < rum/static rum/reactive [{:keys [key onChange min max precision unit] :as props}]
  ;(println "NumericInput = ") js/NumericInput

  (let [val (rum/react (input-cursor key))]
    [:div {:style       {:width      "130px"
                         :tab-index  1
                         :selectable true}
           :on-key-down #(let [key-code (.. % -nativeEvent -code)]
                           (handle-inc val onChange min max
                                       (cond
                                         (= "ArrowRight" key-code) 5
                                         (= "ArrowUp" key-code) 1
                                         (= "ArrowDown" key-code) -1
                                         (= "ArrowLeft" key-code) -5
                                         :else 0)))}
     [:button-group.form-control
      (inc-dec-button (assoc props :increment -1 :cursor (input-cursor key)))
      [:input.numeric
       {:key       key
        :type      "text"
        :value     val
        :on-click  (partial handle-numeric-input onChange)
        :on-change (partial handle-numeric-input onChange)
        :style     {:width            "58px" :height "36px" :font-size "14px"
                    :border-top       "2px solid #ddd"
                    :border-left      "2px solid #ddd"
                    :background-color (if (not= val "") "#CCEEF8" "#fff")
                    :padding          "0 0 4px 0"
                    :text-align       "center"
                    :font-weight      "bold"}
        }]
      (inc-dec-button (assoc props :increment 1 :cursor (input-cursor key)))
      ]]

    #_(when (:unit props) [:label.control-label.col-xs-3 (:unit props)])))
