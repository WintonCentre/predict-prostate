(ns predict-prostate.pages.not-found
  (:require [rum.core :as rum]
            [bide.core :as r]
            [predict-prostate.router :refer [router]]
            [predict-prostate.layout.header :refer [header footer]]
            [predict-prostate.content-reader :refer [all-subsections]]
            [predict-prostate.components.bs3-modal :refer [editor-modal]]))


(rum/defc not-found < rum/static [ttt]

  [:.container
   [:.row
    [:.col-sm-12
     (header ttt)

     [:.row

      [:.col-sm-4 {:style {:padding-left  "25px"
                           :padding-right "25px"}}

       (all-subsections ttt "not-found")

       ]

      [:.col-sm-8.col-xs-12 {:style {:min-height "calc(100vh - 200px)"}}
       [:img.img-responsive {:src   "assets/404.jpg"
                             :style {:margin-top "3ex"}
                             :alt   "Not found"}]]]
     (editor-modal)
     (footer)]]])
