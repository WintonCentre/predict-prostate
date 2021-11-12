(ns predict-prostate.pages.contact
  (:require [rum.core :as rum]
            [predict-prostate.layout.header :refer [header header-banner footer footer-banner]]
            [predict-prostate.content-reader :refer [section all-subsections]]
            [predict-prostate.state.run-time :refer [route-change]]
            [graphics.simple-icons :refer [icon]]
            [interop.utils :refer [scrollTo]]
            [pubsub.feeds :refer [publish]]
            ))

(rum/defc contact < rum/static [ttt _]
  [:.container-fluid
   (header ttt)
   (header-banner ttt "contact-preamble")
   [:#main-content.row {:tab-index -1}
    [:.col-sm-10.col-sm-offset-1.col-lg-8.col-lg-offset-2 {:style {:min-height "calc(100vh - 700px)"}}
     (all-subsections ttt "contact")]]
   (scrollTo 0)
   (footer-banner ttt)
   [:.row.screen-only (footer)]])
