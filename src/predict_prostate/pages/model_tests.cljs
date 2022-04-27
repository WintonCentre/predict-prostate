(ns predict-prostate.pages.model-tests
  (:require [rum.core :as rum]
            [predict-prostate.layout.header :refer [header footer]]
            [graphics.simple-icons :as simple]
            [cljs.reader :as edn]
            [predict-prostate.models.tests :refer [get-test-cases test-all-cases]]
            [cljs.core.async :refer [chan put! take!]])
  (:require-macros [cljs.core.async :refer [go]]))

(def load-chan (chan 0))

(defn click-handler []
  (get-test-cases "/test-runs.txt"
                  {:handler  #(put! load-chan %)})
  (go
    (take! load-chan #(test-all-cases (edn/read-string %)))))

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
      [:.col-12
       [:img.img-responsive {:src   "/assets/model-tests.png"
                             :style {:margin-top "3ex"}
                             :alt   "Model tests"}]]]
     [:.row

      [:.col-12 {:style {;:min-height "calc(100vh - 200px)"
                         :display "flex"
                         :justify-content "center"}}
       (test-button)]]
     [:.row
      [:.col-12 {:style {:min-height "calc(100vh - 200px)"
                         :padding-left  "25px"
                         :padding-right "25px"
                         :display "flex"
                         :justify-content "center"}}
       [:p [:i "Open the console to see the results of the tests."]]]]
     (footer)]]])