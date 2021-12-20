#!/usr/bin/env bb 

;;
;; You would normally run this from the bash script getdictionary.sh in the project root, but it will
;; also work if run from the loccal bb-scripts getdictionary.sh folder.
;;
;; Install babashka with homebrew for bb command
(ns getdictionary
  (:require [clojure.string :as str]
            [clojure.edn :as edn]
           ;; translations.config is symlinked from src_tt_prod/cljs/translations so it stays in sync
           ;; The original cljs is here compiled as clj.
            [translations.config :as cfg]))

;(let [[initial] *command-line-args*])

; pull this in from src_tt_prod/cljs/translations/config.cljs
;(def initial-supported-langs #{:en :es :fr :nl :pt})
(def initial-supported-langs cfg/initial-supported-langs)

; seed dictionary for editor
(def edit-dictionary (edn/read-string (slurp "../resources/public/dictionary.txt")))

;seed dictionary for production
(def prod-dictionary (edn/read-string (slurp "../resources/public/prod_dictionary.txt")))

;final live dictionary
(def live-dictionary  "../resources/public/live_dictionary.txt")

; create runtime product dictionary
(let [db-dict (->> (edn/read *in*)
                   ;(line-seq)
                   (remove
                  ; remove any accidentally inserted English
                    (fn [[cmd lang m]]
                      (let [rv
                            (and
                             (= cmd "upsert")
                             (= lang "en"))]
                        rv)))
                   (filter
                  ; include only published languages
                    (fn [[cmd lang m]]
                      (initial-supported-langs (keyword lang))))
                   (mapv
                    (fn [[cmd lang m]]
                      [(keyword cmd)
                       (keyword lang)
                       (into {} (map
                                 (fn [[k v]]
                                   [(->> (str/split k #"#")
                                         (interpose "/")
                                         (apply str)
                                         (keyword)) v])
                                 m))])))]

  (->> (concat prod-dictionary db-dict)
    (into [])
    (spit live-dictionary)))


