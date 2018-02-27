(ns predict-prostate.results.table
  (:require [rum.core :as rum]
            [predict-prostate.components.helpful-form-groups :refer [form-entry]]
            [predict-prostate.state.config :refer [input-groups get-input-default]]
            [predict-prostate.results.common :refer [stacked-yearly-values stacked-bar-yearly-props
                                                     filter-results->stacked-bar-props result-scroll-height]]
            [predict-prostate.state.run-time :refer [input-cursor input-change input-widget input-label results-cursor]]
            [predict-prostate.components.button :refer [year-picker]]
            [predict-prostate.results.util :refer [lookup ->Item treatment-callout-text strip-root avoid-decimals]]

            [pubsub.feeds :refer [publish]]
            ))


(defn set-default [key]
  "Set the default state of an input after it is mounted. Only use this "
  {:did-mount (fn [state]
                #_(let [default (get-input-default input-groups key)]
                    (publish (input-change key) default))
                state)})

(defn year-selected []
  "return a cursor containing the selected year"
  (input-cursor :result-year))

(defn percent [d]
  (str (* 100 (avoid-decimals d true)) "%"))

(defn extract-data [results year]
  (let [year (dec year)
        conservative-survival (- 1 (+ (nth (get-in results [:conservative :pred-PC-cum]) year)
                                      (nth (get-in results [:conservative :pred-NPC-cum]) year)))
        radical-survival (- 1 (+ (nth (get-in results [:radical :pred-PC-cum]) year)
                                 (nth (get-in results [:radical :pred-NPC-cum]) year)))

        data {:conservative {:overall (percent conservative-survival)
                             :benefit "-"}
              :radical      {:overall (percent (- 1 radical-survival))
                             :benefit (percent (- radical-survival conservative-survival))}}]
    (println "data " data)
    data))

(rum/defc tables < rum/reactive [data]

  (let [uncertainty? (= :yes (rum/react (input-cursor :show-uncertainty)))]
    [:.table-responsive {:style {:margin-top "15px"
                                 :font-size  "1.2em"}}
     [:table.table.table-hover {:style {:padding 0 :margin 0 :font-size "16px"}}
      [:thead
       [:tr
        [:th "Treatment"]
        [:th "Additional Benefit"]
        [:th "Overall Survival %"]
        ]]
      [:tbody
       [:tr
        [:td "Conservative treatment "]
        [:td "-"]
        [:td (get-in data [:conservative :overall])]]
       (when true                                           ;(pos? (:horm data))
         [:tr
          [:td "Radical treatment"]
          [:td (get-in data [:radical :benefit])            ;(benefit% data :horm uncertainty?)
           (if uncertainty?
             (str " (" "2%" "–" "4%")
             "")]
          [:td (get-in data [:radical :overall])]
          ])
       [:tr
        [:td {:col-span 3}
         "If these men were cancer free, "
         "90"                                               ; (Math.round (- 100 (:oth data)))
         "% would survive "
         (rum/react (input-cursor :result-year))
         " years."]
        ]

       ]]]))


(rum/defc results-in-table < rum/reactive []
  (let [data (extract-data (rum/react results-cursor) (rum/react (input-cursor :result-year)))]

    [:div
     [:.row
      [:.col-sm-12
       [:p {:style {:margin-top "15px"}} "This table shows the survival percentages based on the information you have provided."]

       (year-picker) [:span {:style {:font-size "16px"}} " years after surgery"]
       ]
      [:.col-sm-12 {:style {:margin-bottom "15px"}}
       (tables data)
       (form-entry {:key :show-uncertainty :label "show-ranges"})]]

     ]

    ))

(comment

  (def results {:conservative {:pred-PC-cum (0.0036615213519221195 0.011979649047748077 0.02394734660910393 0.039029276965151335 0.056828128871750816 0.0770089542169584 0.09927177500547466 0.12333934048472982 0.14895106250029122 0.175859840014883), :pred-NPC-cum (0.000056467798936627637 0.00014087135209238534 0.0002409807693807143 0.00035390050751450897 0.0004790354422907759 0.0006171533043946205 0.0007701512268180313 0.0009410572098022136 0.0011341680011206614 0.0013553095431265438), :npc-survival (0.9999435290605295 0.9998591106281001 0.9997589673198001 0.9996459877717188 0.9995207591069538 0.9993825030202663 0.9992293072646485 0.9990581212657073 0.9988646136356704 0.9986429041771957)}, :radical {:pred-PC-cum (0.0036615213519221195 0.011979649047748077 0.02394734660910393 0.039029276965151335 0.056828128871750816 0.0770089542169584 0.09927177500547466 0.12333934048472982 0.14895106250029122 0.175859840014883), :pred-NPC-cum (0.000056467798936627637 0.00014087135209238534 0.0002409807693807143 0.00035390050751450897 0.0004790354422907759 0.0006171533043946205 0.0007701512268180313 0.0009410572098022136 0.0011341680011206614 0.0013553095431265438), :npc-survival (0.9999435290605295 0.9998591106281001 0.9997589673198001 0.9996459877717188 0.9995207591069538 0.9993825030202663 0.9992293072646485 0.9990581212657073 0.9988646136356704 0.9986429041771957)}}

    )

  (extract-data results 9)
  )



