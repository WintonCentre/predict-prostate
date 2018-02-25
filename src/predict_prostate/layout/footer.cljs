(ns predict-prostate.layout.footer
  (:require [rum.core :as rum]))


(rum/defc footer []
  [:.row.screen-only
   [:.col.footer {:style {:background-color "grey"}}
    "Hello"]])

