(ns predict-prostate.content
  (:require [predict-prostate.state.run-time :refer [input-widget route-change]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]
            [rum.core :as rum]
            [predict-prostate.router :refer [navigate-to iref docroot]]
    ;[predict-prostate.results.sidefx :refer [sidefx-table2]]
            [predict-prostate.results.util :refer [alison-blue-1 alison-blue-2 alison-blue-3]]
            [clojure.string :refer [split]]
            )
  )

;
; place save for ttt when we copy translated content over from Breast Cancer
;
(def ttt second)

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

(defn hr []
  [:hr {:style {:height     1
                :color      alison-blue-3
                :background alison-blue-3}}])


(defn ethnicity-text [ttt]
  [:div
   [:p (ttt [:faqs/a5-text1 "If there is no family history or known genetic risk factors (see other sections) then how or
                     if ethnicity affects prognosis is largely unclear. Predict Prostate was built from cohorts of
                     mainly Caucasian men and for this group the model is well-validated. The model has also been
                     tested in a mixed cohort of men of Chinese, Indian and Malay descent and achieves equivalent
                     performance. It has not been tested in men of Afro-Caribbean descent. However recent research
                     has shown that when matched for grade and stage of disease (like for like cancers), men of
                     Afro-Caribbean descent have the same outcomes and prognosis as men of Caucasian origin.
                     Please see these
     research articles:"])]
   [:p [:cite (ttt [:faqs/a5-text2 "Dess RT et al. Association of Black Race With Prostate Cancer-Specific and
                     Other-Cause Mortality. JAMA Oncol. 2019 May 23. doi: 10.1001/jamaoncol.2019.0826."])]]
   [:p [:cite (ttt [:faqs/a5-text3 "Sridhar G et al. Do African American men have lower survival from prostate
                     cancer compared with White men? A meta-analysis. Am J Mens Health. 2010 Sep;4(3):189-206.
                     doi:10.1177/1557988309353934."])]]])

(rum/defc progress [percent]
  [:.progress {:style {:background-color "#94d3f0"}}
   [:.progress-bar {:role          "progress-bar"
                    :aria-valuenow percent
                    :aria-valuemin 0
                    :aria-valuemax 100
                    :style         {:width            percent
                                    :background-color "#bc3d95"}}
    [:span.sr-only (str percent) "% Complete"]]])

(defn copied [text] [:span {:style {:color "#aaa"}} text])
(defn edit [text] [:span {:style {:color "#f00"}} text])

(defn faq-item
  "Render a faq question (q) and multiple answer paragraphs (as)"
  [q & as]
  [:div [:h3 q]
   (reduce conj [:div] (map (fn [a] [:div {:style {:font-size 16}} a]) as))])

(defn page-link [route text]
  [:button.btn-link {:on-click #(navigate-to route)}
   [:span {:style {:color     alison-blue-3
                   :font-size 18}} text]]
  )

(defn content
  "Text for the site"
  [ttt]
  (let [version-string "v-0.0-0.00-0-hash"
        [_ major minor _ _] (split version-string #"-")]
    [
     [:section#not-found "Oops!"
      [:section#oops (ttt [:notfound/oops "Oops!"])
       [:p (ttt [:notfound/sorry "We're sorry, but that page doesn't exist on this site."])]]]

     [:section#strap-line "Clear data on prostate cancer treatment outcomes"]

     ;
     ; Home page texts
     ;

     ; block 1
     [:section#home-strap-line "What is Predict Prostate for?"

      [:p {:key 1} (ttt [:home/prognostic-model "An individualised prognostic model for men newly diagnosed with non-metastatic prostate cancer"])]
      [:p {:key 3} ""]
      ]

     ; block 1
     [:section#home-what-is (ttt [:home/wippf-title "What is Predict Prostate for?"])
      [:p {:key 1} (ttt [:home/wippf-text "Predict Prostate is a tool where the outcomes from conservative management (or monitoring) are
    compared with radical treatment (surgery or radiotherapy)."])]]

     ; block 2
     [:section#home-how-use (ttt [:home/hdiupp-title "How do I use Predict Prostate?"])
      [:p {:key 2} (ttt [:home/hdiupp-text1 "Enter the details about yourself and your prostate cancer, and then select conservative management
    or radical treatment to see estimates of survival with each."])]
      [:p {:key 3} (ttt [:home/hdiupp-text2 "We recommend patients read the"]) " "
       [:a {:key 1 :href "#" :on-click #(publish route-change [:about {:page :overview :section :overview}])}
        (ttt [:home/hdiupp-text3 "About Predict"])]
       [:span {:key 2 :style {:font-size "16px"}} " " (ttt [:home/hdiupp-text4 "section before using the tool. Predict Prostate is only intended for
     use amongst men
     for whom both conservative management and radical treatment could both be appropriate options."])]]]
     #_[:div {:key 2 :style {:border-left  "3px solid #005FB1"
                             :padding-left "10px"}}
        [:p "We recommend that patients use this tool with their doctor."]]

     [:section#endorsement "NICE Endorsement statement"
      [:div {:style {:font-size 16 :margin-left 15}}
       [:p {:key 1} "This "
        [:a {:href "#" :on-click #(publish route-change [:tool])} "decision aid"] " supports recommendations in the "
        [:a {:href "https://www.nice.org.uk/guidance/ng131" :target "_blank"} "NICE guidance on prostate cancer"]
        ". It also supports statements 1 and 2 in the "
        [:a {:href "https://www.nice.org.uk/guidance/qs91/chapter/List-of-quality-statements" :target "_blank"} "NICE
      quality standard for prostate cancer. "]]
       [:p {:key 2} "This tool is for comparing the outcomes of conservative management and radical treatment, in men
     with non-metastatic prostate cancer. "]]
      ]



     ; block 3
     [:section#home-what-tell (ttt [:home/wwpptm-title "What will Predict Prostate tell me?"])
      [:p {:key 4} (ttt [:home/wwpptm-text1 "The Predict Prostate tool shows you how different initial management strategies affect the percentage
    of men that survive ten and fifteen years after diagnosis. Non-individualised data is also shown on the potential
    harms of each treatment type."]) " "
       [:a {:href "https://www.youtube.com/watch?v=-6UR6gAeYxI&t=10s" :target "_blank"} (ttt [:home/wwpptm-video "This short video"])] " "
       (ttt [:home/wwpptm-text2 "may help explain how Predict Prostate works."])]]

     [:section#about-page "About"
      [:section#who (copied "Who developed the Predict Prostate programme?")
       [:p (copied "Predict Prostate has been developed by a partnership between the Academic Urology Group and the
     Department of Cancer Epidemiology at the University of Cambridge
      in collaboration with the National Cancer Registration and Analysis Service (NCRAS) at Public Health England")]]

      [:section#how (copied "How was the computer programme developed?")
       [:p (copied "The team used information held by the Eastern region cancer registry on over 7000 men diagnosed with
     non-metastatic prostate cancer between 2000 and 2010.
      Using this information they were able to explore how individual factors affected survival over ten and fifteen years")]]

      [:section#where (copied "Where can I find more information on Prostate Cancer?")
       [:p (copied "There is a great deal of information on Prostate Cancer online. One of best and most reliable sources
     is Cancer
    Research UK. The information is written by experts, is up to date and in a style that is easy to understand.")]]
      ]

     ;;
     ;; about page texts
     ;;
     [:section#overview "Overview"
      [:section (ttt [:about/overview "Overview"])

       [:ul {:style {:list-style-image "url(/assets/bullet-plus.png)"}}
        [:li (page-link [:about {:page :overview :section :whoisitfor}] (ttt [:about/wiif-title "Who is it for?"]))]
        [:li (page-link [:about {:page :overview :section :howpredictworks}] (ttt [:about/hppw-title "How Predict Prostate works"]))]
        [:li (page-link [:about {:page :overview :section :whobuiltpredict}] (ttt [:about/wbpp-title "Who built Predict Prostate?"]))]
        ]

       [:section
        [:p
         ""]]
       ]]

     [:section#whoisitfor "Who is it for?"
      [:section (ttt [:about/wiif-title "Who is it for?"])
       [:p (ttt [:about/wiif-text1 "The tool is intended for men with non-metastatic prostate cancer who are deciding between conservative and
     radical management regimes. The tool is not for use in cases where prostate cancer has spread beyond the prostate.
     The tool is also less well tested and likely to be less reliable in men with very high PSA, high grade group or
     high stage
     as very few men with these characteristics were managed with conservative management in our development or
     validation data.  "])]

       [:p (ttt [:about/wiif-text2 "Nothing can ever tell an individual man exactly what is going to happen to him in the future but this tool
     will provide a realistic estimate or ‘best guess’ about the potential survival benefits of different treatment
     options."])]

       [:p.emphasise (ttt [:about/wiif-text3 "The web tool is not designed to give clinical advice and all decisions on treatment options must be
    made in consultation between the patient and a qualified doctor."])]
       (hr)]]

     [:section#howpredictworks "How Predict Prostate works"
      [:section (ttt [:about/hppw-title "How Predict Prostate works"])
       [:p [:a {:href "https://www.youtube.com/watch?v=-6UR6gAeYxI&t=10s" :target "_blank"} (ttt [:about/hppw-text1 "This short video"])]
        " " (ttt [:about/hppw-text2 "may help explain how Predict Prostate works."])]
       [:p (ttt [:about/hppw-text3 "The estimates that Predict Prostate produces are based on observational data from thousands of men previously
     diagnosed with non-metastatic prostate cancer from the East of England, UK. It provides the average survival rate
     for men in the past of similar age and with similar characteristics."])]
       [:p (ttt [:about/hppw-text4 "These data were then used to help produce estimates of the potential outcomes for men who have prostate cancer
     now, depending on characteristics about them and their tumour. The model has also been tested among men diagnosed
     with prostate cancer in Singapore.
     It has been checked to make sure that the estimates it produces are as accurate as they can be given current
     nowledge. It is important to note that the model can only give an estimate of what may happen and cannot say with
     certainty whether an individual patient will survive their cancer or not."])]
       [:p (page-link [:about {:page :technical :section :technical}] (ttt [:about/hppw-text5 "The technical section"])) " " (ttt [:about/hppw-text6 "has more detail on how
     Predict Prostate was developed and tested. "])]
       (hr)
       ]]


     [:section#whobuiltpredict "Who built Predict Prostate?"
      [:section (ttt [:about/wbpp-title "Who built Predict Prostate?"])

       [:p (ttt [:about/wbpp-text1 "Predict Prostate has been developed by a partnership between the"]) " "
        [:a {:href   "https://surgery.medschl.cam.ac.uk/divisions-and-groups/academic-urology-group/"
             :rel    "noopener"
             :style  {:text-decoration "underline"}
             :target "_blank"} (ttt [:about/wbpp-text2 "Academic Urology Group"])] " " (ttt [:about/wbpp-text3 "and the"]) " "
        [:a {:href   "https://ccge.medschl.cam.ac.uk/"
             :rel    "noopener"
             :style  {:text-decoration "underline"}
             :target "_blank"} (ttt [:about/wbpp-text4 "Centre for Cancer Genetic Epidemiology"])]
        " " (ttt [:about/wbpp-text5 "at the University of Cambridge"])
        " " (ttt [:about/wbpp-text6 "in collaboration with the National Cancer Registration and Analysis Service (NCRAS) at Public Health England.
        This work has been supported by funding from"]) " "
        [:a {:href   "https://www.theurologyfoundation.org/"
             :rel    "noopener"
             :style  {:text-decoration "underline"}
             :target "_blank"} (ttt [:about/wbpp-text7 "The Urology Foundation"])]
        " " (ttt [:about/wbpp-text8 "and the Evelyn Trust."])]


       [:p (ttt [:about/wbpp-text9 "The website has been built by the"]) " "
        [:a {:href   "https://wintoncentre.maths.cam.ac.uk"
             :rel    "noopener"
             :style  {:text-decoration "underline"}
             :target "_blank"} "Winton Centre for Risk & Evidence Communication"]
        " " (ttt [:about/wbpp-text10 "at the University of Cambridge who are funded by a generous donation from the David and Claudia Harding
        Foundation and the Winton Charitable Foundation."])]]]

     [:section#technical "Technical"
      [:section (ttt [:tech/tech-title "Technical"])

       [:ul {:style {:list-style-image "url(/assets/bullet-plus.png)"}}
        [:li (page-link [:about {:page :technical :section :history}] (ttt [:tech/dev-title "Development History"]))]
        #_[:li (page-link [:about {:page :technical :section :preversions}] "Previous Versions")]
        [:li (page-link [:about {:page :technical :section :publications}] (ttt [:tech/pub-title "Publications"]))]
        [:li (page-link [:about {:page :faqs}] (ttt [:tech/faqs-title "FAQs"]))]
        ;[:li (page-link [:about {:page :technical :section :faqs}] "FAQs")]
        ]

       [:p (ttt [:tech/tech-text1 "Click here to"]) " " (page-link [:legal {:page :algorithm} nil] (ttt [:tech/tech-text2 "find out more about the algorithm."]))]
       #_[:p "See also these papers on " [:a {:href " https://www.nature.com/articles/s41416-019-0569-4" :target "_blank"} "Clinician impact studies "]
          "and " [:a {:href "https://www.eusupplements.europeanurology.com/article/S1569-9056(19)30161-7/pdf"} "International cohorts"]]
       ]]


     [:section#history "Development History"

      [:section (ttt [:tech/dev-title "Development History"])
       [:p (ttt [:tech/dev-text1 "The original model (v1.0) was derived from cancer registry information on 7,062 men treated in East Anglia
     from 2000-2010. They were followed until 30 September 2016 so that the median length of follow-up was 9.8 years and
     the maximum was 16 years. Mortality models for prostate cancer-specific and non prostate cancer mortality were
     constructed using Cox proportional hazards, adjusted for known prognostic factors. The overall survival estimates
     for an individual patient are based on both of these models, with one adjusted for the other within a competing
     risks framework. Further information is provided from the full paper published in the open access journal"]) " "
        [:a {:href   "http://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002758"
             :style  {:text-decoration "underline"}
             :rel    "noopener"
             :target "blank"} (ttt [:tech/dev-text2 "PLoS Medicine, March 2019."])]
        ]]

      [:section (ttt [:tech/modval-title "Model validation"])
       [:p (ttt [:tech/modval-text1 "Predict Prostate was validated using a dataset of another 3,000 prostate cancer patients from the Eastern
     England data and a further 2,546 men from a separate independent dataset from Singapore diagnosed between 1990 and
     2015 and followed up for a median of 5.1 years. Discrimination in these two datasets was 0.84 for prostate cancer
     survival, and 0.77 and 0.76 for overall survival over 15 years maximum follow-up. Further details are available via
     the publication below."])]]

      [:section (ttt [:tech/modext-title "Model Extension: BRCA status and biopsy reparameterisation (version 1.1)"])
       [:p (ttt [:tech/modext-text1 "The web-model was updated in March 2019 to include BRCA status and to model the impact of biopsy core
     involvement continuously."])]
       ]


      [:section (ttt [:tech/futver-title "Future versions"])
       [:p (ttt [:tech/futver-text1 "Predict Prostate will be updated over time as new information and evidence becomes available. The model has 
            completed clinician and patient impact studies and been validated in other international cohorts - the 
            publications from these can be found here below."])]
       ]]

     [:section#publications "Publications"
      [:section (ttt [:tech/pub-title "Publications"])
       [:a {:name "publications"}]
       [:ol

        [:li [:p (ttt [:tech/pub1-text1 "Individual prognosis at diagnosis in non-metastatic prostate cancer: Development and external validation
      of the PREDICT Prostate multivariable model by D Thurtle, D Greenberg, LS Lee, H Huang, PD Pharoah,
      VJ Gnanapragasam. PLOS Medicine 2019."]) " "
              [:a {:href   "http://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002758"
                   :rel    "noopener"
                   :style  {:text-decoration "underline"}
                   :target "_blank"} (ttt [:tech/pub1-text2 "Full paper online."])]]]
        [:li [:p (ttt [:tech/pub2-text1 "Understanding of prognosis in non-metastatic prostate cancer: a randomised comparative study of clinician
       estimates measured against the PREDICT prostate prognostic model by
       David R. Thurtle, Valerie Jenkins, Paul D. Pharoah & Vincent J. Gnanapragasam."]) " "
              [:a {:href   "https://www.nature.com/articles/s41416-019-0569-4"
                   :rel    "noopener"
                   :style  {:text-decoration "underline"}
                   :target "_blank"} (ttt [:tech/pub2-text2 "Full paper online."])]]]
        [:li [:p (ttt [:tech/pub3-text1 "External validation of the PREDICT Prostate tool for prognostication in non-metastatic prostate cancer:
       A study in 69,206 men from prostate cancer data base Sweden by
       Thurtle D, Bratt O, Stattin P, Pharoah P.D, Gnanapragasam V.J."]) " "
              [:a {:href   "https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-020-01606-w"
                   #_"https://www.eusupplements.europeanurology.com/article/S1569-9056(19)30161-7/pdf"
                   :rel    "noopener"
                   :style  {:text-decoration "underline"}
                   :target "_blank"} (ttt [:tech/pub3-text2 "Full paper online."])]]]
        [:li [:p (ttt [:tech/pub4-text1 "Application of a novel machine learning framework for predicting non-metastatic prostate cancer-specific mortality in men using the Surveillance, Epidemiology, and End Results (SEER) database by Lee, C., Light, A., Alaa, A., Thurtle, D., van der Schaar, M., & Gnanapragasam, V. J.  The Lancet Digital Health 2021, 3(3), e158-e165."]) " "
              [:a {:href   "https://doi.org/10.1016/S2589-7500(20)30314-9"
                   :rel    "noopener"
                   :style  {:text-decoration "underline"}
                   :target "_blank"} (ttt [:tech/pub4-text2 "Full paper online."])]]]
        [:li [:p (ttt [:tech/pub5-text1 "Clinical Impact of the Predict Prostate Risk Communication Tool in Men Newly Diagnosed with Nonmetastatic Prostate Cancer: A Multicentre Randomised Controlled Trial  
                  by David Thurtle, Val Jenkins, Alex Freeman, Mike Pearson, Gabriel Recchia, Priya Tamer, Kelly Leonard, Paul Pharoah, Jonathan Aning, Sanjeev Madaan, Chee Goh, Serena Hilman, Stuart McCracken, Petre Cristian Ilie,
                  Henry Lazarowicz, Vincent Gnanapragasam. 
                  European Urology 2021"]) " "
              [:a {:href   "https://www.sciencedirect.com/science/article/pii/S0302283821019333?via%3Dihub"
                   :rel    "noopener"
                   :style  {:text-decoration "underline"}
                   :target "_blank"} (ttt [:tech/pub5-text2 "Full paper online."])]]]]
       ]

      ]

     [:section#faqs "FAQS"
      [:section (ttt [:tech/faqs-title "FAQs"])

       (faq-item (ttt [:faqs/q1 "Looking for advice?"])
         [:.col-sm-12                                       ; {:style {:margin-top 20}}
          [:h3 (ttt [:faqs/a1-title "More Information"])]
          [:p (ttt [:faqs/a1-text1 "The following websites provide excellent advice and information on treatments and their potential harms:"])]
          [:h4 (ttt [:faqs/a1-text2 "About treatments:"])]
          [:ul {:style {:font-size       "120%"
                        :list-style-type "none"}}
           [:li {:key 1}
            [:a {:href   "http://www.cancerresearchuk.org/about-cancer/prostate-cancer/treatment"
                 :style  {:text-decoration "underline"}
                 :rel    "noopener"
                 :target "blank"} (ttt [:faqs/a1-text3 "Cancer research UK"])]]
           [:li {:key 2}
            [:a {:href   "https://www.nhs.uk/conditions/prostate-cancer/treatment/"
                 :rel    "noopener"
                 :style  {:text-decoration "underline"}
                 :target "blank"} (ttt [:faqs/a1-text4 "NHS"])]]]


          [:h4 (ttt [:faqs/a1-text5 "About potential harms:"])]
          [:ul {:style {:font-size       "120%"
                        :list-style-type "none"}}
           [:li {:key 3}
            [:a {:href   "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radical-prostatectomy"
                 :rel    "noopener"
                 :style  {:text-decoration "underline"}
                 :target "blank"} (ttt [:faqs/a1-text6 "Radical prostatectomy"])]]
           [:li {:key 4}
            [:a {:href   "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radiotherapy"
                 :rel    "noopener"
                 :style  {:text-decoration "underline"}
                 :target "blank"} (ttt [:faqs/a1-text7 "Radiotherapy"])]]
           ]
          [:h4 (ttt [:faqs/a1-text8 "Further advice and support:"])]
          [:ul {:style {:font-size       "120%"
                        :list-style-type "none"}}
           [:li {:key 1}
            [:a {:href   "http://www.macmillan.org.uk/"
                 :rel    "noopener"
                 :style  {:text-decoration "underline"}
                 :target "_blank"} (ttt [:faqs/a1-text9 "Macmillan"])]]
           [:li {:key 2}
            [:a {:href   "http://prostatecanceruk.org/"
                 :rel    "noopener"
                 :style  {:text-decoration "underline"}
                 :target "_blank"} (ttt [:faqs/a1-text10 "Prostate Cancer UK"])]]
           [:li {:key 3}
            [:a {:href   "https://www.nhs.uk/pages/home.aspx"
                 :rel    "noopener"
                 :style  {:text-decoration "underline"}
                 :target "_blank"} (ttt [:faqs/a1-text11 "NHS Choices"])]]
           ]]

         )

       (hr)
       (faq-item (ttt [:faqs/q2 "What if I don’t have all the details needed for the input section?"])
         (ttt [:faqs/a2-text1 "The model requires all boxes on the 'predict tool' page to be completed. If the biopsy details are unknown, 'No'
         can be selected next to 'biopsy data available'. If you select 'No' for this, the Predict Prostate tool will use an average value.
         If BRCA status is unknown 'Negative or Untested' should be selected. Positive for either BRCA1 or BRCA2 is considered as positive for this model.
               All of the necessary details should be easily available to your prostate cancer specialist."]))
       (hr)
       (faq-item (ttt [:faqs/q3 "How do I know that Predict Prostate gives the right answers?"])
         (ttt [:faqs/a3-text1 "Predict Prostate estimates what would be expected to happen to men with similar characteristics based on past data. The findings are based on men diagnosed in the East of England
         but we have also tested the model on over 2,500 men diagnosed in Singapore. To the best of our knowledge the Predict tool should work equally well
         for men currently diagnosed. However, Predict Prostate can never say with 100% certainty what will happen to an individual man. Note also that Predict Prostate is likely to be
         less reliable in higher risk disease, as very few men with these characteristics were managed conservatively in our data.
         The model is intended for newly diagnosed men where conservative management and radical treatment
         are both appropriate options. The model also does not preclude the potential need for
         deferred radical treatment in the future after initial conservative management, if the disease characteristics change. "]))
       (hr)
       (faq-item (ttt [:faqs/q4 "If the data used is from patients decades ago won't the predictions it gives be out of date?"])
         (ttt [:faqs/a4-text1 "These predictions are based on patients diagnosed between 2000 and 2010, and include follow-up for up to 16 years.
         In order to carry out long term predictions older data have to be used.  It is possible that outcomes of cancers diagnosed today, and treatments used today
         will be different, but it is impossible to test this."]))
       (hr)
       (faq-item (ttt [:faqs/q5 "How does my ethnicity affect the predictions from this model"])
           (ethnicity-text ttt))
       (hr)
       (faq-item (ttt [:faqs/q6 "What use are these estimates when as a patient I will either be cured or not?"])
         (ttt [:faqs/a6-text1 "Treatment does not work the same for everyone - whilst some people may get a large survival benefit, others may get very little or no benefit.
         All patients are at risk of the harmful side effects of treatment. Particularly in older men or men with other long-term conditions,
         the overall survival benefits of prostate cancer treatment can be small.  This makes choosing whether
         or not to have radical treatment a difficult and personal choice.
         Predict Prostate tries to give the 'best guess' at the sort of benefits treatment might give a particular patient. This can help inform a personal decision on whether to go for immediate treatment or not.
         Potential survival benefits can then be weighed against the possible harms from treatment."]))
       (hr)
       (faq-item (ttt [:faqs/q7 "What about MRI?"])
         (ttt [:faqs/a7-text1 "Magnetic Resonance Imaging (MRI) is increasingly being used in prostate cancer diagnosis. The data used for this model were from men diagnosed between 2000 and 2010 when MRI was rarely used,
         and we did not have data on MRI-defined lesions, imaging scores (e.g. PIRADS) or MRI targeted biopsies. However, it is important to note that as yet using MRI data has not been shown to directly improve survival.
         Its main benefit is in reducing the number of men investigated, better staging the cancer and to guide biopsies. Hence, we expect that the current use of MRI will provide a much more accurate assessment of where a man is in terms of disease extent and histological grade at diagnosis.
         This in turn will better inform the prognostic predictions from Predict Prostate (e.g. moving a man from Grade Group 1 to
Grade Group 2 or from Stage T2 to stage T3). If MRI data and imaging scores are shown in the
         future to add independent value as a survival indicator then we will update
         it into a future version of Predict Prostate. We are currently investigating this."]))

       (hr)
       (faq-item (ttt [:faqs/q8 "What if I only had biopsies of the suspicious area seen on my MRI?"])
         (ttt [:faqs/a8-text1 "Predict Prostate is built around data from men who had biopsies taken from different anatomical parts of their prostate, known as 'systematic biopsies'.
         It also allows additional 'targeted biopsies' from lesions seen on MRI to be incorporated  into the model. A small number of hospitals may
         however only take biopsies from parts of the prostate that look suspicious on MRI. In this circumstance, you should select ‘No’ to
         whether biopsy data is available as using only the figures from 'targeted' biopsies may lead to much less reliable estimates.
         By reporting that biopsy data is unavailable, the average values will be used, which may make the estimates slightly less personalised. "]))

       (hr)
       (faq-item (ttt [:faqs/q9 "What about if my biopsies show Intraductal and/or cribriform pattern"])
         (ttt [:faqs/a9-text1 "These features are considered aggressive variants of prostate cancer and are most commonly associated with high grade group disease. The presence of these variants with lower grade disease (Grade Group1 or Grade Group 2) suggest they will behave more aggressively than expected. The presence of these variants with higher Grade disease is thought to confer a poorer outcome but as yet there is no different treatment offered in addition to standard radical therapy. Predict Prostate did not have data on these variants and hence the estimates for conservative versus radical therapy should be interpreted with extreme caution. Current opinion suggest that conservative management should not be a recommended option for men whose biopsies have these histological features."])
         [:br]
         (ttt [:faqs/a9-text2 "Please see these research articles and commentaries"])
         [:br]
         [:ol
          [:li {:style {:font-size 16}}
           (ttt [:faqs/a9-text3 "Kweldam CF et al. Disease-specific survival of patients with invasive cribriform and intraductal prostate cancer at diagnostic biopsy. Mod Pathol. 2016 Jun;29(6):630-6."])]
          [:li {:style {:font-size 16}}
           (ttt [:faqs/a9-text4 "Samaratunga H, et al. Intraductal carcinoma of the prostate is an aggressive form of invasive carcinoma and should be graded. Pathology. 2020 Feb;52(2):192-196."])]
          [:li {:style {:font-size 16}}
           (ttt [:faqs/a9-text5 "Epstein JI. Is There Enough Support for a New Prostate Grading System Factoring in Intraductal Carcinoma and Cribriform Cancer? Eur Urol. 2020 Feb;77(2):199-200."])]]
         )

       (hr)
       (faq-item (ttt [:faqs/q10 "What if I never had any prostate biopsies and my prostate cancer was diagnosed incidentally by an operation to help me urinate (such as by 'trans-urethral resection of the prostate 'TURP' or 'HoLeP')?"])
         (ttt [:faqs/a10-text1 "Predict Prostate should not be used in this situation. We suggest you speak to your health care provider. "]))
       (hr)
       (faq-item (ttt [:faqs/q11 "What about other treatments?"])
         (ttt [:faqs/a11-text1 "Predict Prostate focuses on whole gland or radical treatment (radical prostatectomy or radiotherapy) compared to conservative management (including active surveillance or watchful waiting).
         Other treatments (e.g. partial or focal treatments) have not been considered by this model as there is little or no long-term comparative data of the treatment against conservative management.
         Your own prostate cancer specialist should be able to advise you how effective another treatment type is. "]))

       (hr)
       (faq-item (ttt [:faqs/q12 "What about metastatic cancer?"])
         (ttt [:faqs/a12-text1 "Predict Prostate must not to be used in men with any evidence of disease outside (or metastatic) the prostate."]))
       #_(hr)
       #_(faq-item "What about HGPIN?"
           "The calculations in Predict Prostate are only for men who have been diagnosed with primary prostate cancer.
           These are not for use by men with HGPIN (high grade prostatic intra-epithelial neoplasia).")
       (hr)
       (faq-item (ttt [:faqs/q13 "Does Predict Prostate account for different types of surgery or radiotherapy?"])
         (ttt [:faqs/a13-text1 "No. Predict Prostate does not attempt to differentiate between surgery and radiotherapy, nor between different surgical or radiotherapy techniques.
         Please see other publications or speak to your specialist about any impact of surgical or radiotherapy approach on treatment survival benefits. "]))
       (hr)
       (faq-item (ttt [:faqs/q14 "What about side effects?"])
         (ttt [:faqs/a14-text1 "Information about potential treatment side effects, or harms, is on the 'Predict Prostate Tool' page.
         Please note that these are not individualised to your personal details but are taken from the studies reported in the text.
         We have used data from recent peer-reviewed publications to derive these values, and where possible, from randomised trials.
         You should also speak to your specialist or you can look at the UK National Prostate Cancer Audit patient
         reported outcomes for additional information and guidance. "])
         [:span (ttt [:faqs/a14-text2 "Charities such as"]) " "
          [:a {:href   "https://prostatecanceruk.org/"
               :rel    "noopener"
               :style  {:text-decoration "underline"}
               :target "_blank"} (ttt [:faqs/a14-text3 "Prostate Cancer UK."])] " " (ttt [:faqs/a14-text4 "and"]) " "
          [:a {:href   "https://www.macmillan.org.uk/information-and-support/prostate-cancer/"
               :rel    "noopener"
               :style  {:text-decoration "underline"}
               :target "_blank"} (ttt [:faqs/a14-text5 "Macmillan"])] " " (ttt [:faqs/a14-text6 "can also provide useful information on the side
               effects of each treatment."])])
       (hr)
       (faq-item (ttt [:faqs/q15 "Who developed the Predict Prostate programme?"])
         [:span (ttt [:faqs/a15-text1 "See"]) " " [:a {:href     "#"
                                                       :on-click #(publish route-change [:about {:page :overview :section :whobuiltpredict}])} (ttt [:about/wbpp-title "Who built Predict Prostate?."])]]
         #_"Predict Prostate has been developed by a partnership between the Academic Urology Group and the Department of Cancer Epidemiology at the University of Cambridge
      in collaboration with the National Cancer Registration and Analysis Service (NCRAS) at Public Health England")

       (hr)
       (faq-item (ttt [:faqs/q16 "How was the computer programme developed?"])
         [:span (ttt [:faqs/a16-text1 "See"]) " " [:a {:href     "#"
                                                       :on-click #(publish route-change [:about {:page :overview :section :whobuiltpredict}])} (ttt [:about/wbpp-title "Who built Predict Prostate?."])]]
         #_[:span "The team used information held by the National Cancer Registration and Analysis Service, part of Public Health England."
            [:a {:href  "http://www.ncin.org.uk/collecting_and_using_data/national_cancer_data_repository/"
                 :rel   "noopener"
                 :style {:text-decoration "underline"}}
             "National Cancer Registration and Analysis Service"]
            " on over 7000 men diagnosed with prostate cancer between 2000 and 2010.
             Using this information they were able to see how individual factors affected survival at ten years and
             fifteen years after diagnosis."])

       (hr)
       (faq-item (ttt [:faqs/q17 "Who designed the website?"])
         [:span (ttt [:faqs/a17-text1 "The website has been built by the"]) " "
          [:a {:href  "https://wintoncentre.maths.cam.ac.uk"
               :rel   "noopener"
               :style {:text-decoration "underline"}} "Winton Centre for Risk & Evidence Communication"] " " 
          (ttt [:faqs/a17-text2 "at the University of Cambridge. The site functionality and visualisation software is trademarked by the Winton Centre as
                 4U2C. However, we are happy for others to use it for similar purposes. Do contact us to discuss this at"]) " "
          [:a {:href "mailto:wintoncentre@maths.cam.ac.uk" :rel "noopener"} "wintoncentre@maths.cam.ac.uk"] "."])

       (hr)
       (faq-item (ttt [:faqs/q18 "Where can I find more information on prostate cancer?"])
         (ttt [:faqs/a18-text1 "There is a great deal of information on prostate cancer on the web. One of best and most reliable
         sources is Cancer Research UK, along with those from Macmillan and Prostate Cancer UK. Their information is written by experts, is up to date and in a style
         that is easy to understand."]))
       ]]

     [:section#contact "Contact"
      [:section (ttt [:contact/title "Contact"])
       [:p "National Cancer Registration and Analysis Service" [:br] "East Regional Office, Victoria House, Capital Park,
     Fulbourn, Cambridge CB21 5XB, UK" [:br] (ttt [:contact/email "Email:"]) " " [:a {:href "mailto:prostate@predict.nhs.uk"} "prostate@predict.nhs.uk"]]]]

     [:section#legal-preamble "Preamble"
      [:p.screen-only {:key   0
                       :style {:margin "40px 20px 20px" :font-size "20px"}} (ttt [:pream/reco-title "We recommend that patients use this tool in consultation with their
    doctor."])]
      [:p.print-only {:key 1} (ttt [:pream/reco-text1 "Predict Prostate is a tool that helps show what impact radical treatment might have on survival rates after prostate cancer diagnosis compared to conservative management (monitoring).
    This print out shows what characteristics of the patient and cancer were entered, and how different management would be expected to affect survival
    rates up to 15 years after diagnosis. This is based on data from similar men in the past, but remains a 'best guess' or estimate. Treatments often have side effects as well as benefits, and it is important to
    consider these as well when making treatment choices. We recommend visiting the sites of charities such as Macmillan and Prostate Cancer UK for details about side effects."])]]

     [:section#product "Predict: Prostate Cancer"
      [:section "Predict: Prostate Cancer"                  ;"Predict: Prostate Cancer"

       [:.row {:style {:border     "1px solid #CCC"
                       :margin-top 20
                       :padding    "20px 20px 20px 20px"}}
        [:.col-sm-12
         [:.row {:style {:margin-bottom 10}}
          [:.col-sm-1 [:img {:src "/assets/ce.png" :alt "CE mark" :width 50}]]
          [:.col-sm-10.col-sm-offset-1
           [:p "The Winton Centre for Risk and Evidence Communication"]
           ]]
         [:.row {:style {:margin-bottom 10}}
          [:.col-sm-1 [:img {:src "/assets/ref.png" :alt "REF mark" :width 50}]]
          [:.col-sm-10.col-sm-offset-1 [:p "Predict: Prostate Cancer"]]]
         [:.row {:style {:margin-bottom 10}}
          [:.col-sm-1 [:img {:src "/assets/lot.png" :alt "LOT mark" :width 50}]]
          [:.col-sm-10.col-sm-offset-1
           [:p (ttt [:prod-label/version "Version"]) (str " " major)
            ", " (ttt [:prod-label/release "Release"]) (str " " minor)]]]
         [:.row {:style {:margin-bottom 10}}
          [:.col-sm-1 [:img {:src "/assets/book.png" :alt "Instructions for Use" :width 50}]]
          [:.col-sm-10.col-sm-offset-1 [:p (ttt [:legal/lot-1 "Refer to "])
                                        [:a {:on-click #(navigate-to [:about {:page :overview :section :overview}])
                                             :style    {:color           "black"
                                                        :text-decoration "underline"
                                                        :cursor          "pointer"}}
                                         (ttt [:navbar/about "About Predict"])]
                                        (ttt [:legal/lot-2 " for instructions before use"])
                                        ]]]

         [:.row {:style {:margin-bottom 10}}
          [:.col-sm-1 [:img {:src "/assets/factory.png" :alt "Manufacturer" :width 50}]]
          [:.col-sm-10.col-sm-offset-1 [:p "The Winton Centre for Risk & Evidence Communication, Centre for Mathematical Sciences, Wilberforce Road, Cambridge. CB3 0WA"]]]]
        [:.col-sm-12
         [:p (ttt [:prod-label/fulfils "This device fulfils the provisions of the European Commission (EC) Directive 93/42/EEC (Medical Devices Directive)."])]
         [:p (ttt [:prod-label/conformance "This software product has been designed according to"])]
         [:ul
          [:li
           [:p [:b "ISO 13485:2016"]]
           [:p {:style {:margin-top -10}} (ttt [:prod-label/qms "Medical devices - Quality management systems - Requirements for regulatory purposes."])]]
          [:li [:p [:b "ISO 14971:2012"]]
           [:p {:style {:margin-top -10}} (ttt [:prod-label/rm "Medical Devices - Application of risk management to medical devices."])]]
          [:li [:p [:b "IEC/TR 80002-1:2009"]]
           [:p {:style {:margin-top -10}} (ttt [:prod-label/sw "Medical device software – Part 1: Guidance on the application of ISO 14971 to medical device software."])]]
          [:li [:p [:b "DCB0129:2018"]]
           [:p {:style {:margin-top -10}} (ttt [:prod-label/safety "Application of clinical safety risk management to the manufacture of health IT systems."])]]
          [:li [:p [:b "IEC 62304:2006 Amd 1:2015"]]
           [:p {:style {:margin-top -10}} (ttt [:prod-label/slc "Medical device software – Software lifecycle processes.\n\nBS EN 62366-1:2015\n\nApplication of usability engineering to medical devices."])]]]
         [:p (ttt [:prod-label/strict "This device has been developed under the strict quality system of The Winton Centre for Risk & Evidence Communication, and released for publication by Public Health England."])]]
        ]]]

     [:section#disclaimer "Disclaimer"
      [:section (ttt [:disc/title "Disclaimer"])
       [:p (ttt [:disc/text1 "You MUST read the information below before using the tool."])]
       [:p (ttt [:disc/text2 "IMPORTANT NOTICE: Predict Prostate is a prognostic tool for patients diagnosed with non-metastatic prostate cancer who have not yet begun treatment and in whom metastatic disease
      has not been identified.  Please refer to the referenced papers in the model to 
      understand the populations it was derived from and tested. The model assesses the potential benefits of immediate radical treatment 
      (either by radical prostatectomy or radical radiotherapy) versus the option of initial conservative management 
      (including active surveillance or watchful waiting). "])]
       [:p (ttt [:disc/text3 "The model does not preclude the potential need
     for deferred radical treatment after initial conservative management if the disease characteristics change.
     "])]
       [:p (ttt [:disc/text4 "Predict Prostate is designed as a guide to add information
     to standard counselling and personal discussion with a health care professional and cannot replace it.
     All results must be understood in the context of each patient’s specific condition.
     In particular, the model does not adjust for factors such as family history (apart from BRCA status), race, tumour volume or any predisposing genetic factor.
     "])]
       [:p (ttt [:disc/text5 "TERMS OF USE: Results provided by this tool are for informational purposes only and are not intended as a substitute for professional medical advice and counselling.
   Predict Prostate is a reference guide only and cannot replace standard clinical counselling. 
   Please read the referenced papers for the study derivation and context. 
   By accessing and using this tool, you acknowledge and agree to the following terms. 
   "])]
       [:p (ttt [:disc/text6 "Except as otherwise permitted by law, this tool may be accessed and used in line with the disclaimer above or private study or non-commercial research with this notice intact.
   "])]
       [:p (ttt [:disc/text7 "You shall not copy, reproduce, distribute, transmit, broadcast, display, sell, rent, license, or otherwise exploit this tool or any content within in whole or in part for any other purposes
   without the prior written consent of the University of Cambridge, Academic Urology group (contact details can be found in the reference paper). 
   "])]
       [:p (ttt [:disc/text8 "The authors and University of Cambridge do not accept any liability for any errors in the model prediction or outcomes.
   See also the University’s standard terms at http://www.cam.ac.uk/about-this-site/terms-and-conditions. 
   Any links from this tool or any associated text do not imply recommendations or endorsements of products or services. 
   "])]
       [:p (ttt [:disc/text9 "The trademarks of the University of Cambridge and others that appear in this tool are the property of the University of Cambridge or their respective owners.
   You may not use any trademark displayed in the tool without the written permission of the University of Cambridge or the respective owner. 
   Copyright © 2019 University of Cambridge. All rights reserved."])]
       ]]

     [:section#algorithm "Algorithm"
      [:section (ttt [:alg/expl-title "Explanation of the Predict Prostate Algorithm"])


       [:p (ttt [:alg/expl-text1 "The model is based on precise mathematical formulae for the cumulative hazard functions of dying from prostate cancer, and
               dying from other causes. These two process cannot both occur - so the two models are adjusted for these 'competing risks' to provide overall 
               chances of being alive at a certain number of years following diagnosis."])]

       [:p (ttt [:alg/expl-text2 "Further explanation is given in the"]) " "
        [:a {:href (iref "/predict_mathematics_prostate.pdf")} [:i.fa.fa-file-pdf-o {:aria-hidden true}] " " (ttt [:alg/expl-text3 "mathematical description."])]]

       [:.table-responsive
        [:table.table.table-bordered {:style {:max-width 600}}
         [:caption {:style {:color "rgb(104, 104, 104)"}} (ttt [:alg/table1-legend "Table 1: Risk-factor coefficients for Prostate Cancer-Specific Mortality (numbers rounded for table)"])]
         [:thead
          [:tr
           [:th (ttt [:alg/table1-col1 "Risk Factor"])]
           [:th (ttt [:alg/table1-col2 "Logarithm of multiplier of baseline hazard"])]]]
         [:tbody
          [:tr
           [:th (ttt [:alg/table1-r1c1 "Age at diagnosis (years)"])]
           [:td "0.003*((" [:i (ttt [:alg/table1-r1c2 "age"])] "/10)" [:sup "3"] " -341.16) "]]
          [:tr
           [:th (ttt [:alg/table1-r2c1 "PSA at diagnosis (ng/ml)"])]
           [:td "+ 0.186*(ln (" [:i (ttt [:alg/table1-r2c2 "PSA"])] "+1/100)) +1.636"]]
          [:tr
           [:th (ttt [:alg/table1-r3c1 "Grade group"])]
           [:td "+ 0.28 " (ttt [:alg/table1-r3c2-1 "if"]) " " [:i (ttt [:alg/table1-r3c2-2 "grade group"])] " = 2" [:br] "+0.55 " (ttt [:alg/table1-r3c2-3 "if"]) " " [:i (ttt [:alg/table1-r3c2-4 "grade group"])] " = 3" [:br] "+0.74 " (ttt [:alg/table1-r3c2-5 "if"]) " " [:i (ttt [:alg/table1-r3c2-6 "grade group"])] " = 4 " [:br] "+1.37 " (ttt [:alg/table1-r3c2-7 "if"]) " " [:i (ttt [:alg/table1-r3c2-8 "grade group"])] " = 5"]]
          [:tr
           [:th (ttt [:alg/table1-r4c1 "T stage"])]
           [:td "+0.16 " (ttt [:alg/table1-r4c2-1 "if"]) " " [:i (ttt [:alg/table1-r4c2-2 "t stage"])] " = 2" [:br] "+0.40 " (ttt [:alg/table1-r4c2-3 "if"]) " " [:i (ttt [:alg/table1-r4c2-4 "t stage"])] " = 3" [:br] "+0.63 " (ttt [:alg/table1-r4c2-5 "if"]) " " [:i (ttt [:alg/table1-r4c2-6 "t stage"])] " = 4"]]
          [:tr
           [:th (ttt [:alg/table1-r5c1 "Proportion of Positive Cores (PPC)"])]
           [:td "v1.0:" [:br] "-0.62 " (ttt [:alg/table1-r5c2-1 "if"]) " " [:i (ttt [:alg/table1-r5c2-2 "PPC"])] " = <50%" [:br] "+0.58 " (ttt [:alg/table1-r5c2-3 "if"]) " " [:i (ttt [:alg/table1-r5c2-4 "PPC"])] (ttt [:alg/table1-r5c2-5 "= 50% or greater"]) [:br] "v1.1:" [:br] "+1.890134*(((" [:i (ttt [:alg/table1-r5c2-6 "PPC"])] "+0.1811159)/100)^.5-.649019)"]]
          [:tr
           [:th (ttt [:alg/table1-r6c1 "BRCA"])]
           [:td "+.956 " (ttt [:alg/table1-r6c2-1 "if"]) " " [:i (ttt [:alg/table1-r6c2-2 "BRCA"])] " " (ttt [:alg/table1-r6c2-3 "= Positive"])]]
          [:tr
           [:th (ttt [:alg/table1-r7c1 "Primary treatment"])]
           [:td "-0.68 " (ttt [:alg/table1-r7c2-1 "if"]) " " [:i (ttt [:alg/table1-r7c2-2 "Prc1imary treatment"])] " " (ttt [:alg/table1-r7c2-3 "= radical treatment"])]
           ]]]]

       [:.table-responsive
        [:table.table.table-bordered {:style {:max-width 600}}
         [:caption {:style {:color "rgb(104, 104, 104)"}} (ttt [:alg/table2-legend "Table 2: Risk-factor coefficients for Non Prostate Cancer Mortality (numbers rounded for table)"])]
         [:thead
          [:tr
           [:th (ttt [:alg/table2-col1 "Risk Factor"])]
           [:th (ttt [:alg/table2-col2 "Logarithm of multiplier of baseline hazard"])]]]
         [:tbody
          [:tr
           [:th (ttt [:alg/table2-r1c1 "Age at diagnosis (years)"])]
           [:td "0.12*(" [:i (ttt [:alg/table2-r1c2 "age"])] " - 69.8743)"]]
          [:tr
           [:th (ttt [:alg/table2-r2c1 "Comorbidity"])]
           [:td "+ 0.6382 " (ttt [:alg/table2-r2c2-1 "if"]) " " [:i (ttt [:alg/table2-r2c2-2 "Charlson comorbidity is 1 or more & a hospital admission in the prior 2 years"])]]]
          ]]]]



      [:section (ttt [:alg/impl-title "Implementation of the Algorithm"])
       [:p (ttt [:alg/impl-text1 "The model used to drive this tool is a clojurescript implementation of the 'PREDICT Prostate' model written in Stata 14.
      For consistency across graphical outputs the number of 'deaths due to other causes' within the 'icons' and 'texts' displays have been set to 
      match the number of deaths if 'deaths from prostate cancer were excluded completely' as used in the 'Charts', 'Curves' and 'Table' outputs. This may slightly reduce
      the predicted number of prostate cancer deaths in the 'icons' and 'texts' displays when compared to the published model."])]]]

     [:section#privacy "Privacy"
      [:section (ttt [:priv/site-title "Site Privacy"])
       [:p (ttt [:priv/site-text1 "Information entered into the Predict tool never leaves your local machine. The information entered in
     'Settings' is limited to tool configuration settings and is stored on your local machine."])]]
      [:section (ttt [:priv/cp-title "Cookie Policy"])
       [:p (ttt [:priv/cp-text1 "A cookie is a small amount of data sent to your computer that your web browser stores when you visit some
     websites. Cookies allow a website to recognise a user’s device e.g. computer, mobile phone. "])]
       [:p (ttt [:priv/cp-text2 "The law on website cookies changed on 26 May 2011 and requires that sites state which cookies are being used
     and their purpose. It also makes clear that cookies only be used with your consent. You can find out more
     information about this law by visiting the"]) " " [:a {:href "https://ico.org.uk/for-the-public/online/cookies/" :rel "noopener"} (ttt [:priv/cp-text3 "Information Commissioner’s Office website."])]]
       [:p (ttt [:priv/cp-text4 "In using the Predict website you are implicitly giving consent that cookies may be used, however you may
     disable cookie use, see below for details."])]]
      [:section (ttt [:priv/wc-title "Which cookies does the Predict website use?"])
       [:p (ttt [:priv/wc-text1 "Predict uses Matomo to measure website traffic. All the information collected is anonymous and is
     not used for any other purpose. For more details see the"]) " "
        [:a {:href "https://matomo.org/privacy-policy/" :rel "noopener"} (ttt [:priv/wc-text2 "Matomo privacy policy."])]]
       [:p (ttt [:priv/wc-text3 "The following cookies are used"]) ": "
        [:a {:href "https://help.hotjar.com/hc/en-us/articles/115011789248-Hotjar-Cookie-Information#tracking_code_cookies" :rel "noopener"} (ttt [:priv/wc-text4 "Cookies set by Hotjar"])]]
       #_[:table.table.table-bordered {:style {:max-width "600px" :margin-top "10px" :font-size "16px"}}
        [:thead
         [:tr {:style {:background-color "#005EB4"
                       :color            "white"}}
          [:th (ttt [:priv/wc-table-col1 "Name"])] [:th (ttt [:priv/wc-table-col2 "Details"])] [:th (ttt [:priv/wc-table-col3 "Expires"])]]]
        [:tbody
         #_[:tr
          [:td "_utma"] [:td (ttt [:priv/wc-table-r1c2 "stores each user’s number of visits, time of visit etc."])] [:td (ttt [:priv/wc-table-r1c3 "two years"])]]
         #_[:tr
          [:td "_utmb"] [:td (ttt [:priv/wc-table-r2c2 "checks approximately how long a user stays on the site"])] [:td (ttt [:priv/wc-table-r2c3 "30 minutes"])]]
         #_[:tr
          [:td "_utmc"] [:td (ttt [:priv/wc-table-r3c2 "stores each user’s number of visits"])] [:td (ttt [:priv/wc-table-r3c3 "End of browsing session"])]]
         #_[:tr
          [:td "_utmz"] [:td (ttt [:priv/wc-table-r4c2 "stores where a visitor came from"])] [:td (ttt [:priv/wc-table-r4c3 "two years"])]]
         [:tr
          [:td "_hjDonePolls"] [:td (ttt [:priv/wc-table-r5c2 "Hotjar cookie. This cookie is set once a visitor completes a poll using the Feedback Poll widget. It is used to ensure that the same poll does not re-appear if it has already been filled in."])] [:td (ttt [:priv/wc-table-r5c3 "one year"])]]
         [:tr
          [:td "_hjMinimizedPolls"] [:td (ttt [:priv/wc-table-r6c2 "Hotjar cookie. This cookie is set once a visitor minimizes a Feedback Poll widget. It is used to ensure that the widget stays minimizes when the visitor navigates through the site."])] [:td (ttt [:priv/wc-table-r6c3 "one year"])]]
         ]]
       ]
      [:section (ttt [:priv/dc-title "Can I disable cookies?"])
       [:p (ttt [:priv/dc-text1 "You can opt out of cookies at any time, following the instructions in your browser. These are typically found
     under ‘Tools’ and ‘Options’ (PC) or ‘Preferences’ (Mac) though the details vary from browser to browser."])
        " " (ttt [:priv/dc-text3 "For more details about controlling cookies visit the help pages for the browser that you are using."])]]

      [:section (ttt [:priv/dh-title "Can I disable hotjar?"])
       [:p (ttt [:priv/dh-text1 "Yes you can. Follow this link for up to date instructions:"]) " " [:a {:href "https://www.hotjar.com/legal/compliance/opt-out" :rel "noopener" :target "_blank"} (ttt [:priv/dh-text2 "How to disable Hotjar"])]]
       [:p (ttt [:priv/dpo "The Data Protection Officer for Predict:Prostate Cancer is"]) " "
        [:a {:href "mailto:dpo@admin.cam.ac.uk"} "dpo@admin.cam.ac.uk"]]]]


     ;;;
     ;; Previous version texts
     ;;;
     [:section#patient-information "Patient Information"

      [:section#what-it-does "What is Predict Prostate?"
       [:p "Nothing can ever tell an individual man what is going to happen to him – but we believe that in order to make
    decisions about treatment options it’s important that people are given as much information as is possible about the
    potential effects of each treatment option."]

       #_[:p.emphasise "The web tool is not designed to give clinical advice and all decisions on treatment options must be
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
    in collaboration with the National Cancer Registration and Analysis Service (NCRAS) at Public Health England.
    This work has been supported by funding from The Urology Foundation and The Evelyn Trust.
    
    The model is easy to use following data entry for an individual patient including age, PSA, clinical stage, histological grade or gradegroup, proportion of positive biopsy cores and comorbidity information. 
    Treatment benefits for radical treatment are calculated using observed data within the East of England cohort. Radical prostatectomy and radiotherapy effects are combined as no randomised data has demonstrated a difference in survival. 
    Displays within the 'charts' and 'curves' are designed to display the uncertainty around this treatment benefit, effectively presenting a range in treatment effect from 0-100% reduction in prostate cancer-specific mortality around our calculated survival estimate."]


       [:p "We welcome any feedback you may have about Predict. If you have questions about its development or there are
     features you would like to have added to the model please let us know by emailing us at info@prostate.predict.nhs.uk."]]

      [:section#model-development "Model development"
       [:p "The model is derived from 7063 men diagnosed in Eastern England between 2000 and 2010.
      Prostate cancer-specific and non-prostate cancer mortality models were constructed using Cox proportional hazards and fractional polynomials, adjusting for known prognostic factors. 
      Further information about the model is available in abstracts presented at the European Association of Urology and American Urological Association conferences 2018.  "]]

      [:section#model-validation "Model validation"
       [:p "The model has been validated amongst a randomly selected cohort of 3026 different men from the Eastern England cohort.
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
       [:div {:key 0 :style {:padding-left 10}}
        [:p.emphasise {:style {:margin-top "10px"}}
         [:strong (ttt [:tool/use-reco-1 "We recommend that patients use this tool in consultation with their doctor."])
          [:br] (ttt [:tool/use-reco-2 "This tool is only for use in men without metastatic disease where conservative management and radical treatment are both options being considered."])]]]]

      [:section#tool-preamble-2 "Preamble 2"
       [[:p.emphasise {:key 1 :style {:border "none"}} "Complete the section below, then select from the treatment options to
     see how they impact on survival rates. Click on the information buttons to see an explanation of each field."]]]

      #_[:section#tool-postamble "Postamble"
         [:section#dummy ""
          [:h3 "Important"]
          [:p "These results are estimates based on data from men with similar characteristics.
     There are other important factors which affect outcomes. Your specialist will help you put these
     results in context."]]]

      [:section#tool-postamble "Postamble"
       [:section#dummy ""
        [:h3 (ttt [:res/imp-title "Important"])]
        [:p (ttt [:res/imp-text1 "These results are estimates based on data from men with similar characteristics.
     There are other important factors which affect outcomes. Your specialist will help you put these
     results in context."])]
        #_[:h3 "Side effects"]
        #_[:p "The treatments listed above can have side effects which should be taken into account when choosing a treatment
      regime. See " [:a {:role "button" :on-click #(navigate-to [:about {:page :faqs}])} "the FAQ 'Looking for advice?'"] " for websites providing excellent advice and information on these treatments and their potential
      side effects:"]]]

      ; Warning to appear in side box whenever grade group is high
      [:section#high-grade-group-warning "Warning"
       [:section#dummy ""
        [:h4 {:style {:margin-top 50}}
         [:i.fa.fa-exclamation-triangle {:style {:padding-right 10 :color "orange"}}] (ttt [:res/warhr-title "Warning"])]
        [:p (ttt [:res/warhr-text1 "You are running the tool with high risk features in which it has been less well tested."])]]]

      ; Warning to appear in side box whenever metastases are unknown
      [:section#metastasis-warning "Warning"
       [:section#dummy ""
        [:h4 {:style {:margin-top 50}}
         [:i.fa.fa-exclamation-triangle {:style {:padding-right 10 :color "orange"}}] (ttt [:res/warmeta-title "Warning"])]
        [:p (ttt [:res/warmeta-text1 "This tool is only for use in men without metastatic disease. "])]
        ]]

      [:section#scroll-down-for (ttt [:res/scr-title "Scroll down"])
       [:section#dummy ""
        [:h4.screen-only {:style {:margin-top 50}}
         [:i.fa.fa-arrow-down {:aria-hidden "true" :style {:padding-right 10}}]
         (ttt [:res/scr-text1 "Scroll down for potential harms"])
         ]]]


      [:section#age (ttt [:tool/age-title "Age"])
       [:p (ttt [:tool/age-text1 "The age when the cancer was diagnosed."])]

       [:p [:i (ttt [:tool/age-text2 "Either type in the number or use the '+' or '-' buttons to adjust it. You can also use the up and down
     arrow keys to step by 1. Hold a key down for repeated steps. The model only works for ages 35-95."])]]]

      [:section#ethnicity (ttt [:tool/eth-title "Ethnicity"]) (ethnicity-text ttt)]

      [:section#psa (ttt [:tool/psa-title "PSA"])
       [:p (ttt [:tool/psa-text1 "PSA (prostate-specific antigen) level at the time of diagnosis - i.e prior to biopsy or any treatment."])]]

      [:section#size (ttt [:tool/size-title "Size"])
       [:p (ttt [:tool/size-text1 "The approximate size of the tumour in millimetres."])]]

      [:section#t-stage (ttt [:tool/stage-title "Clinical stage"])
       [:p (ttt [:tool/stage-text1 "The clinical tumour stage according to the TNM classification. This relates to how the prostate feels on
     examination. Select T-stage 1, 2, 3, or 4."])]
       [:p (ttt [:tool/stage-text2 "The model does not differentiate between sub-classifications such as T2b and T2c. It is currently untested as
     to how MRI based staging changes prognostic predictions. The highest known stage is recommended to be used for the
     Predict Prostate model (from any modality). Please see the"]) " " (page-link [:about {:page :faqs}] (ttt [:tool/stage-text3 "FAQ section."]))]
       ]

      [:section#histological-grade-group (ttt [:tool/histo-title "Histological grade group"])
       [:p (ttt [:tool/histo-text1 "The highest reported grade group from the diagnostic prostate biopsies. If this is not known, the highest
     reported Gleason score can be entered
      and the grade group will be completed automatically. "])]
       [:p [:b (ttt [:tool/histo-text2 "Intraductal and cribriform pattern"])] " - " (ttt [:tool/histo-text3 "These features if present are associated with more aggressive disease
     behaviour. However, how they affect overall survival and prognosis, independent of other clinic-pathological
     features remains unclear (see the"]) " " (page-link [:about {:page :faqs}] (ttt [:tool/histo-text4 "FAQ section"])) "). " (ttt [:tool/histo-text5 "Predict Prostate estimates
     should be used with extreme caution in this context.
     It is suggested that Grade Group 1 or Grade Group 2 disease with either of these features should be consider a
     higher-grade category (at least Grade Group 3). Conservative management should not be a recommended option."])]]

      [:section#gleason-score (ttt [:tool/gleason-title "Gleason score"])
       [:p (ttt [:tool/gleason-text1 "The highest reported Gleason grade found in any of the diagnostic prostate biopsies."])]]

      [:section#biopsy (ttt [:tool/biopsy-title "Biopsy data available?"])
       [:p (ttt [:tool/biopsy-text1 "If information on the number of biopsy cores taken, and the number that were positive is known, select 'yes'.
      If this information is not known, or if biopsy cores were ONLY taken from target lesions select 'no'."])]]

      [:section#number-of-biopsy-cores-taken (ttt [:tool/nbcores-title "Biopsy cores taken"])
       [:p (ttt [:tool/nbcores-text1 "The total number of biopsy cores taken. Extra biopsies taken from each target site should be considered as 1
     core, regardless of how many biopsy cores were
      taken from that target. *See examples*"])]]

      [:section#number-of-biopsy-cores-with-prostate-cancer (ttt [:tool/nbcanc-title "Biopsy cores with prostate cancer"])
       [:p (ttt [:tool/nbcanc-text1 "The total number of positive biopsy cores. Even cores with a lower grade should be counted here, if they have
      any prostate cancer within them.
      Positive cores taken from a single target site should be considered as 1 core, regardless of how many positive
      cores were taken from that target *See examples*."])]]

      [:section#h-admissions (ttt [:tool/hosp-title "Hospital admissions in the last 2 years"])
       [:p (ttt [:tool/hosp-text1 "This refers to any inpatient admission to hospital in the 2 years before prostate cancer diagnosis. Anything
     related to the prostate cancer diagnosis itself or any previous prostate investigations, such as for a prostate
     biopsy, should be ignored."])]]

      [:section#brca (ttt [:tool/brca-title "BRCA gene variant"])
       [:p (ttt [:tool/brca-text1 "Enter 'positive' if you have been tested positive for the BRCA gene variant. If unknown, select 'Negative or
     Untested.'"])]]


      [:section#intraductal (ttt [:tool/intra-title "Intraductal and cribriform pattern"])
       [:p (ttt [:tool/intra-text1 "These features if present are associated with more aggressive disease behaviour. Conservative management
       should not be a recommended option. see the"]) " " (page-link [:about {:page :faqs}] (ttt [:tool/intra-text2 "FAQ section"]))]]

      [:section#metastasis (ttt [:tool/meta-title "Metastases"])
       [:p (ttt [:tool/meta-text1 "This tool is only for use in men without metastatic disease. Metastasis is when the cancer is known to have
     spread e.g. to the bone or lymph nodes. This is typically detected on a bone scan or a CT/MRI scan."])]]

      [:section#comorb (ttt [:tool/comorb-title "Comorbidity"])
       [:h5 (ttt [:tool/comorb-text1 "Select yes if there is a history of any of the following conditions:"])]
       [:ul
        [:li (ttt [:tool/comorb-dis1 "Myocardial infarction"])]
        [:li (ttt [:tool/comorb-dis2 "Congestive heart failure"])]
        [:li (ttt [:tool/comorb-dis3 "Peripheral vascular disease (or an aortic aneurysm >= 6 cm)"])]
        [:li (ttt [:tool/comorb-dis4 "Cerebrovascular disease (Stroke or TIA)"])]
        [:li (ttt [:tool/comorb-dis5 "Dementia"])]
        [:li (ttt [:tool/comorb-dis6 "Chronic pulmonary disease"])]
        [:li (ttt [:tool/comorb-dis7 "Connective tissue disease"])]
        [:li (ttt [:tool/comorb-dis8 "Peptic ulcer disease"])]
        [:li (ttt [:tool/comorb-dis9 "Liver disease"])]
        [:li (ttt [:tool/comorb-dis10 "Diabetes requiring medication or insulin. (Diet-controlled diabetes alone is not counted)"])]
        [:li (ttt [:tool/comorb-dis11 "Hemiplegia"])]
        [:li (ttt [:tool/comorb-dis12 "Moderate or severe chronic kidney disease"])]
        [:li (ttt [:tool/comorb-dis13 "Cancer (EXCLUDING THIS PROSTATE CANCER and excluding any cancer diagnosed more than five years ago)"])]
        [:li (ttt [:tool/comorb-dis14 "Leukemia (acute or chronic)"])]
        [:li (ttt [:tool/comorb-dis15 "Lymphoma"])]
        [:li (ttt [:tool/comorb-dis16 "AIDS."])]]]

      [:section#biopsy-examples (ttt [:tool/bio-ex-title "Biopsy examples"])
       [:h4 (ttt [:tool/bio-ex-text1 "Examples of how to deal with targeted biopsies:"])]
       [:div {:style {:margin-left 20 :margin-right 20}}
        [:p (ttt [:tool/bio-ex-text2 "2 biopsy cores from 1 target, of which both were negative = 1 additional core taken and 0 additional cores
      with cancer "])]
        [:p (ttt [:tool/bio-ex-text3 "3 biopsy cores from 1 target, of which 2 were positive = 1 additional core taken and 1 additional core with
      cancer "])]
        [:p (ttt [:tool/bio-ex-text4 "2 biopsy cores, 1 taken from each of 2 different targets, both of which were positive = 2 additional cores
      taken and 2 additional cores with cancer "])]]]


      [:section#surgery (ttt [:tool/trec-title "Treatments already received"])
       [:p (ttt [:tool/trec-text1 "This tool is useful in helping to decide on additional therapies after any surgery has taken place"])]]

      [:section#regime (ttt [:tool/treg-title "Treatment Regime"])
       [:p (ttt [:tool/treg-text1 "Conservative management refers to monitoring or observing the disease, without any upfront active treatment.
      In modern practice this is often referred to as 'active surveillance' which may involve more intensive monitoring. 
      Treatment may be required later if the disease characteristics change during monitoring.
      Radical treatment here refers to radical prostatectomy (surgery) or radical radiotherapy"])]]

      ;; Treatment potential harms

      [:section#side-effects-cm (ttt [:tool/cmngt-title "Conservative Management"])
       [:p (ttt [:tool/cmngt-text1 "'Active Monitoring' was the term used for conservative management within the ProtecT study, where this data is
      from. Men were predominantly monitored by PSA."])]]

      [:section#side-effects-am (ttt [:tool/actmon-title "Active Monitoring"])
       [:p (ttt [:tool/actmon-text1 "'Active Monitoring' was the term used for conservative management within the ProtecT study, where this data is
     from. Men were predominantly monitored by PSA."])]]

      [:section#side-effects-rp (ttt [:tool/radpro-title "Radical Prostatectomy"])
       [:p (ttt [:tool/radpro-text1 "Radical prostatectomy refers to surgical removal of the whole prostate gland, with or without the nearby lymph
     nodes.
      Within this study the majority were performed by an open operation"])]]

      [:section#side-effects-rt (ttt [:tool/radio-title "Radiotherapy"])
       [:p (ttt [:tool/radio-text1 "Radiotherapy in the ProtecT study included combined androgen deprivation therapy for 3-6 months before and
     during external beam radiotherapy at a total dose of 74Gy in37 fractions."])]]

      [:section#nerve-sparing (ttt [:tool/nerspa-title "Nerve-sparing"])
       [:p (ttt [:tool/nerspa-text1 "Nerve-sparing radical prostatectomy"])]]

      [:section#non-nerve-sparing (ttt [:tool/nonnerspa-title "Non-nerve-sparing"])
       [:p (ttt [:tool/nonnerspa-text1 "Non-nerve-sparing radical prostatectomy"])]]
      ;;
      ;; Treatment Options and Results
      ;;

      [:section#show-ranges (ttt [:tool/mored-title "More detail?"])
       [:p (ttt [:tool/mored-text1 "When you say 'Yes' to"]) " " [:b (ttt [:tool/mored-text2 "More detail?"])] ", " (ttt [:tool/mored-text3 "Predict Prostate will display overall survival and
      treatment benefits to 1 decimal place instead of rounding the percentages to the nearest whole number."])]
       [:p (ttt [:tool/mored-text4 "The default values are the best estimate of the benefit. In the more detailed table, a 95% prediction
     interval is added alongside the additional benefit. The true value of the benefit is very unlikely be outside
     this range"])]]]])

  )
