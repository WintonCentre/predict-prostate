(ns predict-prostate.content
  (:require [predict-prostate.state.run-time :refer [input-widget]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]
            [rum.core :as rum]
            [predict-prostate.router :refer [navigate-to iref docroot]]
    ;[predict-prostate.results.sidefx :refer [sidefx-table2]]
            [predict-prostate.results.util :refer [alison-blue-1 alison-blue-2 alison-blue-3]]
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

(defn page-link [route text]
  [:button.btn-link {:on-click #(navigate-to route)}
   [:span {:style {:color     alison-blue-3
                   :font-size 18}} text]]
  )

(def content
  "Text for the site"
  [
   [:section#not-found "Oops!"
    [:section#oops "Oops!"
     [:p "We're sorry, but that page doesn't exist on this site."]
     [:p "Try clicking on 'Home' in the navigation bar instead."]]]

   [:section#strap-line "Clear data on prostate cancer treatment outcomes"]

   [:section#home-what-is "What is Predict:Prostate?"
    [:p {:key 1} "Predict is a tool that helps doctors and patients decide on whether to have conservative or radical
    management for non-metastatic prostate cancer."]
    [:p {:key 2} ""]
    ]

   [:section#home-how-use "How do I use Predict?"
    [:p {:key 2} "Enter the details about yourself and your prostate cancer, and then select conservative management and radical treatment to see how effective they are."]
    [:p {:key 3} "We recommend patients read the "
     [:a {:key 1 :href "#/patient"} "patient information"]
     [:span {:key 2 :style {:font-size "16px"}} " section before using the tool. Predict is intended for use amongst men
     for whom both conservative and radical treatment could be appropriate options"]]
    #_[:div {:key 2 :style {:border-left  "3px solid #005FB1"
                          :padding-left "10px"}}
     [:p "We recommend that patients use this tool with their doctor."]]]

   [:section#home-what-tell "What will Predict tell me?"
    [:p {:key 4} "The Predict tool shows you how different management strategies affect the percentage of men that survive ten and fifteen years after diagnosis."]]

   [:section#about-page "About"
    [:section#who "Who developed the Predict programme?"
     [:p  "Predict:Prostate has been developed by a partnership between the Academic Urology Group and the Department of Cancer Epidemiology at the University of Cambridge
      in collaboration with the National Cancer Registration and Analysis Service (NCRAS) at Public Health England"]]

    [:section#how "How was the computer programme developed?"
     [:p  "The team used information held by the Eastern region cancer registry on over 7000 men diagnosed with non-metastatic prostate cancer between 2000 and 2010.
      Using this information they were able to explore how individual factors affected survival over ten and fifteen years"]]

    [:section#where "Where can I find more information on Prostate Cancer?"
     [:p "There is a great deal of information on Prostate Cancer online. One of best and most reliable sources is Cancer
    Research UK. The information is written by experts, is up to date and in a style that is easy to understand."]]
    ]

   ;;
   ;; about page
   ;;
   [:section#overview "Overview"
    [:section "Overview"

     [:ul {:style {:list-style-image "url(assets/bullet-plus.png)"}}
      [:li (page-link [:about {:page :overview :section :whoisitfor}] "Who is it for?")]
      [:li (page-link [:about {:page :overview :section :howpredictworks}] "How Predict works")]
      [:li (page-link [:about {:page :overview :section :whobuiltpredict}] "Who built Predict")]
      ]

     [:section
      [:p "Predict is a tool that helps show how breast cancer treatments after surgery might improve survival rates.
    Once details about the patient and their cancer have been entered, the tool will show how different treatments would be expected to improve survival
    rates up to 15 years after diagnosis. This is based on data from similar women in the past. " [:i "It is important to note that these treatments have side effects which
    should also be considered when deciding on a treatment."]]]
     ]]


   [:section#patient-information "Patient Information"

    [:section#what-it-does "What is Predict?"
     [:p "Nothing can ever tell an individual man what is going to happen to him – but we believe that in order to make
    decisions about treatment options it’s important that people are given as much information as is possible about the
    potential effects of each treatment option."]

     [:p.emphasise "The web tool is not designed to give clinical advice and all decisions on treatment options must be
    made in consultation between the patient and a qualified doctor."]]

    [:section#what-it-says "What does it tell me?"
     [:p "This web tool aims to give men who have been diagnosed with prostate cancer as accurate information as is
    possible about the potential effects of further treatment options available to them. "]
     ]

    [:section#how-does-it-know "How does it know what a treatment will do for me?"
     [:p "It can’t tell you what will happen to you, but it will look at the evidence to tell you a ‘best guess’ at the
    chances of different outcomes."]

     [:p "The maths behind the tool is based on data from thousands of men who have been diagnosed with prostate cancer in the recent past in England. These data are used to
    help produce the best assessment possible of the potential outcomes for men who have prostate cancer now, depending
    on characteristics about them and their tumour."]]


    [:section#how-accurate "How accurate is it?"
     [:p "This work has shown that this tool gives as good a guess as we currently can as to what is likely to happen to men
     opting for different management strategies."]

     ]]

   [:section#clinician-information "Clinician Information"

    [:section#professionals "Information for professionals"
     [:p "Welcome to Predict:Prostate, an online prognostication and treatment benefit tool designed to help clinicians and
     patients make informed decisions about treatment following diagnosis of non-metastatic prostate cancer.
     Predict:Prostate has been developed by a partnership between the Academic Urology Group and the Department of Cancer Epidemiology at the University of Cambridge
    in collaboration with the National Cancer Registration and Analysis Service (NCRAS) at Public Health Englanded. 
    This work has been supported by funding from The Urology Foundation and The Evelyn Trust.
    
    The model is easy to use following data entry for an individual patient including age, PSA, clinical stage, histological grade or gradegroup, proportion of positive biopsy cores and comorbidity information. 
    Treatment benefits for radical treatment are calculated using observed data within the East of England cohort. Radical prostatectomy and radiotherapy effects are combined as no randomised data has demonstrated a difference in survival. 
    Displays within the 'charts' and 'curves' are designed to display the uncertainty around this treatment benefit, effectively presenting a range in treatment effect from 0-100% reduction in prostate cancer-specific mortality around our calculated survival estimate."]


     [:p "We welcome any feedback you may have about Predict. If you have questions about its development or there are
     features you would like to have added to the model please let us know by emailing us at info@predict.nhs.uk."]]

    [:section#model-development "Model development"
     [:p  "The model is derived from 7063 men diagnosed in Eastern England between 2000 and 2010.
      Prostate cancer-specific and non-prostate cancer mortality models were constructed using Cox proportional hazards and fractional polynomials, adjusting for known prognostic factors. 
      Further information about the model is available in abstracts presented at the European Association of Urology and American Urological Association conferences 2018.  "]]

    [:section#model-validation "Model validation"
     [:p  "The model has been validated amongst a randomly selected cohort of 3026 different men from the Eastern England cohort.
      The model has also been validated in a Singaporean cohort of 2546 men diagnosed with non-metastatic prostate cancer. In both cohorts the model performed better than the current three-tier risk stratification system."]
     [:p "The clinical validity of a prediction model can be defined as the accuracy of the model to predict future
     events. The two key measures of clinical validity are calibration and discrimination."]

     [:p "Calibration is how well the model predicts the total number of events in a given data set. A perfectly
     calibrated model is one where the observed (or actual) number of events in a given patient cohort is the same as
     the number of events predicted by the model.\n\nDiscrimination is how well the model predicts the occurrence of an
     event in individual patients. The discrimination statistic is a number between zero and one. It is generally
     obtained from the area under a receiver-operator characteristic curve. If a random pair of patients is selected
     from a dataset - one being a survivor and the other a non-survivor - the discrimination is the probability that the
     non-survivor will have a higher predicted risk than the survivor."]]]


   [:section#predict-tool "Predict tool"

    [:section#tool-preamble "Preamble"
     [:p.emphasise {:key 0 :style {:margin-top "10px"}}
      [:strong "We recommend that patients use this tool in consultation with their doctor."
       [:br] "This tool is only for use in men without metastatic disease where conservative management and radical treatment are both appropriate options."]]]

    [:section#tool-preamble-2 "Preamble 2"
     [[:p.emphasise {:key 1 :style {:border "none"}} "Complete the section below, then select from the treatment options to
     see how they impact on survival rates. Click on the information buttons to see an explanation of each field."]]]

    #_[:section#tool-postamble "Postamble"
     [:section#dummy ""
      [:h3 "Important"]
      [:p "These results are estimates based on data from men with similar characteristics.
     There are other important factors such as lifestyle, and other chronic conditions which affect outcomes. Your doctor will help you put these
     results in context."]]]

    [:section#tool-postamble "Postamble"
     [:section#dummy ""
      [:h3 "Important"]
      [:p "These results are estimates based on data from men with similar characteristics.
     There are other important factors such as lifestyle, and other chronic conditions which affect outcomes. Your doctor will help you put these
     results in context."]
      #_[:h3 "Side effects"]
      #_[:p "The treatments listed above can have side effects which should be taken into account when choosing a treatment
      regime. See " [:a {:role "button" :on-click #(navigate-to [:about {:page :faqs}])} "the FAQ 'Looking for advice?'"] " for websites providing excellent advice and information on these treatments and their potential
      side effects:"]]]

    [:section#age "Age"
     [:p "The age when the cancer was diagnosed."]

     [:p [:i "Either type in the number or use the '+' or '-' buttons to adjust it. You can also use the up and down
     arrow keys to step by 1, or the right and left arrow keys to step by 5. Hold a key down for repeated steps."]]]

    [:section#psa "PSA"
     [:p "PSA (prostate-specific antigen) level at the point diagnosis - i.e prior to biopsy or any treatment."]]

    [:section#size "Size"
     [:p "The approximate size of the tumour in millimetres."]]

    [:section#t-stage "Clinical stage"
     [:p "The clinical tumour stage according to the TNM classification. T stage 1, 2, 3, or 4. The model does not differentiate between sub-classifications such as T2b and T2c."]]

    [:section#histological-grade-group "Histological grade group"
     [:p "The reported grade group from the diagnostic prostate biopsies. This can be derived from the Gleason score."]]

    [:section#gleason-scale "Gleason scale"
     [:p "The highest Gleason grade from the diagnostic prostate biopsies."]]

    [:section#biopsy "Biopsy"
     [:p "The proportion of cores with any prostate cancer within them.
      In the case of targeted biopsies, targeted cores from a region already sampled should be disregarded. 
      Any number of targeted cores from a new region should be considered as one biopsy. As per the latest AUA guidelines."]]

    [:section#h-admissions "Hospital admissions in the last 2 years"
     [:p "This refers to any admission to hospital in the 2 years before prostate cancer diagnosis - anything related
     to the prostate cancer diagnosis itself should be ignored."]]

    [:section#comorb  "Comorbidity"
     [:p "Select yes if there is a history of any of the following conditions:"
      [:br]
      "Myocardial infarction, Congestive heart failure, Peripheral vascular disease (including aortic aneurysm >= 6 cm),
      Cerebrovascular disease (Stroke or TIA), Dementia, Chronic pulmonary disease, Connective tissue disease, Peptic
      ulcer disease, Liver disease, Diabetes (excluding diet-controlled diabetes alone), Hemiplegia, Moderate or severe
      renal disease, Cancer (EXCLUDING THIS PROSTATE CANCER and excluding any cancer diagnosed more than five years ago), Leukemia (acute or
      chronic), Lymphoma, AIDS."]]


    [:section#surgery "Treatments already received"
     [:p "This tool is useful in helping to decide on additional therapies after any surgery has taken place"]]

    [:section#regime "Treatment Regime"
     [:p "Conservative management refers to monitoring or observing the disease, without any active treatment. 
      In modern practice this is often referred to as 'active surveillance' which may involve more intensive monitoring. 
      Radical treatment here refers to radical prostatectomy (surgery) or radical radiotherapy"]]

    ;; Treatment potential harms

    [:section#side-effects-cm "Conservative Management"
     [:p  "'Active Monitoring' was the term used for conservative management within the ProtecT study, where this data is from. Men were predominantly monitored by PSA."]]

    [:section#side-effects-am "Active Monitoring"
     [:p  "'Active Monitoring' was the term used for conservative management within the ProtecT study, where this data is from. Men were predominantly monitored by PSA."]]

    [:section#side-effects-rp "Radical Prostatectomy"
     [:p  "Radical prostatectomy refers to surgical removal of the whole prostate gland, with or without the nearby lymph nodes.
      Within this study the majority were performed by an open operation"]]

    [:section#side-effects-rt "Radiotherapy"
     [:p  "Radiotherapy in the ProtecT study included combined androgen deprivation therapy for 3-6 months before and during external beam radiotherapy at a total dose of 74Gy in37 fractions."]]

    [:section#nerve-sparing "Nerve-sparing"
     [:p "Nerve-sparing radical prostatectomy"]]

    [:section#non-nerve-sparing "Non-nerve-sparing"
     [:p "Non-nerve-sparing radical prostatectomy"]]
    ;;
    ;; Treatment Options and Results
    ;;

    [:section#show-ranges "Show ranges"
     [:p "The default values are the best estimate of the benefit. When you click on show ranges, a 95% prediction
     interval is added to the table. The true value of the benefit is very unlikely be outside this range"]]

    ]]

  )
