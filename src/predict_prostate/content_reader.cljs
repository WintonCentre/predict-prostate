(ns predict-prostate.content-reader
  (:require [predict-prostate.content :refer [content]]
            [predict-prostate.results.util :refer [alison-blue-1 alison-blue-2 alison-blue-3]]
            [rum.core :as rum]))

(def ^{:doc     "Regular expression that parses a CSS-style id and class from an element name."
       :private true}
re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(defn match-id [tag id]
  "return true if tag contains a hash tag-id matching id."
  (let [[_ _ tag-id _] (re-find re-tag (str tag))]
    (= id tag-id)))
(comment
  (match-id ":section#about-the-patient.input-box" "about-the-patient") ;=> true
  (match-id "#about-the-patient.input-box" "about-the-patient") ;=> false  (doesn't include element tag)
  (match-id ":#about-the-patient.input-box" "about-the-patient") ;=> true
  (match-id ":div#about-the-patient.input-box" "about-the-patient") ;=> true (not fussy about element tag)
  )


(defn match-node [ttt node id]
  (let [[x & xs] node]
    (cond
      (nil? x) nil
      (keyword x) (if (match-id x id) {:x x :xs xs} (match-node ttt xs id))
      (vector? x) (if-let [rv (match-node ttt x id)] rv (match-node ttt xs id))
      (seq xs) (match-node ttt xs id)
      :else nil
      )
    ))


(defn add-hiccup-key [key [tag & args]]
  (let [[m & rest-args] args
        [mk rest-args*] (if (map? m) [(assoc m :key key) rest-args] [{:key key} args])]
    ; (prn "check: " tag mk m rest-args*)
    (into [] (concat [tag mk] rest-args*)))
  )

(comment
  (add-hiccup-key "key3" [:p])
  (add-hiccup-key "key3" [:p.emphasise])
  ;=> [:p {:key "key3"}]
  (add-hiccup-key "key3" [:p "Hello there"])
  ;=> [:p {:key "key3"} "Hello there"]
  (add-hiccup-key "key3" [:p [:p "Hello there"] [:p "Bye then!"]])
  ;=> [:p {:key "key3"} [:p "Hello there"] [:p "Bye then!"]]
  (add-hiccup-key "key3" [:p {:foo 1}])
  ;=> [:p {:foo 1, :key "key3"}]
  (add-hiccup-key "key3" [:p {:foo 2} [:p "Hello there"]])
  ;=> [:p {:foo 2, :key "key3"} [:p "Hello there"]]
  (add-hiccup-key "key3" [:p {:foo 3} [:p "Hello there"] [:p "Bye then!"]])
  ;=> [:p {:foo 3, :key "key3"} [:p "Hello there"] [:p "Bye then!"]]
  )

(defn section
  ([ttt node id]
   (let [{:keys [_ xs]} (match-node ttt node id)]
     xs))

  ([ttt id] (section ttt (content ttt) id)))

(defn all-subsections
  "loop through subsections adding keys."
  [ttt id]
  (let [node (section ttt id)]
    (for [k (range (count (rest node)))
          :let [[_ title & content] (nth (rest node) k)]]
      [:section {:key k}
       [:h2 {:style {:color alison-blue-3}} title]
       (map-indexed #(add-hiccup-key (str "k" %1) %2)
                    content)
       ])))

(comment

  ;content

  (re-find re-tag ":section#adjuvant-treatments.input-box")

  (defn ttt [[_ s]] s)

  (defn mock-data [ttt] 
    [:div#top
                  [:section#1.ignore
                   [:section#this-one.found [:p (ttt [:mock/n1 "this"])]]
                   [:section#next-one.found [:p (ttt [:mock/n2 "next"])
                                             [:p#foo (ttt [:mock/n3 "foo"])]]]
                   [:section#last-one.found [:p (ttt [:mock/n4 "last"])]]]])

  (def mock-data* [:section#about-the-patient.input-box "About the patient"

                   [:p "This section collects information about the person with prostate cancer which may affect the treatment choices
    available to them or the outcomes of those treatments."]

                   [:p "The options available are those recorded in the English health service records, as the tool is based on a
    database of patients from England."]])

  mock-data
  mock-data*

  (match-id :div#top "top")

  (match-node ttt mock-data "top")
  (match-node ttt mock-data "1")
  (match-node ttt mock-data "next-one")
  (match-node ttt mock-data "foo")

  (match-node ttt mock-data* "about-the-patient")

  (content)
  (match-node ttt (content) "about-the-patient")
  (match-node ttt content "welcome")
  (match-node ttt content "why")
  (section ttt "welcome")

  (def clin-info (section ttt content "clinician-information"))
  (section ttt clin-info "oncotype")

  #_(match-id ":section#adjuvant-treatments.input-box" "adjuvant-treatments")
  #_(match-id ":section#treatments.input-box" "adjuvant-treatments")

  )