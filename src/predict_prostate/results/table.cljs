(ns predict-prostate.results.table
  (:require [rum.core :as rum]
            [predict-prostate.components.helpful-form-groups :refer [form-entry]]
            [predict-prostate.state.config :refer [input-groups get-input-default]]
            [predict-prostate.results.common :refer [stacked-yearly-values stacked-bar-yearly-props
                                                     filter-results->stacked-bar-props result-scroll-height]]
            [predict-prostate.state.run-time :refer [input-cursor input-change input-widget input-label results-cursor]]
            [predict-prostate.components.button :refer [year-picker]]
            [predict-prostate.results.util :refer [lookup ->Item treatment-callout-text strip-root one-dp]]

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

(defn percent
  ([d]
   (percent d 0))
  ([d p]
   (str (one-dp (* 100 d) p) "%")))

(defn extract-data [results year]
  (let [conservative-survival (- 1 (+ (nth (get-in results [:conservative :pred-PC-cum]) year)
                                     (nth (get-in results [:conservative :pred-NPC-cum]) year)))
        radical-low-survival (- 1 (+ (nth (get-in results [:radical-low :pred-PC-cum]) year)
                                    (nth (get-in results [:radical-low :pred-NPC-cum]) year)))
        radical-high-survival (- 1 (+ (nth (get-in results [:radical-high :pred-PC-cum]) year)
                                    (nth (get-in results [:radical-high :pred-NPC-cum]) year)))
        radical-survival (- 1 (+ (nth (get-in results [:radical :pred-PC-cum]) year)
                                (nth (get-in results [:radical :pred-NPC-cum]) year)))

        data {:dotted-orange (percent (nth (get-in results [:conservative :NPC-survival]) year) 0)
              :conservative  {:overall (percent conservative-survival)
                              :benefit "-"}
              :radical       {:overall (percent radical-survival)
                              :benefit-low (percent (- radical-low-survival conservative-survival) 1)
                              :benefit-high (percent (- radical-high-survival conservative-survival) 1)
                              :benefit (percent (- radical-survival conservative-survival) 1)}}]
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
             (str " (" (get-in data [:radical :benefit-high]) "–" (get-in data [:radical :benefit-low]) ")"))]
          [:td (get-in data [:radical :overall])]
          ])
       [:tr
        [:td {:col-span 3}
         "If these men were cancer free, "
         (get data :dotted-orange)                          ; (Math.round (- 100 (:oth data)))
         " would survive "
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

  (def results {:conservative {:pred-PC-cum (0 0.00209439167481409 0.0068631030425986275 0.013751329202967382 0.022479232057763355 0.032849141591410363 0.04470083770029029 0.057894651946130055 0.07230334252302753 0.08780755798557525 0.10429297055204881), :pred-NPC-cum (0 0.0002182447271967578 0.000544287475592099 0.0009307275902806942 0.0013662580043685233 0.0018484505910423502 0.002380109932274687 0.002968343202003146 0.0036245266082841282 0.004364779246955558 0.005210877168111608), :NPC-survival (1 0.9997817121199226 0.9994554593459529 0.9990685368375318 0.9986321524197489 0.9981486208199123 0.9976149894821492 0.9970239420761796 0.9963637933269195 0.9956179553493606 0.9947639276902916)}, :radical-low {:pred-PC-cum (0 0.0007335583499764896 0.002407602686350095 0.004835063469570774 0.007926895894052616 0.011624081339670616 0.01588165160115533 0.02066252974225701 0.0259344864220196 0.031668383409725595 0.03783702781932995), :pred-NPC-cum (0 0.00021825115659365523 0.000544316212833242 0.000930799814108788 0.0013664002731486977 0.0018486971474197707 0.0023805071975003395 0.0029689574762498195 0.0036254571263068746 0.004366180648653087 0.005212998991071756), :NPC-survival (1 0.9997817121199226 0.9994554593459529 0.9990685368375318 0.9986321524197489 0.9981486208199123 0.9976149894821492 0.9970239420761796 0.9963637933269195 0.9956179553493606 0.9947639276902916)}, :radical {:pred-PC-cum (0 0.0010121556874419695 0.0033208892722127277 0.006666009669913535 0.010922079710044877 0.01600471235091617 0.021848603059883027 0.028399086041023668 0.03560797615060335 0.04343117663580254 0.0518271193008505), :pred-NPC-cum (0 0.00021824868254736567 0.000544304911834677 0.0009307712038230736 0.0013663438408784236 0.0018485995864232431 0.002380350841826511 0.0029687176069217803 0.003625097434017231 0.004365645501480441 0.005212199988904085), :NPC-survival (1 0.9997817121199226 0.9994554593459529 0.9990685368375318 0.9986321524197489 0.9981486208199123 0.9976149894821492 0.9970239420761796 0.9963637933269195 0.9956179553493606 0.9947639276902916)}, :radical-high {:pred-PC-cum (0 0.0014037401627852591 0.004603579602983735 0.00923466300292725 0.015118065289657147 0.02213108709725974 0.03017695312299632 0.03917322657966766 0.049046144092173935 0.05972738307190151 0.07115196920296826), :pred-NPC-cum (0 0.00021824664197662888 0.0005442958283880051 0.0009307484328346354 0.0013662990801877593 0.0018485221694604212 0.002380226355133872 0.002968525522271607 0.0036248070970956343 0.004365209233051064 0.005211540965589994), :NPC-survival (1 0.9997817121199226 0.9994554593459529 0.9990685368375318 0.9986321524197489 0.9981486208199123 0.9976149894821492 0.9970239420761796 0.9963637933269195 0.9956179553493606 0.9947639276902916)}}

    )

  (extract-data results 9)
  )


