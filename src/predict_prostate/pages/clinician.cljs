(ns predict-prostate.pages.clinician
  (:require [rum.core :as rum]
            [predict-prostate.layout.header :refer [header footer]]
            [predict-prostate.content-reader :refer [section all-subsections]]
            [predict-prostate.state.run-time :refer [route-change]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]
            ))


(rum/defc clinician < rum/static []
  [:.container {:style {:height "100%"}}
   [:.row
    [:.col-sm-12
     (header)
     [:row
      [:.col-sm-10.col-sm-offset-1 {:style {:min-height "calc(100vh - 200px)"}}
       (all-subsections "clinician-information")
       ]
      ]
     (footer)]]
   ])
