(ns predict-prostate.results.icons
  (:require [rum.core :as rum]

            [predict-prostate.results.util :refer [to-percent min-label-percent strip-root data-fill
                                           callout-fill callout-data-fill treatment-fills]]
            [predict-prostate.state.run-time :refer [input-cursor results-cursor input-widget]]
            [predict-prostate.results.common :refer [stacked-yearly-values filter-results->stacked-bar-props result-scroll-height]]
            [predict-prostate.components.button :refer [horiz-radio-button-group year-picker]]
            [predict-prostate.components.helpful-form-groups :refer [form-entry]]
            [predict-prostate.components.primitives :refer [pic pic-dead open-icon dead-icon]]
            [pubsub.feeds :refer [publish]]
            ))

(def br-deaths-fill "#fcc")
(def oth-deaths-fill "#888")


(defn get-color [keys index]
  (let [treatment-key (keys index)]
    (conj (cond
            (< index 4) {:color (treatment-fills index) :filled true}
            (= index 4) {:color br-deaths-fill :filled false}
            :else {:color oth-deaths-fill :filled false})
          [:treatment-key treatment-key]))
  )

(defn color-picker [treatment-keys fills cum-counts n]
  (cond
    (< n (cum-counts 0)) (get-color treatment-keys 0)
    (< n (cum-counts 1)) (get-color treatment-keys 1)
    (< n (cum-counts 2)) (get-color treatment-keys 2)
    (< n (cum-counts 3)) (get-color treatment-keys 3)
    (< n (- 100 (second (nth fills 5)))) (get-color treatment-keys 4)
    :else (get-color treatment-keys 5)))

(rum/defc placed-icons [{:keys [year fills]
                         :or   {:year 5 :fills [[:surgery 80] [:horm 10] [:chemo 2] [:tra 5] [:br 3]]}}]
  (let [fills (concat fills (repeat 4 [:a 0]))
        treatment-keys (mapv first fills)
        cum-counts (into [] (reductions + (mapv (comp js/Math.round second) fills)))]

    [:div
     (for [y (range 10)
           x (range 10)
           :let [n (+ x (* 10 y))
                 style (color-picker treatment-keys fills cum-counts n)
                 shape (if (:filled style) pic pic-dead)
                 treatment-key (:treatment-key style)]]

       (rum/with-key
         (shape {:treatment-key treatment-key :style (dissoc style :filled :treatment-key) :x x :y y}) n)
       )]

    ))


(defn add-s [n]
  (if (= n 1) "" "s"))

(rum/defc results-in-icons < rum/reactive []

  [:div

   (let [horm-yes (rum/react (input-cursor :horm))
         tra-yes (rum/react (input-cursor :tra))
         results (rum/react results-cursor)
         treatments (map strip-root [:surgery :horm :chemo :tra :br :oth])

         [data-5 data-10] (->> [5 10]
                               (map #(stacked-yearly-values {:model      "v2.1"
                                                             :treatments treatments
                                                             :results    results
                                                             :tra-yes    tra-yes
                                                             :horm-yes   horm-yes} %))
                               (map #(into {} (map (fn [[k v]] [k (js/Math.round v)]) %))))


         render-year (fn [year data]
                       (let [br-deaths (- 100 (:oth data) (:tra data) (:chemo data) (:horm data) (:surgery data))]
                         [:.row.clearfix {:style {:position "relative" :clear "both" :min-height "260px"}}

                          [:.col-xs-12
                           (placed-icons {:year year :fills data})
                           [:div {:style {:padding-top "20px" :position "absolute" :left "250px"}}
                            (when (pos? (:oth data))
                              [:p {:style {:font-size "14px"}} (open-icon oth-deaths-fill) " " (:oth data) " death" (add-s (:oth data)) " due to other causes"])
                            (when (pos? br-deaths)
                              [:p {:style {:font-size "14px"}} (open-icon br-deaths-fill) " " br-deaths " breast cancer related death" (add-s br-deaths)])
                            (when (pos? (:tra data))
                              [:p {:style {:font-size "14px"}} (dead-icon (treatment-fills 3)) " " (:tra data) " extra survivor" (add-s (:tra data)) " due to trastuzumab"])
                            (when (pos? (:chemo data))
                              [:p {:style {:font-size "14px"}} (dead-icon (treatment-fills 2)) " " (:chemo data) " extra survivor" (add-s (:chemo data)) " due to chemotherapy"])
                            (when (pos? (:horm data))
                              [:p {:style {:font-size "14px"}} (dead-icon (treatment-fills 1)) " " (:horm data) " extra survivor" (add-s (:horm data)) " due to hormone therapy"])
                            [:p {:style {:font-size "14px"}} (dead-icon (treatment-fills 0)) " " (:surgery data) " survivors with surgery alone"]
                            [:div {:style {:clear "both"}}]]]]))]

     [:div

      [:div {:style {:position "relative"}}

       [:row
        [:.col-xs-12
         [:p {:style {:margin-top "15px"}} "This display shows the outcomes for 100 women. These results are based on the inputs and treatments you selected."]
         #_(form-entry {:key :result-year})


         (year-picker)
         #_(input-widget :result-year)
         [:span {:style {:font-size "16px"}} " years after surgery"]

         (if (= 5 (rum/react (input-cursor :result-year)))
           (render-year 5 data-5)
           (render-year 10 data-10))]

        ]

       ]
      [:div {:style {:clear "both"}} " "]]
     )

   ])
