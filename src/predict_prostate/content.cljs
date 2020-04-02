(ns predict-prostate.content
  (:require [predict-prostate.state.run-time :refer [input-widget route-change]]
            [graphics.simple-icons :refer [icon]]
            [pubsub.feeds :refer [publish]]
            [rum.core :as rum]
            [predict-prostate.router :refer [navigate-to iref docroot]]
    ;[predict-prostate.results.sidefx :refer [sidefx-table2]]
            [predict-prostate.results.util :refer [alison-blue-1 alison-blue-2 alison-blue-3]]
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


(def ethnicity-text [:div
                     [:p "If there is no family history or known genetic risk factors (see other sections) then how or
                     if ethnicity affects prognosis is largely unclear. Predict Prostate was built from cohorts of
                     mainly Caucasian men and for this group the model is well-validated. The model has also been
                     tested in a mixed cohort of men of Chinese, Indian and Malay descent and achieves equivalent
                     performance. It has not been tested in men of Afro-Caribbean descent. However recent research
                     has shown that when matched for grade and stage of disease (like for like cancers), men of
                     Afro-Caribbean descent have the same outcomes and prognosis as men of Caucasian origin.
                     Please see these
     research articles: "]
                     [:p [:cite "Dess RT et al. Association of Black Race With Prostate Cancer-Specific and
                     Other-Cause Mortality. JAMA Oncol. 2019 May 23. doi: 10.1001/jamaoncol.2019.0826."]]
                     [:p [:cite "Sridhar G et al. Do African American men have lower survival from prostate
                     cancer compared with White men? A meta-analysis. Am J Mens Health. 2010 Sep;4(3):189-206.
                     doi:10.1177/1557988309353934."]]
                     ])

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

(def content
  "Text for the site"
  [
   [:section#not-found "Oops!"
    [:section#oops "Oops!"
     [:p "We're sorry, but that page doesn't exist on this site."]]]

   [:section#strap-line "Clear data on prostate cancer treatment outcomes"]

   ;
   ; Home page texts
   ;

   ; block 1
   [:section#home-strap-line "What is Predict Prostate for?"

    [:p {:key 1} "An individualised prognostic model for men newly diagnosed with non-metastatic prostate cancer"]
    [:p {:key 3} ""]
    ]

   ; block 1
   [:section#home-what-is "What is Predict Prostate for?"
    [:p {:key 1} "Predict Prostate is a tool where the outcomes from conservative management (or monitoring) are
    compared with radical treatment (surgery or radiotherapy)."]
    [:p {:key 2} ""]
    ]

   ; block 2
   [:section#home-how-use "How do I use Predict Prostate?"
    [:p {:key 2} "Enter the details about yourself and your prostate cancer, and then select conservative management
    or radical treatment to see estimates of survival with each."]
    [:p {:key 3} "We recommend patients read the "
     [:a {:key 1 :href "#" :on-click #(publish route-change [:about {:page :overview :section :overview}])}
      "About Predict"]
     [:span {:key 2 :style {:font-size "16px"}} " section before using the tool. Predict Prostate is only intended for
     use amongst men
     for whom both conservative management and radical treatment could both be appropriate options"]]]
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
   [:section#home-what-tell "What will Predict Prostate tell me?"
    [:p {:key 4} "The Predict Prostate tool shows you how different initial management strategies affect the percentage
    of men that survive ten and fifteen years after diagnosis. Non-individualised data is also shown on the potential
    harms of each treatment type."]]

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
    [:section "Overview"

     [:ul {:style {:list-style-image "url(/assets/bullet-plus.png)"}}
      [:li (page-link [:about {:page :overview :section :whoisitfor}] "Who is it for?")]
      [:li (page-link [:about {:page :overview :section :howpredictworks}] "How Predict Prostate works")]
      [:li (page-link [:about {:page :overview :section :whobuiltpredict}] "Who built Predict Prostate?")]
      ]

     [:section
      [:p
       ""]]
     ]]

   [:section#whoisitfor "Who is it for?"
    [:section "Who is it for?"
     [:p "The tool is intended for men with non-metastatic prostate cancer who are deciding between conservative and
     radical management regimes. The tool is not for use in cases where prostate cancer has spread beyond the prostate.
     The tool is also less well tested and likely to be less reliable in men with very high PSA, high grade group or
     high stage
     as very few men with these characteristics were managed with conservative management in our development or
     validation data.  "]

     [:p "Nothing can ever tell an individual man exactly what is going to happen to him in the future but this tool
     will provide a realistic estimate or ‘best guess’ about the potential survival benefits of different treatment
     options."]

     [:p.emphasise "The web tool is not designed to give clinical advice and all decisions on treatment options must be
    made in consultation between the patient and a qualified doctor."]
     (hr)]]

   [:section#howpredictworks "How Predict Prostate works"
    [:section "How Predict Prostate works"
     [:p "The estimates that Predict Prostate produces are based on observational data from thousands of men previously
     diagnosed with non-metastatic prostate cancer from the East of England, UK. It provides the average survival rate
     for men in the past of similar age and with similar characteristics."]
     [:p "These data were then used to help produce estimates of the potential outcomes for men who have prostate cancer
     now, depending on characteristics about them and their tumour. The model has also been tested among men diagnosed
     with prostate cancer in Singapore.
     It has been checked to make sure that the estimates it produces are as accurate as they can be given current
     nowledge. It is important to note that the model can only give an estimate of what may happen and cannot say with
     certainty whether an individual patient will survive their cancer or not."]
     [:p (page-link [:about {:page :technical :section :technical}] "The technical section") " has more detail on how
     Predict Prostate was developed and tested."]
     (hr)
     ]]


   [:section#whobuiltpredict "Who built Predict Prostate?"
    [:section "Who built Predict Prostate?"

     [:p "Predict Prostate has been developed by a partnership between the "
      [:a {:href   "https://surgery.medschl.cam.ac.uk/divisions-and-groups/academic-urology-group/"
           :rel    "noopener"
           :style  {:text-decoration "underline"}
           :target "_blank"} "Academic Urology Group"] " and the "
      [:a {:href   "https://ccge.medschl.cam.ac.uk/"
           :rel    "noopener"
           :style  {:text-decoration "underline"}
           :target "_blank"} "Centre for Cancer Genetic Epidemiology"]
      " at the University of Cambridge"
      " in collaboration with the National Cancer Registration and Analysis Service (NCRAS) at Public Health England.
      This work has been supported by funding from "
      [:a {:href   "https://www.theurologyfoundation.org/"
           :rel    "noopener"
           :style  {:text-decoration "underline"}
           :target "_blank"} "The Urology Foundation"]
      " and the Evelyn Trust"]


     [:p "The website has been built by the "
      [:a {:href   "https://wintoncentre.maths.cam.ac.uk"
           :rel    "noopener"
           :style  {:text-decoration "underline"}
           :target "_blank"} "Winton Centre for Risk & Evidence Communication"]
      " at the University of Cambridge who are funded by a generous donation from the David and Claudia Harding
      Foundation and the Winton Charitable Foundation."]
     ]]

   [:section#technical "Technical"
    [:section "Technical"

     [:ul {:style {:list-style-image "url(/assets/bullet-plus.png)"}}
      [:li (page-link [:about {:page :technical :section :history}] "Development History")]
      #_[:li (page-link [:about {:page :technical :section :preversions}] "Previous Versions")]
      [:li (page-link [:about {:page :technical :section :publications}] "Publications")]
      [:li (page-link [:about {:page :faqs}] "FAQs")]
      ;[:li (page-link [:about {:page :technical :section :faqs}] "FAQs")]
      ]

     [:p "Click here to " (page-link [:legal {:page :algorithm} nil] "find out more about the algorithm.")]
     #_[:p "See also these papers on " [:a {:href " https://www.nature.com/articles/s41416-019-0569-4" :target "_blank"} "Clinician impact studies "]
      "and " [:a {:href "https://www.eusupplements.europeanurology.com/article/S1569-9056(19)30161-7/pdf"} "International cohorts"]]
     ]]


   [:section#history "Development History"

    [:section "Development History"
     [:p "The original model (v1.0) was derived from cancer registry information on 7,062 men treated in East Anglia
     from 2000-2010. They were followed until 30 September 2016 so that the median length of follow-up was 9.8 years and
     the maximum was 16 years. Mortality models for prostate cancer-specific and non prostate cancer mortality were
     constructed using Cox proportional hazards, adjusted for known prognostic factors. The overall survival estimates
     for an individual patient are based on both of these models, with one adjusted for the other within a competing
     risks framework. Further information is provided from the full paper published in the open access journal "
      [:a {:href   "http://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002758"
           :style  {:text-decoration "underline"}
           :rel    "noopener"
           :target "blank"} "PLoS Medicine, March 2019."]
      ]]

    [:section "Model validation"
     [:p "Predict Prostate was validated using a dataset of another 3,000 prostate cancer patients from the Eastern
     England data and a further 2,546 men from a separate independent dataset from Singapore diagnosed between 1990 and
     2015 and followed up for a median of 5.1 years. Discrimination in these two datasets was 0.84 for prostate cancer
     survival, and 0.77 and 0.76 for overall survival over 15 years maximum follow-up. Further details are available via
     the publication below."]]

    [:section "Model Extension: BRCA status and biopsy reparameterisation (version 1.1)"
     [:p "The web-model was updated in March 2019 to include BRCA status and to model the impact of biopsy core
     involvement continuously."]
     ]


    [:section "Future versions"
     [:p "Predict Prostate will be updated over time as new information and evidence becomes available. The model has
     completed clinician impact studies and is currently undergoing testing in other international cohorts. A "
      [:a {:href   "http://www.isrctn.com/ISRCTN28468474"
           :rel    "noopener"
           :style  {:text-decoration "underline"}
           :target "blank"} "patient study"] " is also underway to assess its potential impact on clinical practice."]
     ]]

   [:section#publications "Publications"
    [:section "Publications"
     [:a {:name "publications"}]
     [:ol

      [:li [:p "Individual prognosis at diagnosis in non-metastatic prostate cancer: Development and external validation
      of the PREDICT Prostate multivariable model by D Thurtle, D Greenberg, LS Lee, H Huang, PD Pharoah,
      VJ Gnanapragasam. PLOS Medicine 2019.  "
            [:a {:href   "http://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002758"
                 :rel    "noopener"
                 :style  {:text-decoration "underline"}
                 :target "_blank"} "Full paper online."]]]
      [:li [:p "Understanding of prognosis in non-metastatic prostate cancer: a randomised comparative study of clinician
       estimates measured against the PREDICT prostate prognostic model by
       David R. Thurtle, Valerie Jenkins, Paul D. Pharoah & Vincent J. Gnanapragasam. "
            [:a {:href   "https://www.nature.com/articles/s41416-019-0569-4"
                 :rel    "noopener"
                 :style  {:text-decoration "underline"}
                 :target "_blank"} "Full paper online."]]]
      [:li [:p "External validation of the PREDICT Prostate tool for prognostication in non-metastatic prostate cancer:
       A study in 69,206 men from prostate cancer data base Sweden by
       Thurtle D, Bratt O, Stattin P, Pharoah P.D, Gnanapragasam V.J. "
            [:a {:href   "https://www.eusupplements.europeanurology.com/article/S1569-9056(19)30161-7/pdf"
                 :rel    "noopener"
                 :style  {:text-decoration "underline"}
                 :target "_blank"} "Read More."]]]]
     ]

    ]

   [:section#faqs "FAQS"
    [:section "FAQs"

     (faq-item "Looking for advice?"
               [:.col-sm-12                                 ; {:style {:margin-top 20}}
                [:h3 "More Information"]
                [:p "The following websites provide excellent advice and information on treatments and their potential harms:"]
                [:h4 "About treatments:"]
                [:ul {:style {:font-size       "120%"
                              :list-style-type "none"}}
                 [:li {:key 1}
                  [:a {:href   "http://www.cancerresearchuk.org/about-cancer/prostate-cancer/treatment"
                       :style  {:text-decoration "underline"}
                       :rel    "noopener"
                       :target "blank"} "Cancer research UK"]]
                 [:li {:key 2}
                  [:a {:href   "https://www.nhs.uk/conditions/prostate-cancer/treatment/"
                       :rel    "noopener"
                       :style  {:text-decoration "underline"}
                       :target "blank"} "NHS"]]]


                [:h4 "About potential harms:"]
                [:ul {:style {:font-size       "120%"
                              :list-style-type "none"}}
                 [:li {:key 3}
                  [:a {:href   "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radical-prostatectomy"
                       :rel    "noopener"
                       :style  {:text-decoration "underline"}
                       :target "blank"} "Radical prostatectomy"]]
                 [:li {:key 4}
                  [:a {:href   "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radiotherapy"
                       :rel    "noopener"
                       :style  {:text-decoration "underline"}
                       :target "blank"} "Radiotherapy"]]
                 ]
                [:h4 "Further advice and support:"]
                [:ul {:style {:font-size       "120%"
                              :list-style-type "none"}}
                 [:li {:key 1}
                  [:a {:href   "http://www.macmillan.org.uk/"
                       :rel    "noopener"
                       :style  {:text-decoration "underline"}
                       :target "_blank"} "Macmillan"]]
                 [:li {:key 2}
                  [:a {:href   "http://prostatecanceruk.org/"
                       :rel    "noopener"
                       :style  {:text-decoration "underline"}
                       :target "_blank"} "Prostate Cancer UK"]]
                 [:li {:key 3}
                  [:a {:href   "https://www.nhs.uk/pages/home.aspx"
                       :rel    "noopener"
                       :style  {:text-decoration "underline"}
                       :target "_blank"} "NHS Choices"]]
                 ]]

               )

     (hr)
     (faq-item "What if I don’t have all the details needed for the input section?"
               "The model requires all boxes on the 'predict tool' page to be completed. If the biopsy details are unknown, 'No'
               can be selected next to 'biopsy data available'. If you select 'No' for this, the Predict Prostate tool will use an average value.
               If BRCA status is unknown 'Negative or Untested' should be selected. Positive for either BRCA1 or BRCA2 is considered as positive for this model.
                     All of the necessary details should be easily available to your prostate cancer specialist.")
     (hr)
     (faq-item "How do I know that Predict Prostate gives the right answers?"
               "Predict Prostate estimates what would be expected to happen to men with similar characteristics based on past data. The findings are based on men diagnosed in the East of England 
               but we have also tested the model on over 2,500 men diagnosed in Singapore. To the best of our knowledge the Predict tool should work equally well 
               for men currently diagnosed. However, Predict Prostate can never say with 100% certainty what will happen to an individual man. Note also that Predict Prostate is likely to be 
               less reliable in higher risk disease, as very few men with these characteristics were managed conservatively in our data. 
               The model is intended for newly diagnosed men where conservative management and radical treatment 
               are both appropriate options. The model also does not preclude the potential need for 
               deferred radical treatment in the future after initial conservative management, if the disease characteristics change. ")
     (hr)
     (faq-item "If the data used is from patients decades ago won't the predictions it gives be out of date?"
               "These predictions are based on patients diagnosed between 2000 and 2010, and include follow-up for up to 16 years.
               In order to carry out long term predictions older data have to be used.  It is possible that outcomes of cancers diagnosed today, and treatments used today
               will be different, but it is impossible to test this.")
     (hr)
     (faq-item "How does my ethnicity affect the predictions from this model"
               ethnicity-text)
     (hr)
     (faq-item "What use are these estimates when as a patient I will either be cured or not?"
               "Treatment does not work the same for everyone - whilst some people may get a large survival benefit, others may get very little or no benefit.
               All patients are at risk of the harmful side effects of treatment. Particularly in older men or men with other long-term conditions, 
               the overall survival benefits of prostate cancer treatment can be small.  This makes choosing whether
               or not to have radical treatment a difficult and personal choice.
               Predict Prostate tries to give the 'best guess' at the sort of benefits treatment might give a particular patient. This can help inform a personal decision on whether to go for immediate treatment or not. 
               Potential survival benefits can then be weighed against the possible harms from treatment.")
     (hr)
     (faq-item "What about MRI?"
               "Magnetic Resonance Imaging (MRI) is increasingly being used in prostate cancer diagnosis. The data used for this model were from men diagnosed between 2000 and 2010 when MRI was rarely used, 
               and we did not have data on MRI-defined lesions, imaging scores (e.g. PIRADS) or MRI targeted biopsies. However, it is important to note that as yet using MRI data has not been shown to directly improve survival. 
               Its main benefit is in reducing the number of men investigated, better staging the cancer and to guide biopsies. Hence, we expect that the current use of MRI will provide a much more accurate assessment of where a man is in terms of disease extent and histological grade at diagnosis. 
               This in turn will better inform the prognostic predictions from Predict Prostate (e.g. moving a man from Grade Group 1 to 
 Grade Group 2 or from Stage T2 to stage T3). If MRI data and imaging scores are shown in the 
               future to add independent value as a survival indicator then we will update 
               it into a future version of Predict Prostate. We are currently investigating this.")

     (hr)
     (faq-item "What if I only had biopsies of the suspicious area seen on my MRI?"
               "Predict Prostate is built around data from men who had biopsies taken from different anatomical parts of their prostate, known as 'systematic biopsies'. 
               It also allows additional 'targeted biopsies' from lesions seen on MRI to be incorporated  into the model. A small number of hospitals may 
               however only take biopsies from parts of the prostate that look suspicious on MRI. In this circumstance, you should select ‘No’ to 
               whether biopsy data is available as using only the figures from 'targeted' biopsies may lead to much less reliable estimates. 
               By reporting that biopsy data is unavailable, the average values will be used, which may make the estimates slightly less personalised. ")

     (hr)
     (faq-item "FAQ - What about if my biopsies show Intraductal and/or cribriform pattern"
               "These features are considered aggressive variants of prostate cancer and are most commonly associated with high grade group disease. The presence of these variants with lower grade disease (Grade Group1 or Grade Group 2) suggest they will behave more aggressively than expected. The presence of these variants with higher Grade disease is thought to confer a poorer outcome but as yet there is no different treatment offered in addition to standard radical therapy. Predict Prostate did not have data on these variants and hence the estimates for conservative versus radical therapy should be interpreted with extreme caution. Current opinion suggest that conservative management should not be a recommended option for men whose biopsies have these histological features."
[:br]
               "Please see these research articles and commentaries"
[:br]
               [:ol
                [:li {:style {:font-size 16}}
                 "Kweldam CF et al. Disease-specific survival of patients with invasive cribriform and intraductal prostate cancer at diagnostic biopsy. Mod Pathol. 2016 Jun;29(6):630-6."]
                [:li {:style {:font-size 16}}
                 "Samaratunga H, et al. Intraductal carcinoma of the prostate is an aggressive form of invasive carcinoma and should be graded. Pathology. 2020 Feb;52(2):192-196."]
                [:li {:style {:font-size 16}}
                 "Epstein JI. Is There Enough Support for a New Prostate Grading System Factoring in Intraductal Carcinoma and Cribriform Cancer? Eur Urol. 2020 Feb;77(2):199-200."]]
               )

     (hr)
     (faq-item "What if I never had any prostate biopsies and my prostate cancer was diagnosed incidentally by an operation to help me urinate (such as by 'trans-urethral resection of the prostate 'TURP' or 'HoLeP')?"
               "Predict Prostate should not be used in this situation. We suggest you speak to your health care provider. ")
     (hr)
     (faq-item "What about other treatments?"
               " Predict Prostate focuses on whole gland or radical treatment (radical prostatectomy or radiotherapy) compared to conservative management (including active surveillance or watchful waiting). 
               Other treatments (e.g. partial or focal treatments) have not been considered by this model as there is little or no long-term comparative data of the treatment against conservative management. 
               Your own prostate cancer specialist should be able to advise you how effective another treatment type is. ")

     (hr)
     (faq-item "What about metastatic cancer?"
               "Predict Prostate must not to be used in men with any evidence of disease outside (or metastatic) the prostate.")
     #_(hr)
     #_(faq-item "What about HGPIN?"
                 "The calculations in Predict Prostate are only for men who have been diagnosed with primary prostate cancer.
                 These are not for use by men with HGPIN (high grade prostatic intra-epithelial neoplasia).")
     (hr)
     (faq-item "Does Predict Prostate account for different types of surgery or radiotherapy?"
               "No. Predict Prostate does not attempt to differentiate between surgery and radiotherapy, nor between different surgical or radiotherapy techniques. 
               Please see other publications or speak to your specialist about any impact of surgical or radiotherapy approach on treatment survival benefits. ")
     (hr)
     (faq-item "What about side effects?"
               "Information about potential treatment side effects, or harms, is on the 'Predict Prostate Tool' page. 
               Please note that these are not individualised to your personal details but are taken from the studies reported in the text. 
               We have used data from recent peer-reviewed publications to derive these values, and where possible, from randomised trials. 
               You should also speak to your specialist or you can look at the UK National Prostate Cancer Audit patient
               reported outcomes for additional information and guidance. "
               [:span "Charities such as "
                [:a {:href   "https://prostatecanceruk.org/"
                     :rel    "noopener"
                     :style  {:text-decoration "underline"}
                     :target "_blank"} "Prostate Cancer UK."] " and "
                [:a {:href   "https://www.macmillan.org.uk/information-and-support/prostate-cancer/"
                     :rel    "noopener"
                     :style  {:text-decoration "underline"}
                     :target "_blank"} "Macmillan."] " can also provide useful information on the side
               effects of each treatment."])
     (hr)
     (faq-item "Who developed the Predict Prostate programme?"
               [:span "See " [:a {:href     "#"
                                  :on-click #(publish route-change [:about {:page :overview :section :whobuiltpredict}])} "Who built Predict Prostate?"] "."]
               #_"Predict Prostate has been developed by a partnership between the Academic Urology Group and the Department of Cancer Epidemiology at the University of Cambridge
      in collaboration with the National Cancer Registration and Analysis Service (NCRAS) at Public Health England")

     (hr)
     (faq-item "How was the computer programme developed?"
               [:span "See " [:a {:href     "#"
                                  :on-click #(publish route-change [:about {:page :overview :section :whobuiltpredict}])} "Who built Predict Prostate?"] "."]
               #_[:span "The team used information held by the National Cancer Registration and Analysis Service, part of Public Health England."
                  [:a {:href  "http://www.ncin.org.uk/collecting_and_using_data/national_cancer_data_repository/"
                       :rel   "noopener"
                       :style {:text-decoration "underline"}}
                   "National Cancer Registration and Analysis Service"]
                  " on over 7000 men diagnosed with prostate cancer between 2000 and 2010.
                   Using this information they were able to see how individual factors affected survival at ten years and
                   fifteen years after diagnosis."])

     (hr)
     (faq-item "Who designed the website?"
               [:span "The website has been built by the "
                [:a {:href  "https://wintoncentre.maths.cam.ac.uk"
                     :rel   "noopener"
                     :style {:text-decoration "underline"}} "Winton Centre for Risk & Evidence Communication"] "
                 at the University of Cambridge. The site functionality and visualisation software is trademarked by the Winton Centre as
                 4U2C. However, we are happy for others to use it for similar purposes. Do contact us to discuss this at "
                [:a {:href "mailto:wintoncentre@maths.cam.ac.uk" :rel "noopener"} "wintoncentre@maths.cam.ac.uk"] "."])

     (hr)
     (faq-item "Where can I find more information on prostate cancer?"
               "There is a great deal of information on prostate cancer on the web. One of best and most reliable
               sources is Cancer Research UK, along with those from Macmillan and Prostate Cancer UK. Their information is written by experts, is up to date and in a style
               that is easy to understand.")
     ]]

   [:section#contact "Contact"
    [:section "Contact"
     [:p "National Cancer Registration and Analysis Service" [:br] "East Regional Office, Victoria House, Capital Park,
     Fulbourn, Cambridge CB21 5XB" [:br] "Email: " [:a {:href "mailto:prostate@predict.nhs.uk"} "prostate@predict.nhs.uk"]]]]

   [:section#legal-preamble "Preamble"
    [:p.screen-only {:key   0
                     :style {:margin "40px 20px 20px" :font-size "20px"}} "We recommend that patients use this tool in consultation with their
    doctor."]
    [:p.print-only {:key 1} "Predict Prostate is a tool that helps show what impact radical treatment might have on survival rates after prostate cancer diagnosis compared to conservative management (monitoring).
    This print out shows what characteristics of the patient and cancer were entered, and how different management would be expected to affect survival
    rates up to 15 years after diagnosis. This is based on data from similar men in the past, but remains a 'best guess' or estimate. Treatments often have side effects as well as benefits, and it is important to
    consider these as well when making treatment choices. We recommend visiting the sites of charities such as Macmillan and Prostate Cancer UK for details about side effects."]]

   [:section#product "Predict: Prostate Cancer"
    [:section "Predict: Prostate Cancer"                    ;"Predict: Prostate Cancer"

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
         [:p (ttt [:prod-label/version "Version"]) " 1.00"
          ", " (ttt [:prod-label/release "Release"]) " 1.04"]]]
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
    [:section "Disclaimer"
     [:p "You MUST read the information below before using the tool"]
     [:p "IMPORTANT NOTICE: Predict Prostate is a prognostic tool for patients diagnosed with non-metastatic prostate cancer who have not yet begun treatment and in whom metastatic disease 
      has not been identified.  Please refer to the referenced papers in the model to 
      understand the populations it was derived from and tested. The model assesses the potential benefits of immediate radical treatment 
      (either by radical prostatectomy or radical radiotherapy) versus the option of initial conservative management 
      (including active surveillance or watchful waiting). "]
     [:p "The model does not preclude the potential need
     for deferred radical treatment after initial conservative management if the disease characteristics change.
     "]
     [:p "Predict Prostate is designed as a guide to add information
     to standard counselling and personal discussion with a health care professional and cannot replace it.
     All results must be understood in the context of each patient’s specific condition.
     In particular, the model does not adjust for factors such as family history (apart from BRCA status), race, tumour volume or any predisposing genetic factor.
     "]
     [:p "TERMS OF USE: Results provided by this tool are for informational purposes only and are not intended as a substitute for professional medical advice and counselling.
   Predict Prostate is a reference guide only and cannot replace standard clinical counselling. 
   Please read the referenced papers for the study derivation and context. 
   By accessing and using this tool, you acknowledge and agree to the following terms. 
   "]
     [:p "Except as otherwise permitted by law, this tool may be accessed and used in line with the disclaimer above or private study or non-commercial research with this notice intact.
   "]
     [:p "You shall not copy, reproduce, distribute, transmit, broadcast, display, sell, rent, license, or otherwise exploit this tool or any content within in whole or in part for any other purposes
   without the prior written consent of the University of Cambridge, Academic Urology group (contact details can be found in the reference paper). 
   "]
     [:p "The authors and University of Cambridge do not accept any liability for any errors in the model prediction or outcomes.
   See also the University’s standard terms at http://www.cam.ac.uk/about-this-site/terms-and-conditions. 
   Any links from this tool or any associated text do not imply recommendations or endorsements of products or services. 
   "]
     [:p "The trademarks of the University of Cambridge and others that appear in this tool are the property of the University of Cambridge or their respective owners.
   You may not use any trademark displayed in the tool without the written permission of the University of Cambridge or the respective owner. 
   Copyright © 2019 University of Cambridge. All rights reserved."]
     ]]

   [:section#algorithm "Algorithm"
    [:section "Explanation of the Predict Prostate Algorithm"


     [:p "The model is based on precise mathematical formulae for the cumulative hazard functions of dying from prostate cancer, and
               dying from other causes. These two process cannot both occur - so the two models are adjusted for these 'competing risks' to provide overall 
               chances of being alive at a certain number of years following diagnosis."]

     [:p "Further explanation is given in the "
      [:a {:href (iref "/predict_mathematics_prostate.pdf")} [:i.fa.fa-file-pdf-o {:aria-hidden true}] " mathematical description"] "."]

     [:.table-responsive
      [:table.table.table-bordered {:style {:max-width 600}}
       [:caption {:style {:color "rgb(104, 104, 104)"}} "Table 1: Risk-factor coefficients for Prostate Cancer-Specific Mortality (numbers rounded for table)"]
       [:thead
        [:tr
         [:th "Risk Factor"]
         [:th "Logarithm of multiplier of baseline hazard"]]]
       [:tbody
        [:tr
         [:th "Age at diagnosis (years)"]
         [:td "0.003*((" [:i "age"] "/10)" [:sup "3"] " -341.16) "]]
        [:tr
         [:th "PSA at diagnosis (ng/ml)"]
         [:td "+ 0.186*(ln (" [:i "PSA"] "+1/100)) +1.636"]]
        [:tr
         [:th "Grade group"]
         [:td "+ 0.28 if " [:i "grade group"] " = 2" [:br] "+0.55 if " [:i "grade group"] " = 3" [:br] "+0.74 if " [:i "grade group"] " = 4 " [:br] "+1.37 if " [:i "grade group"] " = 5"]]
        [:tr
         [:th "T stage"]
         [:td "+0.16 if " [:i "t stage"] " = 2" [:br] "+0.40 if " [:i "t stage"] " = 3" [:br] "+0.63 if " [:i "t stage"] " = 4"]]
        [:tr
         [:th "Proportion of Positive Cores (PPC)"]
         [:td "v1.0:" [:br] "-0.62  if " [:i "PPC"] " = <50%" [:br] "+0.58 if " [:i "PPC"] "= 50% or greater" [:br] "v1.1:" [:br] "+1.890134*(((" [:i "PPC"] "+0.1811159)/100)^.5-.649019)"]]
        [:tr
         [:th "BRCA"]
         [:td "+.956 if " [:i "BRCA"] " = Positive"]]
        [:tr
         [:th "Primary treatment"]
         [:td "-0.68  if " [:i "Primary treatment"] " = radical treatment"]
         ]]]]

     [:.table-responsive
      [:table.table.table-bordered {:style {:max-width 600}}
       [:caption {:style {:color "rgb(104, 104, 104)"}} "Table 2: Risk-factor coefficients for Non Prostate Cancer Mortality (numbers rounded for table)"]
       [:thead
        [:tr
         [:th "Risk Factor"]
         [:th "Logarithm of multiplier of baseline hazard"]]]
       [:tbody
        [:tr
         [:th "Age at diagnosis (years)"]
         [:td "0.12*(" [:i "age"] " - 69.8743)"]]
        [:tr
         [:th "Comorbidity"]
         [:td "+ 0.6382 if " [:i "Charlson comorbidity is 1 or more & a hospital admission in the prior 2 years"]]]
        ]]]]



    [:section "Implementation of the Algorithm"
     [:p "The model used to drive this tool is a clojurescript implementation of the 'PREDICT Prostate' model written in Stata 14. 
      For consistency across graphical outputs the number of 'deaths due to other causes' within the 'icons' and 'texts' displays have been set to 
      match the number of deaths if 'deaths from prostate cancer were excluded completely' as used in the 'Charts', 'Curves' and 'Table' outputs. This may slightly reduce
      the predicted number of prostate cancer deaths in the 'icons' and 'texts' displays when compared to the published model."]]]

   [:section#privacy "Privacy"
    [:section "Site Privacy"
     [:p "Information entered into the Predict tool never leaves your local machine. The information entered in
     'Settings' is limited to tool configuration settings and is stored on your local machine."]]
    [:section "Cookie Policy"
     [:p "A cookie is a small amount of data sent your computer that your web browser stores when you visit some
     websites. Cookies allow a website to recognise a user’s device e.g. computer, mobile phone. "]
     [:p "The law on website cookies changed on 26 May 2011 and requires that sites state which cookies are being used
     and their purpose. It also makes clear that cookies only be used with your consent. You can find out more
     information about this law by visiting the " [:a {:href "https://ico.org.uk/for-the-public/online/cookies/" :rel "noopener"} "Information Commissioner’s Office website."]]
     [:p "In using the Predict website you are implicitly giving consent that cookies may be used, however you may
     disable cookie use, see below for details."]]
    [:section "Which cookies does the Predict website use?"
     [:p "Predict uses Google Analytics to measure website traffic. All the information collected is anonymous and is
     not used for any other purpose. For more details see the "
      [:a {:href "http://www.google.co.uk/intl/en/policies/privacy/" :rel "noopener"} "Google privacy policy."]]
     [:p "The following cookies are used:"]
     [:table.table.table-bordered {:style {:max-width "600px" :margin-top "10px" :font-size "16px"}}
      [:thead
       [:tr {:style {:background-color "#005EB4"
                     :color            "white"}}
        [:th "Name"] [:th "Details"] [:th "Expires"]]]
      [:tbody
       [:tr
        [:td "_utma"] [:td "stores each user’s number of visits, time of visit etc."] [:td "two years"]]
       [:tr
        [:td "_utmb"] [:td "checks approximately how long a user stays on the site"] [:td "30 minutes"]]
       [:tr
        [:td "_utmc"] [:td "stores each user’s number of visits"] [:td "End of browsing session"]]
       [:tr
        [:td "_utmz"] [:td "stores where a visitor came from"] [:td "two years"]]
       [:tr
        [:td "_hjDonePolls"] [:td "Hotjar cookie. This cookie is set once a visitor completes a poll using the Feedback Poll widget. It is used to ensure that the same poll does not re-appear if it has already been filled in."] [:td "one year"]]
       [:tr
        [:td "_hjMinimizedPolls"] [:td "Hotjar cookie. This cookie is set once a visitor minimizes a Feedback Poll widget. It is used to ensure that the widget stays minimizes when the visitor navigates through the site."] [:td "one year"]]
       ]]
     ]
    [:section "Can I disable cookies?"
     [:p "You can opt out of cookies at any time, following the instructions in your browser. These are typically found
     under ‘Tools’ and ‘Options’ (PC) or ‘Preferences’ (Mac) though the details vary from browser to browser.
     Also, Google offers a " [:a {:href "https://tools.google.com/dlpage/gaoptout" :rel "noopener"} "tool that you can use to opt out"]
      " of being tracked by Google Analytics. You can add this plugin to your browser by going to Google.
      For more details about controlling cookies visit the help pages for the browser that you are using."]]

    [:section "Can I disable hotjar?"
     [:p "Yes you can. Follow this link for up to date instructions: " [:a {:href "https://www.hotjar.com/legal/compliance/opt-out" :rel "noopener" :target "_blank"} "How to disable Hotjar"]]
     [:p (ttt [:priv/dpo "The Data Protection Officer for Predict:Prostate Cancer is "])
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
       [:strong "We recommend that patients use this tool in consultation with their doctor."
        [:br] "This tool is only for use in men without metastatic disease where conservative management and radical treatment are both options being considered."]]]]

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
      [:h3 "Important"]
      [:p "These results are estimates based on data from men with similar characteristics.
     There are other important factors which affect outcomes. Your specialist will help you put these
     results in context."]
      #_[:h3 "Side effects"]
      #_[:p "The treatments listed above can have side effects which should be taken into account when choosing a treatment
      regime. See " [:a {:role "button" :on-click #(navigate-to [:about {:page :faqs}])} "the FAQ 'Looking for advice?'"] " for websites providing excellent advice and information on these treatments and their potential
      side effects:"]]]

    ; Warning to appear in side box whenever grade group is high
    [:section#high-grade-group-warning "Warning"
     [:section#dummy ""
      [:h4 {:style {:margin-top 50}}
       [:i.fa.fa-exclamation-triangle {:style {:padding-right 10 :color "orange"}}] "Warning"]
      [:p "You are running the tool with high risk features in which it has been less well tested."]
      ]]

    ; Warning to appear in side box whenever metastases are unknown
    [:section#metastasis-warning "Warning"
     [:section#dummy ""
      [:h4 {:style {:margin-top 50}}
       [:i.fa.fa-exclamation-triangle {:style {:padding-right 10 :color "orange"}}] "Warning"]
      [:p "This tool is only for use in men without metastatic disease. "]
      ]]

    [:section#scroll-down-for "Scroll down"
     [:section#dummy ""
      [:h4.screen-only {:style {:margin-top 50}}
       [:i.fa.fa-arrow-down {:aria-hidden "true" :style {:padding-right 10}}]
       "Scroll down for potential harms"
       ]]]


    [:section#age "Age"
     [:p "The age when the cancer was diagnosed."]

     [:p [:i "Either type in the number or use the '+' or '-' buttons to adjust it. You can also use the up and down
     arrow keys to step by 1. Hold a key down for repeated steps. The model only works for ages 35-95."]]]

    [:section#ethnicity "Ethnicity" ethnicity-text]

    [:section#psa "PSA"
     [:p "PSA (prostate-specific antigen) level at the time of diagnosis - i.e prior to biopsy or any treatment."]]

    [:section#size "Size"
     [:p "The approximate size of the tumour in millimetres."]]

    [:section#t-stage "Clinical stage"
     [:p "The clinical tumour stage according to the TNM classification. This relates to how the prostate feels on
     examination. Select T-stage 1, 2, 3, or 4."]
     [:p "The model does not differentiate between sub-classifications such as T2b and T2c. It is currently untested as
     to how MRI based staging changes prognostic predictions. The highest known stage is recommended to be used for the
     Predict Prostate model (from any modality). Please see the "(page-link [:about {:page :faqs}] "FAQ section.")]
     ]

    [:section#histological-grade-group "Histological grade group"
     [:p "The highest reported grade group from the diagnostic prostate biopsies. If this is not known, the highest
     reported Gleason score can be entered
      and the grade group will be completed automatically. "]
     [:p [:b "Intraductal and cribriform pattern"] " – These features if present are associated with more aggressive disease
     behaviour. However, how they affect overall survival and prognosis, independent of other clinic-pathological
     features remains unclear (see the "(page-link [:about {:page :faqs}] "FAQ section")"). Predict Prostate estimates
     should be used with extreme caution in this context.
     It is suggested that Grade Group 1 or Grade Group 2 disease with either of these features should be consider a
     higher-grade category (at least Grade Group 3). Conservative management should not be a recommended option."]]

    [:section#gleason-score "Gleason score"
     [:p "The highest reported Gleason grade found in any of the diagnostic prostate biopsies."]]

    [:section#biopsy "Biopsy data avaliable?"
     [:p "If information on the number of biopsy cores taken, and the number that were positive is known, select 'yes'. 
      If this information is not known, or if biopsy cores were ONLY taken from target lesions select 'no'."]]

    [:section#number-of-biopsy-cores-taken "Biopsy cores taken"
     [:p "The total number of biopsy cores taken. Extra biopsies taken from each target site should be considered as 1
     core, regardless of how many biopsy cores were
      taken from that target. *See examples*"]]

    [:section#number-of-biopsy-cores-with-prostate-cancer "Biopsy cores with prostate cancer"
     [:p "The total number of positive biopsy cores. Even cores with a lower grade should be counted here, if they have
      any prostate cancer within them.
      Positive cores taken from a single target site should be considered as 1 core, regardless of how many positive
      cores were taken from that target *See examples*."]]

    [:section#h-admissions "Hospital admissions in the last 2 years"
     [:p "This refers to any inpatient admission to hospital in the 2 years before prostate cancer diagnosis. Anything
     related to the prostate cancer diagnosis itself or any previous prostate investigations, such as for a prostate
     biopsy, should be ignored."]]

    [:section#brca "BRCA gene variant"
     [:p "Enter 'positive' if you have been tested positive for the BRCA gene variant. If unknown, select 'Negative or
     Untested.'"]]

    [:section#metastasis "Metastases"
     [:p "This tool is only for use in men without metastatic disease. Metastasis is when the cancer is known to have
     spread e.g. to the bone or lymph nodes. This is typically detected on a bone scan or a CT/MRI scan."]]

    [:section#comorb "Comorbidity"
     [:h5 "Select yes if there is a history of any of the following conditions:"]
     [:ul
      [:li "Myocardial infarction"]
      [:li "Congestive heart failure"]
      [:li "Peripheral vascular disease (or an aortic aneurysm >= 6 cm)"]
      [:li "Cerebrovascular disease (Stroke or TIA)"]
      [:li "Dementia"]
      [:li "Chronic pulmonary disease"]
      [:li "Connective tissue disease"]
      [:li "Peptic ulcer disease"]
      [:li "Liver disease"]
      [:li "Diabetes requiring medication or insulin. (Diet-controlled diabetes alone is not counted)"]
      [:li "Hemiplegia"]
      [:li "Moderate or severe chronic kidney disease"]
      [:li "Cancer (EXCLUDING THIS PROSTATE CANCER and excluding any cancer diagnosed more than five years ago)"]
      [:li "Leukemia (acute or chronic)"]
      [:li "Lymphoma"]
      [:li "AIDS."]]]

    [:section#biopsy-examples "Biopsy examples"
     [:h4 "Examples of how to deal with targeted biopsies:"]
     [:div {:style {:margin-left 20 :margin-right 20}}
      [:p "2 biopsy cores from 1 target, of which both were negative = 1 additional core taken and 0 additional cores
      with cancer "]
      [:p "3 biopsy cores from 1 target, of which 2 were positive = 1 additional core taken and 1 additional core with
      cancer. "]
      [:p "2 biopsy cores, 1 taken from each of 2 different targets, both of which were positive = 2 additional cores
      taken and 2 additional cores with cancer "]]]


    [:section#surgery "Treatments already received"
     [:p "This tool is useful in helping to decide on additional therapies after any surgery has taken place"]]

    [:section#regime "Treatment Regime"
     [:p "Conservative management refers to monitoring or observing the disease, without any upfront active treatment.
      In modern practice this is often referred to as 'active surveillance' which may involve more intensive monitoring. 
      Radical treatment here refers to radical prostatectomy (surgery) or radical radiotherapy"]]

    ;; Treatment potential harms

    [:section#side-effects-cm "Conservative Management"
     [:p "'Active Monitoring' was the term used for conservative management within the ProtecT study, where this data is
      from. Men were predominantly monitored by PSA."]]

    [:section#side-effects-am "Active Monitoring"
     [:p "'Active Monitoring' was the term used for conservative management within the ProtecT study, where this data is
     from. Men were predominantly monitored by PSA."]]

    [:section#side-effects-rp "Radical Prostatectomy"
     [:p "Radical prostatectomy refers to surgical removal of the whole prostate gland, with or without the nearby lymph
     nodes.
      Within this study the majority were performed by an open operation"]]

    [:section#side-effects-rt "Radiotherapy"
     [:p "Radiotherapy in the ProtecT study included combined androgen deprivation therapy for 3-6 months before and
     during external beam radiotherapy at a total dose of 74Gy in37 fractions."]]

    [:section#nerve-sparing "Nerve-sparing"
     [:p "Nerve-sparing radical prostatectomy"]]

    [:section#non-nerve-sparing "Non-nerve-sparing"
     [:p "Non-nerve-sparing radical prostatectomy"]]
    ;;
    ;; Treatment Options and Results
    ;;

    [:section#show-ranges "More detail?"
     [:p "When you say 'Yes' to " [:b "More detail?, "] "Predict Prostate will display overall survival and
      treatment benefits to 1 decimal place instead of rounding the percentages to the nearest whole number."]
     [:p "The default values are the best estimate of the benefit. In the more detailed table, a 95% prediction
     interval is added alongside the additional benefit. The true value of the benefit is very unlikely be outside
     this range"]]]]

  )
