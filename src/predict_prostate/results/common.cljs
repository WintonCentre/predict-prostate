(ns predict-prostate.results.common
  (:require [rum.core :as rum]
            [predict-prostate.results.util :refer [strip-root lookup ->Item treatment-callout-text]]
            [predict-prostate.state.run-time :refer [input-cursor results-cursor]]))

(def result-scroll-height "850px")

(defn stacked-yearly-values
  "Lookup treatments and create a stacked bar dataset from model results, indexed by year.
  Each data-item is a key value pair ordered in the same way as incoming treatments vector."
  [{:keys [model treatments horm-yes tra-yes results]} year]

  (mapv (fn [key]
          [key (lookup {:model      model
                        :treatments treatments
                        :horm-yes   horm-yes
                        :tra-yes    tra-yes
                        :key        key
                        :result     (get results year)})])
        treatments))

(comment
  (stacked-yearly-values {:model      "v2.1"
                          :treatments (map strip-root [:surgery :horm :chemo :tra :br :oth])
                          :results    @results-cursor
                          :tra-yes    true
                          :horm-yes   true} 5)

  ; => [[:surgery 88] [:horm 3.7] [:chemo 0] [:tra 2.4]]

  )


(defn stacked-bar-yearly-props
  "Lookup treatments and create a stacked bar dataset from model results, indexed by year.
  Each data-item is an Item with :treatment-key and :value"
  [{:keys [model treatments horm-yes tra-yes results] :as result-data} year]
  {year
   (mapv (fn [[key value]]
           (->Item key value))
         (stacked-yearly-values result-data year))})


(comment
    (stacked-bar-yearly-props {:model      "v2.1"
                               :treatments (map strip-root [:surgery :horm :chemo :tra :br :oth])
                               :results    @results-cursor
                               :tra-yes    true
                               :horm-yes   true} 5)
    ; => {5
    #_[{:treatment-key :surgery, :value 80}
       {:treatment-key :horm, :value 6}
       {:treatment-key :chemo, :value 0}
       {:treatment-key :tra, :value 4}]
    (stacked-bar-yearly-props {:model      "v2.1"
                               :treatments (map strip-root [:surgery :horm :chemo :tra :br :oth])
                               :results    @results-cursor
                               :tra-yes    true
                               :horm-yes   true} 10)
    )

(defn filter-results->stacked-bar-props
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

(defn filter-year-results-map
  "Give this the result of filter-results->stacked-bar-props in order to get results in a useful map form"
  [filtered]
  (into {} (map (fn [{:keys [treatment-key value]}] [treatment-key value]) filtered)))
