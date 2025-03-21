(defproject predict-prostate "1.1"
  :description "Prostate Cancer survival prediction tool"
  :url "https://prostate.predict.nhs.uk"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}



  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.516"]
                 [org.clojure/core.async "1.5.648"]

                 ;; cljs dependencies
                 [cljs-ajax "0.8.4"]
                 [cljs-css-modules "0.2.1"]
                 ;[sablono "0.7.4"]
                 ;; need to specify this for sablono
                 ;; when not using devcards
                 ;[cljsjs/react "15.4.2-2"]
                 ;[cljsjs/react-dom "15.4.2-2"]
                 ;[devcards "0.2.7"]
                 ;[figwheel-sidecar "0.5.20"]

                 ; should we upgrade Rum and use React16 ???
                 [rum "0.12.8"]
                 [tongue "0.4.3"]
                 [pubsub "0.2.1"]
                 ;[wc-rum-lib "0.1.16"]
                 [cljsjs/jquery "3.4.0-0"]
                 [cljsjs/bootstrap "3.4.1-0"]


                 ; routing
                 [funcool/bide "1.7.0"]

                 [binaryage/devtools "1.0.4"]
                 [binaryage/oops "0.7.1"]]

  :plugins [;[lein-figwheel "0.5.18"]
            [lein-less "1.7.5"]
            [lein-ancient "0.6.15"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            ;[lein-autoprefix "0.1.0-SNAPSHOT"]
            [lein-pprint "1.2.0"]
            ]

  :source-paths ["src"]

  :less {:source-paths ["resources/less/style.less"]
         :target-path  "resources/public/css/style.css"}

  :autoprefix {:source-path "resources/less/postcss/"
               :dest-path   "resources/public/css"
               :files       ["test.css"
                             "style.css"]
               :browsers    "last 2 versions, > 1%, IE 9, IE 10"
               }

  :cljsbuild {
              :builds [
                       {:id           "min"
                        :source-paths ["src" "src_tt_prod/cljs"]
                        :compiler     {:output-to       "resources/public/js/compiled/predict_prostate.js"
                                       :main            predict-prostate.core
                                       :optimizations   :advanced
                                       :pseudo-names    false
                                       :closure-defines {goog.DEBUG false}
                                       :externs         ["externs/bootstrap.js"
                                                         "externs/jquery.js"
                                                         "externs/autotrack.js"]
                                       :infer-externs   true
                                       :language-in     :ecmascript5
                                       :pretty-print    false}}
                       
                       {:id           "min-edit"
                        :source-paths ["src" "src_tt_edit/cljs"]
                        ;:test-paths   ["test_tt_edit/cljs"]
                        :compiler     {:output-to       "resources/public/js/compiled/predict_prostate.js"
                                       :main            predict-prostate.core
                                       :optimizations   :advanced
                                       :closure-defines {goog.DEBUG false}
                                       :pseudo-names true
                                       ;:parallel-build  true
                                       :externs         ["externs/bootstrap.js"
                                                         "externs/jquery.js"
                                                         "externs/mediatypechecker.js"
                                                         "externs/autotrack.js"]
                                       ;:pseudo-names    false
                                       :infer-externs   true
                                       :language-in     :ecmascript5
                                       :pretty-print    false}}

                       {:id           "dev"
                        :source-paths ["src"]

                        ;; The presence of a :figwheel configuration here
                        ;; will cause figwheel to inject the figwheel client
                        ;; into your build
                        :figwheel     {:on-jsload "predict-prostate.core/on-js-reload"
                                       ;; :open-urls will pop open your application
                                       ;; in the default browser once Figwheel has
                                       ;; started and compiled your application.
                                       ;; Comment this out once it no longer serves you.
                                       :open-urls ["http://localhost:4449/index.html"]}

                        :compiler     {:main                 predict-prostate.core
                                       :asset-path           "js/compiled/out"
                                       :output-to            "resources/public/js/compiled/predict_prostate.js"
                                       :output-dir           "resources/public/js/compiled/out"
                                       :source-map-timestamp true
                                       :closure-defines      {goog.DEBUG true}

                                       ;; To console.log CLJS data-structures make sure you enable devtools in Chrome
                                       ;; https://github.com/binaryage/cljs-devtools
                                       :preloads             [devtools.preload]}}
                       ;; This next build is a compressed minified build for
                       ;; production. You can build this with:
                       ;; lein cljsbuild once min
                       ]}

  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             :server-port 4449                              ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs    ["resources/public/css"]          ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this

             ;; doesn't work for you just run your own server :) (see lein-ring)

             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you are using emacsclient you can just use
             ;; :open-file-command "emacsclient"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"

             ;; to pipe all the output to the repl
             ;; :server-logfile false
             }


  ;; Setting up nREPL for Figwheel and ClojureScript dev
  ;; Please see:
  ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl
  :profiles {:dev {:dependencies  [[binaryage/devtools "0.9.10"]
                                   [figwheel-sidecar "0.5.18"]
                                   [cider/piggieback "0.5.2"]]
                   ;; need to add dev source path here to get user.clj loaded
                   :source-paths  ["src" "dev"]
                   ;; for CIDER
                   ;; :plugins [[cider/cider-nrepl "0.12.0"]]
                   :repl-options  {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
                   ;; need to add the compliled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}
             :rum-react-patch {:dependencies [[rum "0.11.3" :exclusions [[cljsjs/react] [cljsjs/react-dom]]]
                                              [cljsjs/react "17.0.2-0"]
                                              [cljsjs/react-dom "17.0.2-0"]]}})
