(ns predict-prostate.components.numeric-input
  (:require [rum.core :as rum]
            [predict-prostate.state.run-time :refer [input-cursor]]
            ))

(enable-console-print!)

(defn error? [value] (or (nil? value) (= "" value) (js/isNaN value)))

(defn handle-numeric-input [min max onChange e]
  (let [value (js/parseInt (.. e -target -value))
        value (if (error? value) min value)
        value (if (<= value max) (if (>= value min) value min) max)]
    ; This is tricky;
    ;
    ; On change, we parse this new value and force our cursor state value back to 100, but his means
    ; that the React value has not changed and so we don't get another component update in which to
    ; reset the visible 1003 back to 100. So we must handle overflows and echo them to the DOM
    ; before dispatching them.
    (goog.object.set (-> e .-nativeEvent .-srcElement) "value" value)

    ; dispatch the clipped value.
    (onChange (str value)))
  )

(defn handle-inc [value onChange min max step]
  (when (not= 0 step)
    (let [val-1 (if (= value "")
                  (if (pos? step)
                    (dec min)
                    (if (neg? step) (inc max) ""))
                  (js/parseInt value))
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

(def echo-update {:did-update (fn [state]
                                (let [args (:rum/args state)
                                      comp (:rum/react-component state)
                                      node (js/ReactDOM.findDOMNode comp)
                                      value @(input-cursor (:key (first args)))]
                                  (assoc state ::node node))
                                )})


(rum/defcs numeric-input < rum/static rum/reactive
  [state {:keys [key onChange min max precision unit] :as props}]


  (let [value (rum/react (input-cursor key))]

    ;(println "NumericInput = " value)


    [:div {:style       {:width      "130px"
                         :tab-index  1
                         :selectable true}
           :on-key-down #(let [key-code (.. % -nativeEvent -code)]
                           (handle-inc value onChange min max
                                       (cond
                                         (= "ArrowRight" key-code) 5
                                         (= "ArrowUp" key-code) 1
                                         (= "ArrowDown" key-code) -1
                                         (= "ArrowLeft" key-code) -5
                                         :else 0)))}
     [:button-group.form-control
      (inc-dec-button (assoc props :increment -1 :cursor (input-cursor key)))
      [:input
       {:key       key
        :type      "text"
        :value     (str (if (<= value max) value (if (>= value min) value min)))
        :on-click  (partial handle-numeric-input min max onChange)
        :on-change (partial handle-numeric-input min max onChange)
        :style     {:width            "58px" :height "36px" :font-size "14px"
                    :border-top       "2px solid #ddd"
                    :border-left      "2px solid #ddd"
                    :background-color (if (not= value "") "#CCEEF8" "#fff")
                    :padding          "0 0 4px 0"
                    :text-align       "center"
                    :font-weight      "bold"}
        }]
      (inc-dec-button (assoc props :increment 1 :cursor (input-cursor key)))
      ]]

    ))
