(ns prostate-test.router-test
  (:require #_[predict-prostate.router :refer [router]]
            [clojure.test :as t :refer [is testing]]
            [bide.core :as r]))

(def rooted identity)

(def router
  "Longest path must be first."
  (r/router
    [
     [(rooted "/") :home]
     [(rooted "/home") :home]
     [(rooted "/about/:page/:section") :about]
     [(rooted "/about/:page") :about]
     [(rooted "/about") :about]
     [(rooted "/tool") :tool]
     [(rooted "/legal/:page") :legal]
     [(rooted "/legal") :legal]
     [(rooted "/contact") :contact]
     ]))








(t/deftest "boo"
  (testing "bide"
    (is (= (r/resolve router :about {:page "history"} nil)) "/about/history")
    (is (= (r/resolve router :tool)) "/tool")
    ))