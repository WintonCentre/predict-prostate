(ns predict-prostate.pages.model-tests
  (:require [rum.core :as rum]
            [predict-prostate.layout.header :refer [header footer]]
            [graphics.simple-icons :as simple]
            [cljs.reader :as edn]
            [predict-prostate.models.tests :refer [get-test-cases test-all-cases]]
            [predict-prostate.state.run-time :refer [test-cursor rtdb]]))

(defn click-handler []
  (get-test-cases "/test-runs.txt"
                  {:handler #(swap! rtdb assoc :model-test-cases (edn/read-string %))}
                  #_{:on-error #(put! err-chan %)
                     :handler  #(put! static-chan %)})
  (println (:model-test-cases @rtdb))
  (test-all-cases (:model-test-cases @rtdb)))


(defn test-button []
  [:button.btn.btn-primary.btn-lg {:aria-label "launch a batch of tests"
                                   :type       "button"
                                   :on-click    click-handler}
   (simple/icon {:family :fa} "chevron-right") " " "Launch model tests"])


(rum/defc model-tests < rum/static [ttt]

  [:.container
   [:.row
    [:.col-sm-12
     (header ttt)

     [:.row

      [:.col-sm-4 {:style {:padding-left  "25px"
                           :padding-right "25px"}}
       [:p "Open the console to see the results of the tests."]]

      [:.col-sm-8.col-xs-12 {:style {:min-height "calc(100vh - 200px)"}}
       (test-button)
       [:img.img-responsive {:src   "assets/404.jpg"
                             :style {:margin-top "3ex"}
                             :alt   "Not found"}]]]
     
     (footer)]]])