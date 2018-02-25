(ns common.data-frame)

;;
;; Implement a set of transducers which operate on data-frames. In this context a data-frame
;; is a rectangular table of data in columns where each column is identified by a keyword.
;;
;; Example 1:
;; (def df {:a [1 2 3] :b [4 5 6] :c [7 8 9] :d [10 11 12]})
;;
;; Example 2:
;; A spreadsheet with keywords for column names
;;


(defn cell-apply [f]
  (fn [[k vs]] [k (map f vs)]))

(comment
  (into {} (map (cell-apply inc)) {:a (range 10) :b (range 5 15)})
  ;=> {:a (1 2 3 4 5 6 7 8 9 10), :b (6 7 8 9 10 11 12 13 14 15)}
  )

(defn cell-update [f]
  "update a cell at position k index with old value to a new value
  given by (f k index old)"
  (fn [[k vs]]
    (let [g (partial f k)]                                  ;(fn [index old] (f k index old))
      [k (map-indexed g vs)])))

(comment
  (into {}
    (map (cell-update (fn [k index old] (str k "-" index "-" old))))
    {:a [1 2 3] :b [4 5 6]})
  ;=> {:a (":a-0-1" ":a-1-2" ":a-2-3"), :b (":b-0-4" ":b-1-5" ":b-2-6")}
  )

(defn cell-sums
  [[k vs]]
  [k (reductions + vs)])

(comment
  (into {} (map cell-sums) '([:a [1 2 3]] [:b [4 5 6]] [:c [7 8 9]] [:d [10 11 12]]))
  ;=> {:a (1 3 6), :b (4 9 15), :c (7 15 24), :d (10 21 33)}
  )

(defn cell-diffs
  [initial]
  (fn [[k vs]]
    [k (map (fn [[a b]] (- b a)) (partition 2 1 (cons initial vs)))]))

(comment
  (into {} (map (diff-cells 0)) '([:a [0 1 2 3]] [:b [1 6 5 4]] [:c [3 3 3 4]] [:d [0 -1 -2]]))
  ;=> {:a (0 1 1 1), :b (1 5 -1 -1), :c (3 0 0 1), :d (0 -1 -1)}

  (into {} (map (diff-cells 1)) '([:a [0 1 2 3]] [:b [1 6 5 4]] [:c [3 3 3 4]] [:d [0 -1 -2]]))
  ;=> {:a (-1 1 1 1), :b (0 5 -1 -1), :c (2 0 0 1), :d (-1 -1 -1)}
  )

(defn cell-binary [f]
  (fn [[[k1 vs1] [k2 vs2]]] [k1 (map f vs1 vs2)]))

(comment
  (into {} (map (cell-binary +)) [[[:a (range 10)] [:b (range 5 15)]] [[:a (range 5 15)] [:b (range 10)]]])
  )


(comment

  ;; compose transducers
  (def xf (comp
            (map (cell-apply inc))
            (map cell-sums)
            (map (cell-diffs 0))
            (map (cell-apply dec))
            ))
  (into {} xf {:a (range 10) :b (range 5 15)})
  ; {:a (0 1 2 3 4 5 6 7 8 9), :b (5 6 7 8 9 10 11 12 13 14)}

  (def a (transduce xf conj {:a (range 10) :b (range 5 15)}))
  (def r (eduction xf {:a (range 10) :b (range 5 15)}))

  ;; The mapping transducer (mapping f) is equivalent to (map f)
  ;; https://stackoverflow.com/questions/32822207/eduction-vs-transducer-composition
  (defn mapping
    ([f]
     (fn [rf]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result input]
          (rf result (f input)))))))

  ;; experimenting with eduction

  )

