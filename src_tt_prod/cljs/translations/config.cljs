(ns translations.config)

(def translation-profile :prod)

; config file for the live dictionary
(def live-dictionary-url "/live_dictionary.txt")

(def initial-supported-langs #{:en :es :fr :nl :pt :sc :tc})

(def predict-edit false)