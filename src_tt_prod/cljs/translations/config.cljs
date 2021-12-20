(ns translations.config
  #_(:require [translations.tongue-base :refer [wrap-translator]]
            [tongue.core :as tongue]))

(def translation-profile :prod)

; config file for the live dictionary
(def live-dictionary-url "/live_dictionary.txt")

(def initial-supported-langs #{:en :es :fr :nl :pt :sc :tc :de})

(def predict-edit false)

(def initial-lang :en)

(def initial-translations {:en {:missing         "**MISSING**"
                                ; SVG texts MUST be present in the initial dictionary
                                :curves/x-axis   "Years after diagnosis"
                                :curves/y-axis   "Percentage of men surviving"
                                ;:what-is-predict "What is Predict?"
                                }})

; The initial translations state only has to provide something until the online dictionary is accessed. Also, all translator calls should have an english default
; built in.
(def initial-t-state {:languages    initial-supported-langs ; list of currently supported languages (initialise by reading "languages.edn")
                      :lang         initial-lang ; the currently active language
                      :translations initial-translations
                      ;:translator   (wrap-translator initial-lang (tongue/build-translate initial-translations)) ; the current translator function (a wrapped tongue translator)
                      })