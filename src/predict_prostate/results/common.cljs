(ns predict-prostate.results.common
  (:require [rum.core :as rum]
    ;[predict-prostate.results.util :refer [strip-root ->Item treatment-callout-text]]
            [predict-prostate.state.run-time :refer [input-cursor results-cursor]]))

(def result-scroll-height "850px")

#_(defn stacked-yearly-values
  "Lookup treatments and create a stacked bar dataset from model results, indexed by year.
  Each data-item is a key value pair ordered in the same way as incoming treatments vector."
  [{:keys [model treatments horm-yes tra-yes results]} year]

  #_(mapv (fn [key]
          [key (lookup {:model      model
                        :treatments treatments
                        :horm-yes   horm-yes
                        :tra-yes    tra-yes
                        :key        key
                        :result     (get results year)})])
        treatments))


#_(defn stacked-bar-yearly-props
  "Lookup treatments and create a stacked bar dataset from model results, indexed by year.
  Each data-item is an Item with :treatment-key and :value"
  [{:keys [model treatments horm-yes tra-yes results] :as result-data} year]
  {year
   (mapv (fn [[key value]]
           (->Item key value))
         (stacked-yearly-values result-data year))})

#_(defn filter-results->stacked-bar-props
  "Different models use different treatment widgets, so we need to use these to react to the correct
  treatments and lookup the appropriate result-data.

  Must be called from a reactive"
  [{:keys [model horm-yes tra-yes] :as result-data} years]

  (when
    (#{"v1.2" "v2.1"} model)

    ;;
    ;; NB This provides the WIRED UP title set!
    ;;
    {:title          "Overall Survival"
     :subtitle-over  "for women with breast cancer, 5 and 10 years after surgery"
     :subtitle-under "years after surgery"
     :dataset        (into {} (map (partial stacked-bar-yearly-props
                                            (assoc result-data :horm-yes horm-yes :tra-yes tra-yes)) years))}


    )
  )

#_(defn filter-year-results-map
  "Give this the result of filter-results->stacked-bar-props in order to get results in a useful map form"
  [filtered]
  (into {} (map (fn [{:keys [treatment-key value]}] [treatment-key value]) filtered)))
