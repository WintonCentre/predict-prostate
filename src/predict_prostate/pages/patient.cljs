(ns predict-prostate.pages.patient
  (:require [rum.core :as rum]
            [predict-prostate.layout.header :refer [header footer]]
            [predict-prostate.content-reader :refer [section all-subsections]]
            [predict-prostate.state.run-time :refer [route-change]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]
            ))


(rum/defc patient < rum/static [section-id]
  [:.container
   [:.row
    [:.col-sm-12
     (header)
     [:row
      [:.col-sm-10.col-sm-offset-1 {:style {:min-height "calc(100vh - 200px)"}}
       (all-subsections "patient-information")
       ]
      ]
     (footer)]]
   ])
