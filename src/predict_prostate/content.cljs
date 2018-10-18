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
   [:section#home-what-is "What is Predict:Prostate?"
    [:p {:key 1} "Predict is a tool that helps patients and doctors decide on whether to have conservative or radical
    management for non-metastatic prostate cancer."]
    [:p {:key 2} ""]
    ]

   ; block 2
   [:section#home-how-use "How do I use Predict?"
    [:p {:key 2} "Enter the details about yourself and your prostate cancer, and then select conservative management or radical treatment to see estimates of how effective they are."]
    [:p {:key 3} "We recommend patients read the "
     [:a {:key 1 :href "#/patient"} "patient information"]
     [:span {:key 2 :style {:font-size "16px"}} " section before using the tool. Predict is only intended for use amongst men
     for whom both conservative and radical treatment could be appropriate options"]]
    #_[:div {:key 2 :style {:border-left  "3px solid #005FB1"
                            :padding-left "10px"}}
       [:p "We recommend that patients use this tool with their doctor."]]]

   ; block 3
   [:section#home-what-tell "What will Predict tell me?"
    [:p {:key 4} "The Predict tool shows you how different management strategies affect the percentage of men that survive ten and fifteen years after diagnosis."]]

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

     [:ul {:style {:list-style-image "url(assets/bullet-plus.png)"}}
      [:li (page-link [:about {:page :overview :section :whoisitfor}] "Who is it for?")]
      [:li (page-link [:about {:page :overview :section :howpredictworks}] "How Predict works")]
      [:li (page-link [:about {:page :overview :section :whobuiltpredict}] "Who built Predict")]
      ]

     [:section
      [:p
       (edit "Predict is a tool that helps doctors and patients decide on whether to have conservative or radical
     management for non-metastatic prostate cancer.")]]
     ]]

   [:section#whoisitfor "Who is it for?"
    [:section "Who is it for?"
     [:p (edit "The tool is intended for men with non-metastatic prostate cancer who are deciding between conservative and radical management regimes.")]

     [:p (edit "Predict only asks for certain information about the cancer. The inputs it asks for are the ones that are
      most helpful in predicting survival rates. ")]

     [:p (copied "Nothing can ever tell an individual man what is going to happen to him – but we believe that in order to make
    decisions about treatment options it’s important that people are given as much information as is possible about the
    potential effects of each treatment option.")]

     [:p.emphasise (copied "The web tool is not designed to give clinical advice and all decisions on treatment options must be
    made in consultation between the patient and a qualified doctor.")]
     (hr)]]

   [:section#howpredictworks "How Predict works"
    [:section "How Predict works"
     [:p "The estimates that Predict produces are based on observational data from thousands of men from England, UK."]
     [:p (edit "Predict has been tested to make sure that the estimates it produces are as accurate as they can be given current knowledge.")
      (copied "The maths behind the tool is based on data from thousands of men who have been diagnosed with prostate cancer in the recent past in England. These data are used to
    help produce the best assessment possible of the potential outcomes for men who have prostate cancer now, depending
    on characteristics about them and their tumour.")]
     [:p (edit "Although Predict produces good estimates, it cannot say whether an individual patient will survive their
     cancer or not. It can only provide the average survival rate for people in the past of similar age and with similar characteristics. ")]
     [:p (page-link [:about {:page :technical :section :technical}] "The technical section") " has more detail on how Predict was developed and tested."]
     (hr)
     ]]


   [:section#whobuiltpredict "Who built Predict?"
    [:section "Who built Predict?"

     [:p (copied [:span "Predict Prostate has been developed by a partnership between the " [:a {:href "https://surgery.medschl.cam.ac.uk/divisions-and-groups/academic-urology-group/" :style {:text-decoration "underline"}} "Academic Urology Group and the Department of Cancer Epidemiology at the University of Cambridge"] "
     in collaboration with the National Cancer Registration and Analysis Service (NCRAS) at Public Health England. This work has been supported by funding from " [:a {:href "https://www.theurologyfoundation.org/" :style {:text-decoration "underline"}} "The Urology Foundation"] " and the Evelyn Trust" ])]


     [:p (copied "The website has been built by the ") [:a {:href "https://wintoncentre.maths.cam.ac.uk" :style {:text-decoration "underline"}} "Winton Centre for Risk & Evidence Communication"]
      (copied " at the University of Cambridge who are funded by a generous donation from the David and Claudia Harding Foundation and the Winton Charitable Foundation.")]

     ]]

   [:section#technical "Technical"
    [:section "Technical"

     [:ul {:style {:list-style-image "url(assets/bullet-plus.png)"}}
      [:li (page-link [:about {:page :technical :section :history}] "Development History")]
      #_[:li (page-link [:about {:page :technical :section :preversions}] "Previous Versions")]
      [:li (page-link [:about {:page :technical :section :publications}] "Publications")]
      [:li (page-link [:about {:page :technical :section :faqs}] "FAQs")]
      ]

     [:p (edit "Predict is an online tool designed to help clinicians and patients decide between initial conservative and radical prostate cancer management.")]
     [:p (edit "The model is easy to use: simply enter data for an individual patient including patient age, PSA, Clinical stage,
     hospital admission history, histological grade group/Gleason score, proportion of biopsy cores involved, and any comorbidity. It then
     provides a choice of displays describing expected survival for the next 10 or 15 years.")]
     [:p "Click here to " (page-link [:legal {:page :algorithm} nil] "find out more about the algorithm.")]
     ]]


   [:section#history  "Development History"
    [:section "Development History"
     [:p (edit "The original model (v1.0) was derived from cancer registry information on 7,062 men treated in East Anglia from 2000-2010.
      They were followed until 30 September 2016 so that the median length of follow-up was 9.8 years and the maximum was 16 years
      Mortality models for prostate cancer-specific and non prostate cancer mortality were constructed using Cox proportional
     hazards, adjusted for known prognostic factors. The overall survival estimates for an individual patient are based on both of these models.
     Further information is provided from a previous abstract presented at the European Association of Urology conference 2018 ")
      [:a {:href "https://www.eusupplements.europeanurology.com/article/S1569-9056(18)31764-0/fulltext"} "European Urology Supplements March 2018."]]]
    [:section "Model validation"
     [:p (edit "The clinical validity of a prediction model can be defined as the accuracy of the model to
     predict future events. The two key measures of clinical validity are calibration and discrimination.")]
     [:p (edit "Calibration is how well the model predicts the total number of events in a given data set. A perfectly
     calibrated model is one where the observed (or actual) number of events in a given patient cohort is the same as
     the number of events predicted by the model. Discrimination is how well the model predicts the occurrence of an
     event in individual patients. The discrimination statistic is a number between zero and one - where 1 means the model always predicts who will have
     a worse outcome. A score of 0.5 would suggest the model will be correct half the time.")]
     [:p (edit "Predict was originally validated using a dataset of another 3000 prostate cancer patients from the East Anglian 
    data and a further 2546 men from a separate independent dataset from Hong Kong diagnosed between 1990 and 2015 and followed for 5.1 years.")]]
    [:section "Future version"
     [:p (edit "Future iterations of Predict Prostate will hopefully add more granularity to the parameter on biopsy characteristics. The model is currently undergoing tsting
               in other international cohorts.")]
     ]]

   [:section#publications "Publications"
    [:section "Publications"
     [:a {:name "publications"}]
     [:ol
      [:li  [:p (edit "PREDICT: Prostate – a novel prognostic model that estimates individual survival in newly diagnosed primary non-metastatic prostate cancer 
                      . by D Thurtle, D Greenberg, LS Lee, H Huang, P Pharoah, VJ Gnanapragasam. European Urology Supplements
      2018; 17(2): e1328-e1329. Published online 2018 March. doi: 10.1016/S1569-9056(18)31764-0. ")
             [:a {:href "https://www.eusupplements.europeanurology.com/article/S1569-9056(18)31764-0/fulltext"} "[Abstract online]"]]]
      ]
     ]]

   [:section#faqs "FAQS"
    [:section "FAQs"

     (faq-item "Looking for advice?"
               [:.col-sm-12                                            ; {:style {:margin-top 20}}
                [:h3 "More Information"]
                [:p "The following websites provide excellent advice and information on treatments and their potential harms:"]
                [:h4 "About treatments:"]
                [:ul {:style {:font-size       "120%"
                              :list-style-type "none"}}
                 [:li {:key 1}
                  [:a {:href "http://www.cancerresearchuk.org/about-cancer/prostate-cancer/treatment" :target "blank"} "Cancer research UK"]]
                 [:li {:key 2}
                  [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/" :target "blank"} "NHS"]]]


                [:h4 "About potential harms:"]
                [:ul {:style {:font-size       "120%"
                              :list-style-type "none"}}
                 [:li {:key 3}
                  [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radical-prostatectomy" :target "blank"} "Radical prostatectomy"]]
                 [:li {:key 4}
                  [:a {:href "https://www.nhs.uk/conditions/prostate-cancer/treatment/#radiotherapy" :target "blank"} "Radiotherapy"]]
                 ]
                [:h4 "Further advice and support:"]
                [:ul {:style {:font-size       "120%"
                              :list-style-type "none"}}
                 [:li {:key 1}
                  [:a {:href "http://www.macmillan.org.uk/" :target "blank"} "Macmillan"]]
                 [:li {:key 2}
                  [:a {:href "http://prostatecanceruk.org/" :target "_blank"} "Prostate Cancer UK"]]
                 [:li {:key 3}
                  [:a {:href "https://www.nhs.uk/pages/home.aspx" :target "_blank"} "NHS Choices"]]
                 ]]


               )


     (hr)
     (faq-item "What if I don’t have all the details needed for the input section?"
               (edit "If you select 'Unknown' for an input, the Predict tool will use the average value. This will simply make the results less personalised."))
     (hr)
     (faq-item "How do I know that Predict gives the right answers."
               (edit "Predict estimates what would be expected to happen to women with similar characteristics based on past
               data. The findings are based on women treated in the East of England but we have also tested that they
               give the same results on nearly 5,500 women treated in the West Midlands and a large database of women
               diagnosed under 40 in Nottingham. To the best of our knowledge
               the Predict tool works equally well for all women in the UK. We have also tested Predict on over 3,000
               women treated in British Columbia, Canada and a large group of women from the Netherlands. Other groups
               have also validated Predict using patient groups from the Netherlands and Malaysia. Five scientific papers
               describing the work have been reviewed by scientists and clinicians (see Publications for details).
               But Predict can never say what will happen to an individual woman."))
     (hr)
     (faq-item "If the data used is from patients decades ago won't the predictions it gives be out of date?"
               (edit "These predictions are based on patients diagnosed between 1999 and 2004, and include follow-up for up to 15 years.
               In order to carry out long term predictions older data have to be used.  It is possible that outcomes of these treatments will be different
               in patients diagnosed today - the use of older data is likely to slightly overestimate the benefit
               of treatment."))
     (hr)
     (faq-item "What use are these kinds of statistics when as a patient I will either be cured or not?"
               (edit "Medical treatments don't work for everyone - whilst some people may get a huge benefit, others may get no benefit - only the harmful side effects.
               This makes choosing whether to try a treatment a difficult and personal choice. For cancer, treatments may be able to delay
               a cancer coming back or stop it coming back at all. From statistics, based on what has happened to people with similar cancers in the past
               when they tried a treatment, Predict tries to give the 'best guess' at the sort of benefits that a treatment option might give a particular patient.
               This can help inform a personal decision on whether to try it or not. Any potential benefits, though, should always be weighed against the possible harms of the side effects."))
     (hr)
     (faq-item "What about radiotherapy?"
               (edit "For some women, radiotherapy is a potential treatment option. We plan to include
               it in the next version of the model."))

     (hr)
     (faq-item "What about other treatments?"
               (edit "Many new types of treatment for breast cancer are being researched.  However, we are not able to include new treatments
               in Predict until large clinical trials have demonstrated the size of the benefit in breast cancer patients."))

     #_(hr)
     #_(faq-item "What about neo-adjuvant treatment?"
               "Sometimes chemotherapy is advised before initial surgery ('neo-adjuvant' chemotherapy).  The current version of Predict is not designed to be used under these circumstances.")
     #_(hr)
     #_(faq-item "What about men with breast cancer?"
               "Predict has only been designed and tested with data from women and should not be used to make predictions for men with breast cancer.")
     (hr)
     (faq-item "What about metastatic cancer?"
               (edit "Predict is only relevant for women with early breast cancer. It does not make predictions for women whose breast cancer is already metastatic when diagnosed."))
     #_(hr)
     #_(faq-item "What about DCIS or LCIS?"
               "The calculations in Predict are only for women who have invasive breast cancer. These are not for use by women with DCIS (Ductal carcinoma in situ) or
               LCIS (Lobular carcinoma in situ).")
     (hr)
     (faq-item "Does Predict account for different types of surgery?"
               (edit "Predict is designed to be used for helping make decisions about treatment after the initial surgery. There is not currently enough
               data available to be able to take into account the effects of the different types of surgery on outcomes."))
     (hr)
     (faq-item "What about side effects?"
               (edit "At the moment Predict only gives information about the benefits of each treatment, but every
               treatment also has the potential to cause side effects and it is important to weigh these up when considering
               treatment options. Charities such as Breast Cancer Care and Macmillan give good information on the side
               effects of each treatment. We plan to
               include an estimate of the likelihood of different side effects from each treatment in the next version of Predict."))
     (hr)
     (faq-item "Who developed the Predict programme?"
               (edit "Development of the model was a collaborative project between the Cambridge Breast Unit, University of
                Cambridge Department of Oncology and the Eastern Cancer Information and Registration Centre (ECRIC) and was
                supported by an unrestricted educational grant from Pfizer Limited.
                They welcome any feedback you may have about Predict. If you have questions about its development or there are
                features you would like to have added to the model please let them know by emailing ")
               [:a {:href "mailto:info@predict.nhs.uk."} "info@predict.nhs.uk."])
     (hr)
     (faq-item "How was the computer programme developed?"
               [:span (edit "The team used information held by the Eastern Cancer Registry
                 and Information Centre, now part of the
                ") [:a {:href "http://www.ncin.org.uk/collecting_and_using_data/national_cancer_data_repository/" :style {:text-decoration "underline"}}
                                          "National Cancer Registration and Analysis Service"]
                (edit " on nearly 5700 women treated for breast cancer between 1999 and 2003.
                 Using this information they were able to see how individual factors affected survival at five years and
                 ten years.")])
     (hr)
     (faq-item "Who designed the website?"
               [:span "The website has been built by the "
                [:a {:href "https://wintoncentre.maths.cam.ac.uk" :style {:text-decoration "underline"}} "Winton Centre for Risk & Evidence Communication"] "
                 at the University of Cambridge. The site functionality and visualisation software is trademarked by the Winton Centre as
                 4U2C. However, we are happy for others to use it for similar purposes. Do contact us to discuss this at "
                [:a {:href "mailto:wintoncentre@maths.cam.ac.uk"} "wintoncentre@maths.cam.ac.uk"] "."])

     (hr)
     (faq-item (edit "Where can I find more information on breast cancer?")
               (edit "There is a great deal of information on breast cancer on the web. One of best and most reliable
               sources is Cancer Research UK, along with those from Macmillan and Breast Cancer Care. Their information is written by experts, is up to date and in a style
               that is easy to understand."))
     ]]


   [:section#contact "Contact"
    [:section "Contact"
     [:p (edit "National Cancer Registration and Analysis Service") [:br] (edit "East Regional Office, Victoria House, Capital Park,
     Fulbourn, Cambridge CB21 5XB") [:br] "Email: " [:a {:href "mailto:info@predict.nhs.uk"} "info@predict.nhs.uk"]]]]

   [:section#legal-preamble "Preamble"
    [:p.screen-only {:key   0
                     :style {:margin "40px 20px 20px" :font-size "20px"}} "We recommend that patients use this tool in consultation with their
    doctor."]
    [:p.print-only {:key 1} "Predict is a tool that helps show how breast cancer treatments after surgery might improve survival rates.
    This print out shows what characteristics of the patient and the cancer were entered, and then how different treatments would be expected to improve survival
    rates up to 15 years after diagnosis. This is based on data from similar women in the past. Treatments usually have side effects as well as benefits, and it is important to
    consider these as well when making treatment choices. We recommend visiting the sites of charities such as Macmillan and Breast Cancer Now for details about side effects."]]

   [:section#disclaimer "Disclaimer"
    [:section "Disclaimer"
     [:p (edit "Predict uses an algorithm based on information from many thousands of women diagnosed in England and large randomised
   controlled trials of different treatment options. However, it can only provide a 'best guess' of likely outcomes based on
   current knowledge, and it can never provide an accurate prediction for an individual. Patients should always consult their
   own specialist, who will be able to discuss the results in a more personalised context.")]
     [:p (edit "The theory behind the model has been subject to open academic peer review in ")
      [:a {:href "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2880419/?tool=pubmed"} "Breast Cancer Research"] ", the 
     " [:a {:href "http://www.ncbi.nlm.nih.gov/pubmed/21371853"} "European Journal of Surgical Oncology"] ", the 
     " [:a {:href "http://www.nature.com/bjc/journal/v107/n5/full/bjc2012338a.html"} "British Journal of Cancer "] "and 
     " [:a {:href "http://bmccancer.biomedcentral.com/articles/10.1186/1471-2407-14-908"} "BMC Cancer."]
      (edit " The model has been validated
     on multiple independent breast cancer cohorts with over 23,000 women diagnosed with breast cancer from England,
     the Netherlands, Canada and Malaysia with the results published in open academic peer review journals. Every
     effort has been made to ensure that the data used are accurate, the statistical procedures sound and the computer
     algorithm robust.")]]]

   [:section#algorithm "Algorithm"
    [:section "Explanation of the Predict Algorithm"


     [:p (edit "The model is based on a precise mathematical form for the cumulative hazard function: this specifies an
      individual’s chance of dying in any period of time following surgery from breast cancer, assuming they do not
      die of some other cause.  The model also contains a cumulative hazard function for dying of other causes,
      assuming no deaths from breast cancer.  These two process are assumed to be independent and together comprise
      a competing risks model, where the overall chance of being alive at a certain number of years following
      surgery is given by the chance of neither of these two events having occurred.")]

     [:p (edit "Details of the form for the baseline cumulative hazards are given in the ")
      [:a {:href (iref "/predict-mathematics.pdf")} [:i.fa.fa-file-pdf-o {:aria-hidden true}] " mathematical description"] "."]

     [:p (edit "For deaths from breast cancer, Predict uses a proportional hazards model in which each risk factor and treatment
      multiplies the baseline cumulative hazard by a fixed amount known as the hazard ratio or relative risk -
      essentially the proportional change in annual mortality risk.  This means the cumulative hazard is the product
      of three components: the baseline hazard (chances of dying from something other than breast cancer), the hazard ratios
      for the risk factors (the increased risk of death due to breast cancer) and the hazard ratios for
      the treatments (the decreased risk thanks to the treatments).")]

     [:h3 (edit "change tables")]
     [:.table-responsive
      [:table.table.table-bordered {:style {:max-width 600}}
       [:caption "Table 1: Risk-factor coefficients for Breast Cancer mortality in ER+ patients (numbers rounded for table)"]
       [:thead
        [:tr
         [:th "Risk Factor"]
         [:th "Logarithm of multiplier of baseline hazard"]]]
       [:tbody
        [:tr
         [:th "Age at surgery (years)"]
         [:td "34.5((" [:i "age"] "/10)" [:sup "-2"] " -0.0288)   - 34.2((" [:i "age"] "/10)" [:sup "-2"] "ln(" [:i "age"] "/10) - .051)"]]
        [:tr
         [:th "Size of tumour (mm)"]
         [:td "+ 0.75 (ln (" [:i "size"] "/100)  +1.55)"]]
        [:tr
         [:th "Number of nodes"]
         [:td "+ 0.71 (ln((" [:i "nodes"] "+1)/10)   +1.39)"]]
        [:tr
         [:th "Grade (1,2,3)"]
         [:td "+ 0.75 " [:i "grade"]]]
        [:tr
         [:th "Screen detected (0,1)"]
         [:td "- 0.228"]]
        [:tr
         [:th "Her2 (0,1)"]
         [:td "-0.076 if " [:i "her2"] " = 0" [:br] "0.241 if " [:i "her2"] " = 1"]]
        [:tr
         [:th "Ki67 (0,1)"]
         [:td "-0.113  if " [:i "ki67"] " = 0" [:br] "0.149 if " [:i "ki67"] " = 1"]]
        ]]]

     [:.table-responsive
      [:table.table.table-bordered {:style {:max-width 600}}
       [:caption "Table 2: Risk-factor coefficients for Breast Cancer mortality in ER- patients (numbers rounded for table)"]
       [:thead
        [:tr
         [:th "Risk Factor"]
         [:th "Logarithm of multiplier of baseline hazard"]]]
       [:tbody
        [:tr
         [:th "Age at surgery (years)"]
         [:td "0.0089 (" [:i "age"] " - 56.3)"]]
        [:tr
         [:th "Size of tumour (mm)"]
         [:td "+ 2.09(√(" [:i "size"] "/100) -0.509)"]]
        [:tr
         [:th "Number of nodes"]
         [:td "+ .626  (ln((" [:i "nodes"] " + 1)/10) + 1.09)"]]
        [:tr
         [:th "Grade (1,2,3)"]
         [:td "+ 1.13    if " [:i "grade"] " = 2 or 3"]]
        [:tr
         [:th "Her2 (0,1)"]
         [:td "-0.076 if " [:i "her2"] " = 0" [:br] "0.241 if " [:i "her2"] " = 1"]]
        ]]]

     [:.table-responsive
      [:table.table.table-bordered {:style {:max-width 600}}
       [:caption "Table 3: Treatment Risk-factor coefficients"]
       [:thead
        [:tr
         [:th "Treatment"]
         [:th "log(" [:i "RR"] ")"]
         [:th "approx" [:br] "se of" [:br] "log(" [:i "RR"] ")"]
         [:th "Hazard ratio" [:br] "Relative risk"]
         [:th "Source"]]
        ]
       [:tbody
        [:tr
         [:th "hormone therapy up to 10 years (if ER+)  "]
         [:td "-0.386"]
         [:td "0.08"]
         [:td "0.68"]
         [:td "Early Breast Cancer Trialists' Collaborative Group (2011) p777"]]
        [:tr
         [:th "trastuzumab (if HER2+)"]
         [:td "-0.357"]
         [:td "0.08"]
         [:td "0.70"]
         [:td "unpublished meta-analysis of 4 large randomised trials"]]
        [:tr
         [:th "Bisphosphonates (if post-menopausal)"]
         [:td "-0.198"]
         [:td "0.06"]
         [:td "0.82"]
         [:td "Early Breast Cancer Trialists' Collaborative Group (2015)"]]
        [:tr
         [:th "2" [:sup "nd"] " gen chemotherapy"]
         [:td "-0.248"]
         [:td "0.12"]
         [:td "0.78"]
         [:td "Early Breast Cancer Trialists' Collaborative Group (2012)"]]
        [:tr
         [:th "3" [:sup "rd"] " gen chemotherapy   "]
         [:td "-0.446"]
         [:td "0.13"]
         [:td "0.64"]
         [:td "Early Breast Cancer Trialists' Collaborative Group (2012)"]]
        ]]]
     ]

    [:section "Implementation of the Algorithm"
     [:p (edit "The model used to drive this tool is a clojurescript implementation of the Predictv2.1 model written in R maintained by Professor Paul Pharoah. The full implementation is available in a collection of ") [:a {:href "https://github.com/WintonCentre/predict-v21-main"} " open source repositories on GitHub."]]]]

   [:section#privacy "Privacy"
    [:section "Site Privacy"
     [:p "Information entered into the Predict tool never leaves your local machine. The information entered in
     'Settings' is limited to tool configuration settings and is stored on your local machine."]]
    [:section "Cookie Policy"
     [:p "A cookie is a small amount of data sent your computer that your web browser stores when you visit some
     websites. Cookies allow a website to recognise a user’s device e.g. computer, mobile phone. "]
     [:p "The law on website cookies changed on 26 May 2011 and requires that sites state which cookies are being used
     and their purpose. It also makes clear that cookies only be used with your consent. You can find out more
     information about this law by visiting the " [:a {:href "https://ico.org.uk/for-the-public/online/cookies/"} "Information Commissioner’s Office website."]]
     [:p "In using the Predict website you are implicitly giving consent that cookies may be used, however you may
     disable cookie use, see below for details."]]
    [:section "Which cookies does the Predict website use?"
     [:p "Predict uses Google Analytics to measure website traffic. All the information collected is anonymous and is
     not used for any other purpose. For more details see the "
      [:a {:href "http://www.google.co.uk/intl/en/policies/privacy/"} "Google privacy policy."]]
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
       [:tr
        [:td "mp_*_mixpanel"] [:td "MixPanel cookie. This cookie allows us to carry out user testing on our website in order to improve the user experience and enable us to deliver content that’s relevant."] [:td "one year"]]
       ]]
     ]
    [:section "Can I disable cookies?"
     [:p "You can opt out of cookies at any time, following the instructions in your browser. These are typically found
     under ‘Tools’ and ‘Options’ (PC) or ‘Preferences’ (Mac) though the details vary from browser to browser.
     Also, Google offers a " [:a {:href "https://tools.google.com/dlpage/gaoptout"} "tool that you can use to opt out"]
      " of being tracked by Google Analytics. You can add this plugin to your browser by going to Google.
      For more details about controlling cookies visit the help pages for the browser that you are using."]]]


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
     features you would like to have added to the model please let us know by emailing us at info@predict.nhs.uk."]]

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

    [:section#comorb "Comorbidity"
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
     interval is added to the table. The true value of the benefit is very unlikely be outside this range"]]

    ]]

  )
