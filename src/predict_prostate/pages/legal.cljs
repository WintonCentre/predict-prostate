(ns predict-prostate.pages.legal
  (:require [rum.core :as rum]
            [predict-prostate.layout.header :refer [header header-banner footer footer-banner]]
            [predict-prostate.content-reader :refer [section all-subsections]]
            [predict-prostate.state.run-time :refer [route-change]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]
            [interop.utils :refer [scrollTo]]
            [predict-prostate.components.bs3-modal :refer [editor-modal]]
            ))

(rum/defc legal < rum/static [ttt route]
  (let [[_ {page :page}] route]
    [:.container-fluid
     (header ttt)
     (header-banner ttt "legal-preamble")
     [:#main-content.row {:tab-index -1}
      [:.col-sm-10.col-sm-offset-1.col-lg-8.col-lg-offset-2 {:style {:min-height "calc(100vh - 700px)"}}
       (when page (all-subsections ttt (name page)))]]
     (scrollTo 0)
     (editor-modal)
     (footer-banner ttt)
     [:.row.screen-only (footer)]]
    ))
