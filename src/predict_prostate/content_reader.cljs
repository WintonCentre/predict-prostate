(ns predict-prostate.content-reader
  (:require [predict-prostate.content :refer [content]]
            [rum.core :as rum]))

(def ^{:doc     "Regular expression that parses a CSS-style id and class from an element name."
       :private true}
re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(defn match-id [tag id]
  "return true if tag contains a hash tag-id matching id"
  (let [[_ _ tag-id _] (re-find re-tag (str tag))]
    (= id tag-id)))

(defn match-node [node id]
  (let [[x & xs] node]
    (cond
      (nil? x) nil
      (keyword x) (if (match-id x id) {:x x :xs xs} (match-node xs id))
      (vector? x) (if-let [rv (match-node x id)] rv (match-node xs id))
      (seq xs) (match-node xs id)
      :else nil #_(throw (js/Error. (str "match-node " {:x x :xs xs})))
      )
    ))


(defn add-hiccup-key [key [tag & args :as hiccup]]
  (let [[m & rest-args] args
        [mk rest-args*] (if (map? m) [(assoc m :key key) rest-args] [{:key key} args])]
    ; (prn "check: " tag mk m rest-args*)
    (into [] (concat [tag mk] rest-args*)))
  )

(comment
  (add-hiccup-key "key3" [:p ])
  (add-hiccup-key "key3" [:p.emphasise ])
  ;=> [:p {:key "key3"}]
  (add-hiccup-key "key3" [:p "Hello there"])
  ;=> [:p {:key "key3"} "Hello there"]
  (add-hiccup-key "key3" [:p [:p "Hello there"] [:p "Bye then!"]])
  ;=> [:p {:key "key3"} [:p "Hello there"] [:p "Bye then!"]]
  (add-hiccup-key "key3" [:p {:foo 1} ])
  ;=> [:p {:foo 1, :key "key3"}]
  (add-hiccup-key "key3" [:p {:foo 2} [:p "Hello there"]])
  ;=> [:p {:foo 2, :key "key3"} [:p "Hello there"]]
  (add-hiccup-key "key3" [:p {:foo 3} [:p "Hello there"] [:p "Bye then!"]])
  ;=> [:p {:foo 3, :key "key3"} [:p "Hello there"] [:p "Bye then!"]]
  )

(defn section
  ([node id]
   (println "node" "id" id)
   (let [{:keys [x xs]} (match-node node id)]
     xs
     #_(map-indexed #(add-hiccup-key (str "k" %1) %2) xs)))

  ([id] (section content id))
  )


(defn all-subsections [id]
  (let [node (section id)]
    (for [k (range (count (rest node)))
          :let [[sec title & content] (nth (rest node) k)]]
      [:section {:key k}
       [:h3 title]
       (map-indexed #(add-hiccup-key (str "k" %1) %2) content)
       ;(map-indexed #(rum/with-key %1 %2) content)
       ])))

(comment

  ;content

  (re-find re-tag ":section#adjuvant-treatments.input-box")


  (def mock-data [:div#top
                  [:section#1.ignore
                   [:section#this-one.found [:p "this"]]
                   [:section#next-one.found [:p "next"
                                             [:p#foo "foo"]]]
                   [:section#last-one.found [:p "last"]]
                   ]])

  (def mock-data* [:section#about-the-patient.input-box "About the patient"

                   [:p "This section collects information about the person with breast cancer which may affect the treatment choices
    available to them or the outcomes of those treatments."]

                   [:p "The options available are those recorded in the English health service records, as the tool is based on a
    database of patients from England."]])

  mock-data
  mock-data*

  (match-id :div#top "top")

  (match-node mock-data "top")
  (match-node mock-data "1")
  (match-node mock-data "this-one")
  (match-node mock-data "foo")

  (match-node mock-data* "about-the-patient")

  content
  (match-node content "about-the-patient")
  (match-node content "welcome")
  (match-node content "why")
  (section "welcome")

  (def clin-info (section content "clinician-information"))
  (section clin-info "oncotype")

  #_(match-id ":section#adjuvant-treatments.input-box" "adjuvant-treatments")
  #_(match-id ":section#treatments.input-box" "adjuvant-treatments")

  )