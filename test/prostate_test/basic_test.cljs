(ns ^:kaocha/focus prostate-test.basic-test
  (:require [clojure.test :as t :refer [is testing]]))

(t/deftest test1
  (testing "The Test Runner"
    (testing "3 successes?"
      (is (= 2 (+ 1 1)))
      (is (= (map inc [1 2 3]) '(2 3 4)))
      (is (fn? reduce)))))