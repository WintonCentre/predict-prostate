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
   [:section#home-what-is "What is Predict Prostate?"
    [:p {:key 1} "Predict is a tool that helps patients and doctors decide on whether to have conservative or radical
    management for nonmetastatic prostate cancer."]
    [:p {:key 2} ""]
    ]

   ; block 2
   [:section#home-how-use "How do I use Predict?"
    [:p {:key 2} "Enter the details about yourself and your prostate cancer, and then select conservative management or radical treatment to see estimates of survival with each."]
    [:p {:key 3} "We recommend patients read the "
     [:a {:key 1 :href "#" :on-click #(publish route-change [:about {:page :overview :section :overview}])} "About Predict"]
     [:span {:key 2 :style {:font-size "16px"}} " section before using the tool. Predict is only intended for use amongst men
     for whom both conservative management and radical treatment could both be appropriate options"]]]
  #_[:div {:key 2 :style {:border-left  "3px solid #005FB1"
                          :padding-left "10px"}}
     [:p "We recommend that patients use this tool with their doctor."]]

  ; block 3
  [:section#home-what-tell "What will Predict tell me?"
   [:p {:key 4} "The Predict tool shows you how different initial management strategies affect the percentage of men that survive ten and fifteen years after diagnosis."]]

  [:section#about-page "About"
   [:section#who (copied "Who developed the Predict programme?")
    [:p (copied "Predict Prostate has been developed by a partnership between the Academic Urology Group and the Department of Cancer Epidemiology at the University of Cambridge
      in collaboration with the National Cancer Registration and Analysis Service (NCRAS) at Public Health England")]]

   [:section#how (copied "How was the computer programme developed?")
    [:p (copied "The team used information held by the Eastern region cancer registry on over 7000 men diagnosed with non-metastatic prostate cancer between 2000 and 2010.
      Using this information they were able to explore how individual factors affected survival over ten and fifteen years")]]

   [:section#where (copied "Where can I find more information on Prostate Cancer?")
    [:p (copied "There is a great deal of information on Prostate Cancer online. One of best and most reliable sources is Cancer
    Research UK. The information is written by experts, is up to date and in a style that is easy to understand.")]]
   ]

  ;;
  ;; about page texts
  ;;
  [:section#overview "Overview"
   [:section "Overview"

    [:ul {:style {:list-style-image "url(/assets/bullet-plus.png)"}}
     [:li (page-link [:about {:page :overview :section :whoisitfor}] "Who is it for?")]
     [:li (page-link [:about {:page :overview :section :howpredictworks}] "How Predict works")]
     [:li (page-link [:about {:page :overview :section :whobuiltpredict}] "Who built Predict")]
     ]

    [:section
     [:p
      "Predict is a tool that helps doctors and patients decide on whether to have conservative or radical
    management for non-metastatic prostate cancer."]]
    ]]

  [:section#whoisitfor "Who is it for?"
   [:section "Who is it for?"
    [:p "The tool is intended for men with non-metastatic prostate cancer who are deciding between conservative and radical management regimes."]

    [:p "The tool is likely to be less reliable in men with any 'high risk' tumour characteristics (PSA>20ng/ml, Grade group 4 or 5, T stage 3 or 4) as very few men
 with these characteristics were managed with conservative management in our development or validation data.  "]

    [:p "Predict only asks for certain information about the cancer. The inputs it asks for are the ones that are
      most helpful in predicting survival rates. "]

    [:p "'Radical treatment' refers to either whole-gland (radical) radiotherapy or radical prostatectomy. Other
   treatments have not been considered by this model. "]

    [:p "Nothing can ever tell an individual man what is going to happen to him – but we believe that in order to make
    decisions about treatment options it’s important that people are given as much information as is possible about the
    potential effects of each treatment option."]

    [:p.emphasise "The web tool is not designed to give clinical advice and all decisions on treatment options must be
    made in consultation between the patient and a qualified doctor."]
    (hr)]]

  [:section#howpredictworks "How Predict works"
   [:section "How Predict works"
    [:p "The estimates that Predict produces are based on observational data from thousands of men from Eastern England, UK."]
    [:p "Predict has been tested to make sure that the estimates it produces are as accurate as they can be given current knowledge."
     "The maths behind the tool is based on data from thousands of men who have been diagnosed with nonmetastatic prostate cancer between 2000 and 2010 in England. These data are used to
   help produce estimates of the potential outcomes for men who have prostate cancer now, depending
   on characteristics about them and their tumour. The model has also been tested among men diagnosed with prostate cancer in Singapore."]
    [:p "Predict produces estimates across groups of patients, it cannot say whether an individual patient will survive their
     cancer or not. It can only provide the average survival rate for people in the past of similar age and with similar characteristics. "]
    [:p (page-link [:about {:page :technical :section :technical}] "The technical section") " has more detail on how Predict was developed and tested."]
    (hr)
    ]]


  [:section#whobuiltpredict "Who built Predict?"
   [:section "Who built Predict?"

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
     " at the University of Cambridge who are funded by a generous donation from the David and Claudia Harding Foundation and the Winton Charitable Foundation."]
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

    [:p "Predict is an online tool designed to help clinicians and patients decide between initial conservative management or radical treatment of nonmetastatic prostate cancer."]
    [:p "The model is easy to use: simply enter data for an individual patient including patient age, PSA, Clinical stage,
     histological grade group/Gleason score, proportion of biopsy cores involved, BRCA status if known, hospital admission history and comorbidity status. It then
     provides a choice of displays describing estimated survival for the next 10 or 15 years. Treatment benefits for radical treatment (either surgery or radiotherapy) are calculated
     by applying the estimated proportional reduction to the mortality rate derived from our observational data. The impact on survival of biopsy core involvement has been informed by additional biopsy data.
     The prognostic significance of the BRCA gene variant has been taken from a separate study - as described below."]
    [:p "Click here to " (page-link [:legal {:page :algorithm} nil] "find out more about the algorithm.")]
    ]]


  [:section#history "Development History"

   [:section "Development History"
    [:p "The original model (v1.0) was derived from cancer registry information on 7,062 men treated in East Anglia from 2000-2010.
      They were followed until 30 September 2016 so that the median length of follow-up was 9.8 years and the maximum was 16 years
      Mortality models for prostate cancer-specific and non prostate cancer mortality were constructed using Cox proportional
     hazards, adjusted for known prognostic factors. The overall survival estimates for an individual patient are based
     on both of these models, with one adjusted for the other within a competing risks framework.
     Further information is provided from a previous abstract presented at the European Association of Urology conference 2018 "
     [:a {:href   "https://www.eusupplements.europeanurology.com/article/S1569-9056(18)31764-0/fulltext"
          :rel    "noopener"
          :target "blank"} "European Urology Supplements March 2018."]
     " and within the full paper which is currently in press with "
     [:a {:href   "https://journals.plos.org/plosmedicine/"
          :rel    "noopener"
          :target "_blank"} "PLOS Medicine."]]]

   [:section "Model validation"
    [:p "The clinical validity of a prediction model can be defined as the accuracy of the model to
     predict future events. Two key measures of clinical validity are calibration and discrimination."]
    [:p "Calibration is how well the model predicts the total number of events in a given data set. A perfectly
     calibrated model is one where the observed (or actual) number of events in a given patient cohort is the same as
     the number of events predicted by the model. Discrimination is how well the model predicts the occurrence of an
     event in individual patients. The discrimination statistic is a number between zero and one - where 1 means the model always predicts who will have
     a worse outcome. A score of 0.5 would suggest the model will be correct half the time."]
    [:p "Predict was originally validated using a dataset of another 3,000 prostate cancer patients from the Eastern England
    data and a further 2,546 men from a separate independent dataset from Singapore diagnosed between 1990 and 2015 and followed up for a median of 5.1 years. Discrimination
    in these two datasets was 0.84 for prostate cancer survival, and 0.77 and 0.76 for overall survival over 15 years maximum follow-up. Further details are available via the publications below."]]

   [:section "Model Extension: BRCA status and biopsy reparameterisation (version 1.1)"
    [:p "The web-model was updated in March 2019 to include BRCA status and to model the impact of biopsy core involvement differently."]
    [:p "Carriage of the BRCA1/2 mutation is associated with worse survival outcomes in prostate cancer.
      Considering only men with nonmetastatic prostate cancer, the independent hazard ratio for BRCA1/2 carriage 
      for 5 year cancer-specific mortality was 2.6. This work has been published in the "
     [:a {:href   "http://ascopubs.org/doi/full/10.1200/JCO.2012.43.1882 "
          :rel    "noopener"
          :target "blank"} "Journal of Clinical Oncology, April 2013."]
     " The poor prognostic effect on prostate cancer specific mortality has been applied within the model for those who are known
     to have a BRCA1/2 mutation. Note that there has been no compensatory adjustment to the predicted prognosis for those known to be negative
     for the mutation, nor for those in whom the BRCA status is unknown, as the prevalence of mutations is so low."]]


   [:section "Future versions"
    [:p "Predict Prostate will be updated over time as new information and evidence becomes available. The model is currently undergoing testing
               in other international cohorts and a "
     [:a {:href   "http://www.isrctn.com/ISRCTN28468474"
          :rel    "noopener"
          :target "blank"} "patient study"] " is underway to assess its potential impact on clinical practice."]
    ]]

  [:section#publications "Publications"
   [:section "Publications"
    [:a {:name "publications"}]
    [:ol
     [:li [:p "PREDICT: Prostate – a novel prognostic model that estimates individual survival in newly diagnosed primary non-metastatic prostate cancer
                      . by D Thurtle, D Greenberg, LS Lee, H Huang, P Pharoah, VJ Gnanapragasam. European Urology Supplements
      2018; 17(2): e1328-e1329. Published online 2018 March. doi: 10.1016/S1569-9056(18)31764-0. "
           [:a {:href   "https://www.eusupplements.europeanurology.com/article/S1569-9056(18)31764-0/fulltext"
                :rel    "noopener"
                :target "_blank"} "[Abstract online]"]]]
     [:li [:p "Individual prognosis at diagnosis in non-metastatic prostate cancer: Development and external validation of the PREDICT Prostate multivariable model
                      . by D Thurtle, D Greenberg, LS Lee, H Huang, PD Pharoah, VJ Gnanapragasam. PLOS Medicine
      2019.  "
           [:a {:href   "https://journals.plos.org/plosmedicine/"
                :rel    "noopener"
                :target "_blank"} "[In press.]"]]]]]

   [:section#faqs "FAQs"
    [:section ""

     (faq-item "Looking for advice?"
               [:.col-sm-12                                 ; {:style {:margin-top 20}}
                [:h3 "More Information"]
                [:p "The following websites provide excellent advice and information on treatments and their potential harms:"]
                [:h4 "About treatments:"]
                [:ul {:style {:font-size       "120%"
                              :list-style-type "none"}}
                 [:li {:key 1}
                  [:a {:href "http://www.cancerresearchuk.org/about-cancer/prostate-cancer/treatment"
                       :rel    "noopener"
                       :target "blank"} "Cancer research UK"]]
                 [:li {:key 2}
                  [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/"
                       :rel    "noopener"
                       :target "blank"} "NHS"]]]


                [:h4 "About potential harms:"]
                [:ul {:style {:font-size       "120%"
                              :list-style-type "none"}}
                 [:li {:key 3}
                  [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radical-prostatectomy"
                       :rel    "noopener"
                       :target "blank"} "Radical prostatectomy"]]
                 [:li {:key 4}
                  [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radiotherapy"
                       :rel    "noopener"
                       :target "blank"} "Radiotherapy"]]
                 ]
                [:h4 "Further advice and support:"]
                [:ul {:style {:font-size       "120%"
                              :list-style-type "none"}}
                 [:li {:key 1}
                  [:a {:href "http://www.macmillan.org.uk/"
                       :rel    "noopener"
                       :target "_blank"} "Macmillan"]]
                 [:li {:key 2}
                  [:a {:href "http://prostatecanceruk.org/"
                       :rel    "noopener"
                       :target "_blank"} "Prostate Cancer UK"]]
                 [:li {:key 3}
                  [:a {:href "https://www.nhs.uk/pages/home.aspx"
                       :rel    "noopener"
                       :target "_blank"} "NHS Choices"]]
                 ]]

               )


     (hr)
     (faq-item "What if I don’t have all the details needed for the input section?"
               "The model requires all boxes on the 'predict tool' page to be completed. If the biopsy details are unknown, 'No'
               can be selected next to 'biopsy data available'. If you select 'No' for this, the Predict tool will use the average value.
               This will simply make the results less personalised.
               If BRCA status is unknown 'Negative or Untested' should be selected.
                     All of the necessary details should be easily available to your prostate cancer specialist.")
     (hr)
     (faq-item "How do I know that Predict gives the right answers."
               "Predict estimates what would be expected to happen to men with similar characteristics based on past
               data. The findings are based on men diagnosed in the East of England but we have also tested the model
               on over 2,500 men diagnosed in Singapore. To the best of our knowledge the Predict tool should work equally well for most men in the UK.
               However, Predict can never say what will happen to an individual man. Note also that Predict is likely to be less
               reliable in higher risk disease, as very few men with these characteristics were managed conservatively in our data. The model is
               intended for men where conservative management and radical treatment are both appropriate options.")
     (hr)
     (faq-item "If the data used is from patients decades ago won't the predictions it gives be out of date?"
               "These predictions are based on patients diagnosed between 2000 and 2010, and include follow-up for up to 16 years.
               In order to carry out long term predictions older data have to be used.  It is possible that outcomes of cancers diagnosed today, and treatments used today
               will be different.")
     (hr)
     (faq-item "What use are these kinds of statistics when as a patient I will either be cured or not?"
               "Treatment does not work for everyone - whilst some people may get a large survival benefit, others may get no benefit - only the harmful side effects of treatment.
               Particularly in older men or men with other long-term conditions, the overall survival benefits of prostate cancer treatment can be small.  This makes choosing whether
               or not to have radical treatment a difficult and personal choice.
               From statistics, based on what has happened to people with similar cancers in the past when they had treatment, Predict tries to give the 'best guess' at the sort of
               benefits treatment might give a particular patient.  This can help inform a personal decision on whether to try it or not. Any potential benefits, should also be weighed
               against the possible harms of treatment side effects.")
     (hr)
     (faq-item "What about MRI?"
               "Magnetic Resonance Imaging (MRI) is increasingly being used in prostate cancer care.
               The data used for this model was from men diagnosed between 2000 and 2010 when MRI was rarely used, and MRI has changed significantly
               over recent years. Therefore we did not have data on MRI-defined lesions, PIRADS scores, or MRI-stage, nor are they included in the model.
               However, it is yet unknown if MRI data will improve prognostic ability with MRI primarily used to guide biopsies rather than offer prognostic information.
               If MRI information is shown to be independently prognostically significant it could potentially be incorporated into a future version of Predict Prostate.")

     (hr)
     (faq-item "What if I only had biopsies of the suspicious area seen on my MRI?"
               "Predict is built around data from men whow had multiple 'systematic' biopsies taken from multiple parts of their prostate. A small number of centres
               only take biopsies from parts of the prostate that look suspicious on MRI. In this circumstance, it should be considered that
               biopsy data is unavailable, as using these figures for 'biopsy cores taken' and 'biopsy cores with prostate cancer' would lead to less reliable estimates.
               By reporting that biopsy data is unavailable, the average values will be used, which will make the estimates slightly less personalised. ")

     (hr)
     (faq-item "What if I never had any prostate biopsies and my prostate cancer was diagnosed incidentally by an operation to help me urinate (such as 'trans-urethral resection of the prostate 'TURP' or 'HoLeP')?")
     "Predict does not use data from men diagnosed and treated by an endoscopic procedure alone. The estimates are likely to be less reliable. "
     (hr)
     (faq-item "What about other treatments?"
               "This web-model focuses on radical treatment (radical prostatectomy or radiotherapy) compared to conservative
               management (including active surveillance or watchful waiting). Other types of treatment for prostate cancer are available, but are beyond the scope
               of this model. Your own prostate cancer specialist should be able to advise you how effective another treatment type is.")

     (hr)
     (faq-item "What about metastatic cancer?"
               "Predict is not relevant for men with metastatic prostate cancer. It should only be used by men where either conservative management or radical
                     treatment (either surgery or radiotherapy) could both be appropriate options.")
     #_(hr)
     #_(faq-item "What about HGPIN?"
                 "The calculations in Predict are only for men who have been diagnosed with primary prostate cancer.
                 These are not for use by men with HGPIN (high grade prostatic intra-epithelial neoplasia).")
     (hr)
     (faq-item "Does Predict account for different types of surgery?"
               "No. Predict does not attempt to differentiate between surgery and radiotherapy, nor between different surgical techniques. Predict was built around
               data from men diagnosed between 2000 and 2010. During this time period, if men were treated by surgery it may have been by open,
               laparoscopic ('key-hole'), or robotic prostatectomy. We are not able to account for differences in survival outcomes between these operative techniques.
               The side effect profiles may differ between different types of surgery and radiotherapy.")
     (hr)
     (faq-item "What about side effects?"
               "Information about potential treatment side effects, or harms, is on the 'Predict Tool' page. These are not individualised to your personal details
                     but are taken from the studies mentioned in the text. Charities such as"
               [:a {:href   "https://prostatecanceruk.org/"
                    :rel    "noopener"
                    :target "_blank"} "[Prostate Cancer UK.]"] "and"
               [:a {:href   "https://www.macmillan.org.uk/information-and-support/prostate-cancer/"
                    :target "_blank"} "[Macmillan.]"] "provide useful information on the side
               effects of each treatment.")
     (hr)
     (faq-item "Who developed the Predict programme?"
               "Predict Prostate has been developed by a partnership between the Academic Urology Group and the Department of Cancer Epidemiology at the University of Cambridge
      in collaboration with the National Cancer Registration and Analysis Service (NCRAS) at Public Health England")
     (hr)
     (faq-item "How was the computer programme developed?"
               [:span "The team used information held by the National Cancer Registration and Analysis Service, part of Public Health England."
                [:a {:href "http://www.ncin.org.uk/collecting_and_using_data/national_cancer_data_repository/"
                     :rel    "noopener"
                     :style {:text-decoration "underline"}}
                 "National Cancer Registration and Analysis Service"]
                " on over 7000 men diagnosed with prostate cancer between 2000 and 2010.
                 Using this information they were able to see how individual factors affected survival at ten years and
                 fifteen years after diagnosis."])
     (hr)
     (faq-item "Who designed the website?"
               [:span "The website has been built by the "
                [:a {:href "https://wintoncentre.maths.cam.ac.uk"
                     :rel    "noopener"
                     :style {:text-decoration "underline"}} "Winton Centre for Risk & Evidence Communication"] "
                 at the University of Cambridge. The site functionality and visualisation software is trademarked by the Winton Centre as
                 4U2C. However, we are happy for others to use it for similar purposes. Do contact us to discuss this at "
                [:a {:href "mailto:wintoncentre@maths.cam.ac.uk" :rel "noopener"} "wintoncentre@maths.cam.ac.uk"] "."])

     (hr)
     (faq-item "Where can I find more information on prostate cancer?"
               "There is a great deal of information on prostate cancer on the web. One of best and most reliable
               sources is Cancer Research UK, along with those from Macmillan and Prostate Cancer UK. Their information is written by experts, is up to date and in a style
               that is easy to understand.")
     ]]]


  [:section#contact "Contact"
   [:section "Contact"
    [:p "National Cancer Registration and Analysis Service" [:br] "East Regional Office, Victoria House, Capital Park,
     Fulbourn, Cambridge CB21 5XB" [:br] "Email: " [:a {:href "mailto:info@prostate.predict.nhs.uk" :rel "noopener"} "info@prostate.predict.nhs.uk"]]]]

  [:section#legal-preamble "Preamble"
    [:p.screen-only {:key   0
                     :style {:margin "40px 20px 20px" :font-size "20px"}} "We recommend that patients use this tool in consultation with their
    doctor."]
    [:p.print-only {:key 1} "Predict is a tool that helps show what impact radical treatment might have on survival rates after prostate cancer diagnosis compared to conservative management.
    This print out shows what characteristics of the patient and cancer were entered, and how different management would be expected to affect survival
    rates up to 15 years after diagnosis. This is based on data from similar men in the past, but remains a 'best guess'. Treatments often have side effects as well as benefits, and it is important to
    consider these as well when making treatment choices. We recommend visiting the sites of charities such as Macmillan and Prostate Cancer UK for details about side effects."]]

   [:section#disclaimer "Disclaimer"
    [:section "Disclaimer"
     [:p "Predict uses an algorithm based on information from many thousands of men diagnosed in England. However, it can only provide a 'best guess' of likely outcomes based on
   previous data, and it can never provide an accurate prediction for an individual. Patients should always consult their
   own specialist, who will be able to discuss the results in a more personalised context."]
     [:p "The theory behind the model has been presented at international conferences and published in a peer-reviewed journal. "]]]

   [:section#algorithm "Algorithm"
    [:section "Explanation of the Predict Algorithm"


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
      match the number of deaths if 'deaths from prostate cancer were excluded completely' as used in the 'Charts', 'Curves' and 'Table' outputs."]]]

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
     [:p "Yes you can. Follow this link for up to date instructions: " [:a {:href "https://www.hotjar.com/legal/compliance/opt-out" :rel "noopener" :target "_blank"} "How to disable Hotjar"]]]]


   ;;;
   ;; Previous version texts
   ;;;
   [:section#patient-information "Patient Information"

    [:section#what-it-does "What is Predict?"
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
     [:p.emphasise {:key 0 :style {:margin-top "10px"}}
      [:strong "We recommend that patients use this tool in consultation with their doctor."
       [:br] "This tool is only for use in men without metastatic disease where conservative management and radical treatment are both options being considered."]]]

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

    [:section#psa "PSA"
     [:p "PSA (prostate-specific antigen) level at the time of diagnosis - i.e prior to biopsy or any treatment."]]

    [:section#size "Size"
     [:p "The approximate size of the tumour in millimetres."]]

    [:section#t-stage "Clinical stage"
     [:p "The clinical tumour stage according to the TNM classification. This relates to how the prostate feels on examination. Select T-stage 1, 2, 3, or 4. 
      The model does not differentiate between sub-classifications such as T2b and T2c."]]

    [:section#histological-grade-group "Histological grade group"
     [:p "The highest reported grade group from the diagnostic prostate biopsies. If this is not known, the highest reported Gleason score can be entered
      and the grade group will be completed automatically. "]]

    [:section#gleason-score "Gleason score"
     [:p "The highest reported Gleason grade found in any of the diagnostic prostate biopsies."]]

    [:section#biopsy "Biopsy data avaliable?"
     [:p "If information on the number of biopsy cores taken, and the number that were positive is known, select 'yes'. 
      If this information is not known, or if biopsy cores were ONLY taken from target lesions select 'no'."]]

    [:section#number-of-biopsy-cores-taken "Biopsy cores taken"
     [:p "The total number of biopsy cores taken. Extra biopsies taken from each target site should be considered as 1 core, regardless of how many biopsy cores were
      taken from that target. *See examples*"]]

    [:section#number-of-biopsy-cores-with-prostate-cancer "Biopsy cores with prostate cancer"
     [:p "The total number of biopsy cores with any prostate cancer within them. Even cores with a lower grade should be counted here, if they have any prostate cancer within them. 
      Biopsy cores with prostate cancer taken from a single target site should be considered as 1 core, regardless of how many positive cores were taken from that target *See examples*."]]

    [:section#h-admissions "Hospital admissions in the last 2 years"
     [:p "This refers to any inpatient admission to hospital in the 2 years before prostate cancer diagnosis. Anything anything related
     to the prostate cancer diagnosis itself, such as for a prostate biopsy, should be ignored."]]

    [:section#brca "BRCA gene variant"
     [:p "Enter 'positive' if you have been tested positive for the BRCA gene variant. If unknown, select 'Negative or Untested.'"]]

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
     [:h4 "Examples of how to deal with targetted biopsies:"]
     [:div {:style {:margin-left 20 :margin-right 20}}
      [:p "2 biopsy cores from 1 target, of which both were negative = 1 additional core taken and 0 additional cores with cancer "]
      [:p "3 biopsy cores from 1 target, of which 2 were positive = 1 additional core taken and 1 additional core with cancer. "]
      [:p "2 biopsy cores from 2 different targets of which both positive = 2 additional cores taken and 2 additional cores with cancer "]]


    [:section#surgery "Treatments already received"
     [:p "This tool is useful in helping to decide on additional therapies after any surgery has taken place"]]

    [:section#regime "Treatment Regime"
     [:p "Conservative management refers to monitoring or observing the disease, without any active treatment.
      In modern practice this is often referred to as 'active surveillance' which may involve more intensive monitoring. 
      Radical treatment here refers to radical prostatectomy (surgery) or radical radiotherapy"]]

    ;; Treatment potential harms

    [:section#side-effects-cm "Conservative Management"
     [:p "'Active Monitoring' was the term used for conservative management within the ProtecT study, where this data is from. Men were predominantly monitored by PSA."]]

    [:section#side-effects-am "Active Monitoring"
     [:p "'Active Monitoring' was the term used for conservative management within the ProtecT study, where this data is from. Men were predominantly monitored by PSA."]]

    [:section#side-effects-rp "Radical Prostatectomy"
     [:p "Radical prostatectomy refers to surgical removal of the whole prostate gland, with or without the nearby lymph nodes.
      Within this study the majority were performed by an open operation"]]

    [:section#side-effects-rt "Radiotherapy"
     [:p "Radiotherapy in the ProtecT study included combined androgen deprivation therapy for 3-6 months before and during external beam radiotherapy at a total dose of 74Gy in37 fractions."]]

    [:section#nerve-sparing "Nerve-sparing"
     [:p "Nerve-sparing radical prostatectomy"]]

    [:section#non-nerve-sparing "Non-nerve-sparing"
     [:p "Non-nerve-sparing radical prostatectomy"]]
    ;;
    ;; Treatment Options and Results
    ;;

    [:section#show-ranges "Show ranges"
     [:p "The default values are the best estimate of the benefit. When you click on show ranges, a 95% prediction
     interval is added to the table. The true value of the benefit is very unlikely be outside this range"]]]]]

  )
