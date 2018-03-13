(ns predict-prostate.content
  (:require [predict-prostate.state.run-time :refer [input-widget]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]
            [rum.core :as rum]
    ;[predict-prostate.results.sidefx :refer [sidefx-table2]]
            )
  )

;;
;; We'll attempt to keep text content here inside a useful structure - a sort of static database.
;;
;; The structure isn't too important so long as we can process it easily, and it makes some kind of sense.
;; Main idea is to use a collection of clojure nested vectors - i.e. things in square brackets loosely mimicking an
;; HTML document.
;;
;; The first element of the vector should be tagged with an identifier starting with a colon: e.g. :section, :p.
;;
;; Optionally, immediately after the tag, there may be an id, starting with a hash - such as #what-it-does.
;; The code may use this id to index and locate the text. Ids should be unique.
;;
;; Optionally, there may also be a style or position indicator. These start with a '.'. e.g.  .input-box might be used to
;; indicate that the text is closely attached to an input box, whereas '.input-widget' suggests it is relevant to one
;; input in particular. But really, anything that makes sense is fine.
;;
;; It is also possible to pass parameters to the HTML element such as CSS styling. See the examples below.
;;
;; All text should be inside double quotes. Prefer single quotes inside text. If you need a double quote inside text,
;; preface it with a backslash.
;;
;; This file can be edited on github.
;;
;; Example Template:
;; =================
;;
;; [:section#id.class "Sample paragraphs"
;;   [:p "First paragraph."
;;   [:p.emphasise "Second emphasised paragraph."]
;;   [:p "A paragraph with some " [:strong "bold"] "text."]
;;   [:p {:style {:font-size "120%"}} "A paragraph of 120% larger text than normal."]
;;
;; This syntax is known as 'hiccup' format in clojure.
;; See further examples at https://github.com/yokolet/hiccup-samples.
;;



(defn unknown []
  "A placeholder returning whatever we decide the unknown option should be called"
  [:strong "Unknown"])


(rum/defc progress [percent]
  [:.progress {:style {:background-color "#94d3f0"}}
   [:.progress-bar {:role          "progress-bar"
                    :aria-valuenow percent
                    :aria-valuemin 0
                    :aria-valuemax 100
                    :style         {:width            percent
                                    :background-color "#bc3d95"}}
    [:span.sr-only (str percent) "% Complete"]]])

(def content
  "Text for the site"
  [
   [:section#not-found "Oops!"
    [:section#oops "Oops!"
     [:p "We're sorry, but that page doesn't exist on this site."]
     [:p "Try clicking on 'Home' in the navigation bar instead."]]]

   [:section#strap-line "Clear data on prostate cancer treatment outcomes"]

   [:section#home-what-is "What is Predict?"
    [:p {:key 1} "Predict is a tool that helps doctors and patients decide on whether to have conservative or radical treatment for prostate cancer."]
    [:p {:key 2} "We recommend patients read the "
     [:a {:key 1 :href "#/patient"} "patient information"]
     [:span {:key 2 :style {:font-size "16px"}} " section before using the tool."]]]

   [:section#home-how-use "How do I use Predict/Prostate?"
    [:p {:key 3} "You enter details about yourself and your prostate cancer, and then select different treatment options to see how effective they are."]
    [:div {:key 2 :style {:border-left  "3px solid #005FB1"
                          :padding-left "10px"}}
     [:p "We recommend that patients use this tool with their doctor."]]]

   [:section#home-what-tell "What will Predict tell me?"
    [:p {:key 4} "The predict tool shows you how different management strategies affect the percentage of men that survive ten and fifteen years after diagnosis."]]

   [:section#about-page "About"
    [:section#who "Who developed the PREDICT programme?"
     [:p {:style {:color "red"}} "edit text here"]]

    [:section#how "How was the computer programme developed?"
     [:p {:style {:color "red"}} "edit text here"]]

    [:section#where "Where can I find more information on Prostate Cancer?"
     [:p {:style {:color "red"}} "edit text here"]
     [:p "There is a great deal of information on Prostate Cancer on the web. One of best and most reliable sources is Cancer
    Research UK. The information is written by experts, is up to date and in a style that is easy to understand."]]
    ]

   [:section#patient-information "Patient Information"

    [:section#what-it-does "What is PREDICT?"
     [:p {:style {:color "red"}} "edit text here"]
     [:p "Nothing can ever tell an individual man what is going to happen to him – but we believe that in order to make
    decisions about treatment options it’s important that people are given as much information as is possible about the
    potential effects of each treatment option."]

     [:p.emphasise "The web tool is not designed to give clinical advice and all decisions on treatment options must be
    made in consultation between the patient and a qualified doctor."]]

    [:section#what-it-says "What does it tell me?"
     [:p {:style {:color "red"}} "edit text here"]
     [:p "This web tool aims to give men who have been diagnosed with prostate cancer as accurate information as is
    possible about the potential effects of further treatment options available to them. "]
     ]

    [:section#how-does-it-know "How does it know what a treatment will do for me?"
     [:p {:style {:color "red"}} "edit text here"]
     [:p "It can’t tell you what will happen to you, but it will look at the evidence to tell you a ‘best guess’ at the
    chances of different outcomes."]

     [:p "The maths behind the tool is based on data from thousands of men who have undergone prostate cancer treatment in the recent past in England. These data are used to
    help produce the best assessment possible of the potential outcomes for men who have prostate cancer now, depending
    on characteristics about them and their tumour."]]


    [:section#how-accurate "How accurate is it?"
     [:p {:style {:color "red"}} "edit text here"]

     [:p "This work has shown that this tool gives as good a guess as we currently can as to what is likely to happen to men
     opting for different treatments."]

     ]]

   [:section#clinician-information "Clinician Information"

    [:section#professionals "Information for professionals"
     [:p {:style {:color "red"}} "edit text here"]
     [:p "Welcome to PREDICT, an online prognostication and treatment benefit tool designed to help clinicians and
     patients make informed decisions about treatment following diagnosis. "]


     [:p "We welcome any feedback you may have about PREDICT. If you have questions about its development or there are
     features you would like to have added to the model please let us know by emailing us at info@predict.nhs.uk."]]

    [:section#model-development "Model development"
     [:p {:style {:color "red"}} "edit text here"]]

    [:section#model-validation "Model validation"
     [:p {:style {:color "red"}} "edit text here"]
     [:p "The clinical validity of a prediction model can be defined as the accuracy of the model to predict future
     events. The two key measures of clinical validity are calibration and discrimination."]

     [:p "Calibration is how well the model predicts the total number of events in a given data set. A perfectly
     calibrated model is one where the observed (or actual) number of events in a given patient cohort is the same as
     the number of events predicted by the model.\n\nDiscrimination is how well the model predicts the occurrence of an
     event in individual patients. The discrimination statistic is a number between zero and one. It is generally
     obtained from the area under a receiver-operator characteristic curve. If a random pair of patients is selected
     from a dataset - one being a survivor and the other a non-survivor - the discrimination is the probability that the
     non-survivor will have a higher predicted risk than the survivor."]]]


   [:section#predict-tool "PREDICT tool"

    [:section#tool-preamble "Preamble"
     [:p.emphasise {:key 0 :style {:margin-top "10px"}}
      [:strong "We recommend that patients use this tool in consultation with their doctor."
       [:br] "This tool is only for use in men without metastatic disease."]]]

    [:section#tool-preamble-2 "Preamble 2"
     [[:p.emphasise {:key 1 :style {:border "none"}} "Complete the section below, then select from the treatment options to
     see how they improve survival rates. Click on the information buttons to see an explanation of each field."]]]

    [:section#tool-postamble "Postamble"
     [:section#dummy ""
      [:h3 "Important"]
      [:p "These results are estimates based on data from men with similar characteristics.
     There are other important factors such as lifestyle, and other chronic conditions which affect outcomes. Your doctor will help you put these
     results in context."]
      [:h3 "Potential Harms"]
      [:p "The treatments listed above can have side effects. The following websites provide excellent advice and
     information on these treatments and their potential side effects:"]

      [:h4 "More information about treatments:"]
      [:ul {:style {:font-size       "120%"
                    :list-style-type "none"}}
       [:li {:key 1}
        [:a {:href "http://www.cancerresearchuk.org/about-cancer/prostate-cancer/treatment" :target "blank"} "Cancer research UK"]]
       [:li {:key 2}
        [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/" :target "blank"} "NHS"]]]


      [:h4 "More information about potential harms:"]
      [:ul {:style {:font-size       "120%"
                    :list-style-type "none"}}
       [:li {:key 3}
        [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radical-prostatectomy" :target "blank"} "Radical prostatectomy"]]
       [:li {:key 4}
        [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radiotherapy" :target "blank"} "Radiotherapy"]]
       ]
      [:h4 "Sources of advice and support:"]
      [:ul {:style {:font-size       "120%"
                    :list-style-type "none"}}
       [:li {:key 1}
        [:a {:href "http://www.macmillan.org.uk/" :target "blank"} "Macmillan"]]
       [:li {:key 2}
        [:a {:href "http://prostatecanceruk.org/" :target "_blank"} "Prostate Cancer UK"]]
       [:li {:key 3}
        [:a {:href "https://www.nhs.uk/pages/home.aspx" :target "_blank"} "NHS Choices"]]
       ]
      ]]


    [:section#age "Age"
     [:p "The age when the cancer was diagnosed."]

     [:p [:i "Either type in the number or use the '+' or '-' buttons to adjust it. You can also use the up and down
     arrow keys to step by 1, or the right and left arrow keys to step by 5. Hold a key down for repeated steps."]]]

    [:section#psa "PSA"
     [:p "PSA (prostate-specific antigen level) at the point diagnosis - i.e prior to biopsy or treatment."]]

    [:section#size "Size"
     [:p "The approximate size of the tumour in millimetres."]]

    [:section#t-stage "Clinical stage"
     [:p "The clinical tumour stage according to the TNM classification. T stage 1, 2, 3, or 4."]]

    [:section#histological-grade-group "Histological grade group"
     [:p "The reported grade group from the diagnostic prostate biopsies. This can be derived from the Gleason score."]]

    [:section#gleason-scale "Gleason scale"
     [:p "The Gleason group from the diagnostic prostate biopsies. This can be derived from the Grade Group."]]

    [:section#biopsy "Biopsy"
     [:p "The proportion of cores with any prostate cancer."]]

    [:section#h-admissions "Hospital admissions in the last 2 years"
     [:p "This refers to any admission to hospital in the 2 years before prostate cancer diagnosis - anything related
     to the prostate cancer diagnosis itself should be ignored."]]

    [:section#comorb  "Comorbidity"
     [:p "Tick yes if you have a history of any of the following conditions:"
      [:br]
      "Myocardial infarction, Congestive heart failure, Peripheral vascular disease (including aortic aneurysm >= 6 cm),
      Cerebrovascular disease (Stroke or TIA), Dementia, Chronic pulmonary disease, Connective tissue disease, Peptic
      ulcer disease, Liver disease, Diabetes (excluding diet-controlled diabetes alone), Hemiplegia, Moderate or severe
      renal disease, Cancer (EXCLUDING THIS PROSTATE CANCER) (exclude if > 5 y from diagnosis), Leukemia (acute or
      chronic), Lymphoma, AIDS."]]


    [:section#surgery "Treatments already received"
     [:p "This tool is useful in helping to decide on additional therapies after any surgery has taken place"]]

    [:section#regime "Treatment Regimes"
     [:p "Explain Conservative and Radical Treatments"]]

    ;; Treatment side effects

    [:section#side-effects-am "Active Monitoring"
     [:p {:style {:color "red"}} "edit me"]]

    [:section#side-effects-rp "Radical Prostatectomy"
     [:p {:style {:color "red"}} "edit me"]]

    [:section#side-effects-rt "Radiotherapy"
     [:p {:style {:color "red"}} "edit me"]]

    ;;
    ;; Treatment Options and Results
    ;;

    [:section#show-ranges "Show ranges"
     [:p "The default values are the best estimate of the benefit. When you click on show ranges, a 95% prediction
     interval is added to the table. The true value of the benefit is very unlikely be outside this range"]]

    ]]

  )
