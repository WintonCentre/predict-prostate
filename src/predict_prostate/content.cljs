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


(rum/defc adverse-effects [treatment]
  [:div
   [:.row {:style {:margin-top " 0px "}}
    [:.col-sm-12
     [:p "The table shows information on the adverse effects you may experience if your treatment includes " treatment
      ". The data is based on women of a similar age. It does " [:strong "not"] " take account of dosage, or of interactions between treatments."]]]

   [:row
    #_[:.col-sm-12
       (sidefx-table2 nil)]
    [:col-sm-12
     [:p treatment " have an additional survival benefit of 2% at 5 years and 5% at 10 years."]
     [:p [:strong "Links to more info:"]
      [:ul {:style {:list-style-type "none"}}
       [:li [:a {:href "https://www.macmillan.org.uk/information-and-support/breast-cancer/coping/side-effects-and-symptoms"}
             " Macmillan"]]]]]]])

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

   [:section#strap-line "Clear data on breast cancer treatment outcomes"]

   [:section#home-what-is "What is Predict?"
    [:p {:key 1} "Predict is a tool that helps doctors and patients decide on treatments to have after surgery for breast cancer."]
    [:p {:key 2} "We recommend patients read the "
     [:a {:key 1 :href "#/patient"} "patient information"]
     [:span {:key 2 :style {:font-size "16px"}} " section before using the tool."]]]

   [:section#home-how-use "How do I use Predict?"
    [:p {:key 3} "You enter details about the cancer, and then select different treatment options to see how effective they are."]
    [:div {:key 2 :style {:border-left  "3px solid #BC3D95"
                          :padding-left "10px"}}
     [:p "We recommend that patients use this tool with their doctor."]]]

   [:section#home-what-tell "What will Predict tell me?"
    [:p {:key 4} "The predict tool shows you how different treatments affect the percentage of women that survive over ten years following surgery."]]

   ;[:section#home-page "Welcome to the PREDICT website"
   ;
   ; [:section#welcome "Welcome to the PREDICT website"
   ;  [:p "After surgery for breast cancer there are several types of treatment available."]
   ;
   ;  [:p "This website uses data from thousands of women to show you how treatments improve survival rates."]
   ;
   ;  [:p "We recommend that you use this site with your doctor or read the ‘Patient Information’ section before using the tool."]]]

   [:section#about-page "About"
    [:section#who "Who developed the PREDICT programme?"
     [:p {:style {:color "red"}} "replace text here"]

     [:p "PREDICT has been developed by a partnership between The Breast Unit at Cambridge University NHS Hospital, the
    University of Cambridge Department of Oncology and the NHS Eastern Cancer Registry and Information Centre (ECRIC)."]]

    [:section#how "How was the computer programme developed?"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "The team used information held by the Eastern Cancer Registry and Information Centre on nearly 5700 women treated
    for breast cancer between 1999 and 2003. Using this information we were able to see how individual factors affected
    survival at five years and ten years."]]

    [:section#where "Where can I find more information on Breast Cancer?"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "There is a great deal of information on Breast Cancer on the web. One of best and most reliable sources is Cancer
    Research UK. The information is written by experts, is up to date and in a style that is easy to understand."]]
    ]

   [:section#patient-information "Patient Information"

    [:section#what-it-does "What is PREDICT?"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "Nothing can ever tell an individual woman what is going to happen to her – but we believe that in order to make
    decisions about treatment options it’s important that people are given as much information as is possible about the
    potential effects of each treatment option."]

     [:p.emphasise "The web tool is not designed to give clinical advice and all decisions on treatment options must be
    made in consultation between the patient and a qualified doctor."]]

    [:section#what-it-says "What does it tell me?"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "This web tool aims to give women who have had surgery for breast cancer as accurate information as is
    possible about the potential effects of further treatment options available to them. This version of the tool was 
     developed using data from over 5,000 women with breast cancer from England and has been carefully tested on data 
     from another 23,000 women with breast cancer from around the world."]]

    [:section#how-does-it-know "How does it know what a treatment will do for me?"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "It can’t tell you what will happen to you, but it will look at the evidence to tell you a ‘best guess’ at the
    chances of different outcomes."]

     [:p "The maths behind the tool is based on data from both clinical trials and from thousands of women who
    have undergone breast cancer treatment in the recent past in England. These two types of data are combined to
    help produce the best assessment possible of the potential outcomes for women who have breast cancer now, depending
    on characteristics about them and their tumour."]

     [:p "It is adjusted to take into account that the outcomes and treatment options available for women now are
    different from those for women 20 or so years ago whose data may be included."]]


    [:section#how-accurate "How accurate is it?"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "Once the tool had been made, it was tested to see whether it could accurately predict outcomes for women.
     This was done by taking the data held in England for another 5,000 women whose outcomes were known, and running 
     the tool for each of them as if they were new patients to see how accurate it was. It was then tested in the same way
     with data from women in different parts of the world, and all these results have been published."]

     [:p "This work has shown that this tool gives as good a guess as we currently can as to what is likely to happen to women
     opting for different treatments."]

     [:p "For more technical details on the maths behind this tool, please click "
      [:a {:href "https://breast-cancer-research.biomedcentral.com/articles/10.1186/s13058-017-0852-3"} "here"] "."]]]

   [:section#clinician-information "Clinician Information"

    [:section#professionals "Information for professionals"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "Welcome to PREDICT, an online prognostication and treatment benefit tool designed to help clinicians and
     patients make informed decisions about treatment following breast cancer surgery. The survival estimates, presented
     both with and without adjuvant therapy (hormone therapy, chemotherapy and trastuzumab), are provided for 5 and 10
     years following surgery. Development of the model was a collaborative project between the Cambridge Breast Unit,
     University of Cambridge Department of Oncology and the Eastern Cancer Information and Registration Centre (ECRIC)
     and was supported by an unrestricted educational grant from Pfizer Limited."]

     [:p "We welcome any feedback you may have about PREDICT. If you have questions about its development or there are
     features you would like to have added to the model please let us know by emailing us at info@predict.nhs.uk."]

     [:p "The model is easy to use following data entry for an individual patient including patient age, tumour size,
     tumour grade, number of positive nodes, ER status, HER2 status, KI67 status and mode of detection. Survival
     estimates, with and without adjuvant therapy, are presented in visual and text formats. Treatment benefits for
     hormone therapy and chemotherapy are calculated by applying relative risk reductions from the Oxford overview to
     the breast cancer specific mortality. Predicted mortality reductions are available for both second generation
     (anthracycline-containing, >4 cycles or equivalent) and third generation (taxane-containing) chemotherapy regimens."]

     [:p "The Cambridge Breast Unit (UK) uses the absolute 10-year survival benefit from chemotherapy to guide decision
     making for adjuvant chemotherapy as follows: <3% no chemotherapy; 3-5% chemotherapy discussed as a possible option;
     >5% chemotherapy recommended.\n\nThe relative risk reduction for hormone therapy is based on 5 years of tamoxifen."]]

    [:section#model-development "Model development"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "The model was derived from cancer registry information on 5,694 women treated in East Anglia from 1999-2003.
     Breast cancer mortality models for ER positive and ER negative tumours were constructed using Cox proportional
     hazards, adjusted for known prognostic factors and mode of detection (symptomatic versus screen-detected).
     The survival estimates for an individual patient are based on the average co morbidity for women with breast cancer
     of a similar age. Further information about the model is provided in a paper published in Breast Cancer Research
     in January 2010."]]

    [:section#model-validation "Model validation"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "The clinical validity of a prediction model can be defined as the accuracy of the model to predict future
     events. The two key measures of clinical validity are calibration and discrimination."]

     [:p "Calibration is how well the model predicts the total number of events in a given data set. A perfectly
     calibrated model is one where the observed (or actual) number of events in a given patient cohort is the same as
     the number of events predicted by the model.\n\nDiscrimination is how well the model predicts the occurrence of an
     event in individual patients. The discrimination statistic is a number between zero and one. It is generally
     obtained from the area under a receiver-operator characteristic curve. If a random pair of patients is selected
     from a dataset - one being a survivor and the other a non-survivor - the discrimination is the probability that the
     non-survivor will have a higher predicted risk than the survivor."]

     [:p "PREDICT was originally validated using a dataset of over 5000 breast cancer patients from the West Midlands
     Cancer Intelligence Unit."]

     [:p "We also validated PREDICT using a dataset from British Columbia that had been previously used for a validation
     of Adjuvant! Online. Predict provided overall and breast cancer specific survival estimates that were at least as
     accurate as estimates from Adjuvant! The results of this validation were published in the European Journal of
     Surgical Oncology."]]

    [:section#v1-1 "Model extension: HER2 status (version 1.1)"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "The model was updated in October 2011 to include HER2 status. Estimates for the prognostic effect of HER2
      status were based on analysis of 10,179 cases collected by the Breast Cancer Association Consortium (BCAC). A
      validation of the new model in the British Columbia dataset was published in the British Journal of Cancer. This
      showed that inclusion of HER2 status in the model improved the estimates of breast cancer-specific mortality,
      especially in HER2 positive patients."]

     [:p "The benefit of trastuzumab is based on the relative risk reduction of 31 percent in mortality up to five
      years in published trials."]]

    [:section#v1-2 "Model extension: KI67 status (version 1.2)"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "More recently we have added KI67 status to the model. The prognostic effect of KI67 was taken from published
      data showing that ER positive tumours that express KI67 are associated with a 30 percent poorer relative survival."]

     [:p "KI67 positivity for the PREDICT model was defined as greater than 10 percent of tumour cells staining
     positive."]

     [:p "We have validated the version of PREDICT that includes KI67 using a data set from Nottingham. The addition of
     KI67 led to a small improvement in calibration and discimination in 1,274 patients with ER+ disease - the area
     under the ROC curve improved from 0.7611 to 0.7676 (p=0.005). These data have been accepted for publication in
     BMC Cancer."]]

    [:section#refitting "Model re-fitting (version 2.0)"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "While the overall fit of the model has been good in multiple independent case series, PREDICT has been shown
     to underestimate breast cancer specific mortality in women diagnosed under the age of 40, particularly those with
     ER positive disease (See publication [5]). Another limitation of the model is the use of discrete categories for
     tumour size and node status which result in “step” changes in risk estimates on moving from one category to the
     next. For example, a woman with an 18mm or 19mm tumour will be predicted to have the same breast cancer specific
     mortality if all the other prognostic factors are the same whereas breast cancer specific morality of women with
     a 19mm or 20mm tumour will differ. We have therefore refitted the PREDICT prognostic model using the original
     cohort of cases from East Anglia with updated survival time in order to take into account age at diagnosis and to
     smooth out the survival function for tumour size and node status. The fit of the model has been tested in three
     independent data sets that had also been used to validate the original version of PREDICT."]

     [:p "Calibration in ER negative disease validation data set: PREDICT v1.2 over-estimated the number of breast
     cancer deaths by 10 per cent (observed 447 compared to 492 predicted). This over-estimation was most notable in the
     larger tumours and in the high-grade tumours. In contrast, the calibration of PREDICT v2.0 in ER negative cases was
      good (predicted 449).\n\nCalibration in ER negative disease validation data set: The calibration of both
     PREDICT v1.2 and PREDICT v2.0 was good in ER positive cases (observed breast cancer deaths 633 compared to 643
     (v1.2) and 634 (v2.0) predicted). However, as previously described, PREDICT v1.2 significantly under-estimated
     breast cancer specific mortality in women diagnosed with ER positive disease at younger ages, whereas the fit of
     PREDICT v2.0 was good in all age groups."]]

    [:section#oncotype "PREDICT and Oncotype DX™"
     [:p {:style {:color "red"}} "replace text here"]
     [:p "Oncotype DX™ is a prognostic model (breast cancer recurrence) based on a test of gene expression profiles in
     tumours. It has recently been recommended by NICE (DG10) for use in women with oestrogen receptor positive (ER+),
     lymph node negative (LN−) and human epidermal growth factor receptor 2 negative (HER2−) early breast cancer to
     guide chemotherapy decisions if the person is assessed as being at intermediate risk, and where the information on
     the biological features of the cancer provided by oncotype DX™ is likely to help in predicting the course of the
     disease."]

     [:p "The oncotype DX™ recurrence score has been shown to be a prognostic factor independent of the other variables
     included in PREDICT. However, the incremental improvement in discrimination that it would be expected to provide
     has not been established. We are seeking to identify relevant data that will enable this to be done.\n\n"]]]


   [:section#predict-tool "PREDICT tool"

    [:section#tool-preamble "Preamble"
     [:p.emphasise {:key 0 :style {:margin-top "10px"}} [:strong "We recommend that patients use this tool in consultation with their
    doctor."]]]

    [:section#tool-preamble-2 "Preamble 2"
     [[:p.emphasise {:key 1 :style {:border "none"}} "Complete sections 1 to 3 below, then select from the treatment options to
     see how they improve survival rates. Click on the information buttons to see an explanation of each field."]]]

    [:section#tool-postamble "Postamble"
     [:section#dummy ""
      [:h3 "Important"]
      [:p "These results are estimates based on data from men with similar characteristics.
     There are other important factors such as lifestyle, which affect outcomes. Your doctor will help you put these
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

    [:section#about-the-patient.input-box "About the patient"

     [:p "This section collects information about the person with breast cancer which may affect the treatment choices
    available to them or the outcomes of those treatments."]

     [:p "The options available are those recorded in the English health service records, as the tool is based on a
    database of patients from England."]


     ;;   [:section#performance-status.input-widget "Performance-status"
     ;;
     ;;     [:span " is a rating of frailty, and is used to help choose appropriate chemotherapy options:"
     ;;      [:ol
     ;;       [:li {:item 0} "Fully active with no symptoms"]
     ;;       [:li {:item 1} "Can walk and carry out light work but not strenuous activity"]
     ;;       [:li {:item 2} "Can walk and look after themselves, up and about more than half of waking hours, but cannot do
     ;;       any work activity"]
     ;;       [:li {:item 3} "Not bed bound but capable only of limited self-care and confined to bed or a chair more than half
     ;;       of waking hours"]
     ;;       [:li {:item 4} "Totally confined to a bed or chair and unable to look after themselves at all"]
     ;;       ]]

     [:p "It is necessary to select an option for each question, but if you do not know the answer, select " (unknown) "."]

     [:p "Once this information has been entered for a woman, these boxes will collapse and the available treatment
     options will be displayed instead."]]

    [:section#about-the-tumour-physical.input-box "About the tumour (physical characteristics)"

     [:p "There are several different kinds of breast cancer, and different stages of its development, which will affect
    the treatment options that are most suitable for a woman, and their outcomes."]

     ;;   [:p "This section collects the information that has been found to be most relevant to treatment choices for women in
     ;;   England, such as whether the tumour was symptomatic or detected through screening, and what type of cancer it is:"]
     ;;
     ;;   [:p "Invasive ductal breast cancer is the most common type of breast cancer (70-80%), whilst invasive lobular breast
     ;;   cancer is much rarer – only about 10% of breast cancers."]
     ;;
     ;;   [:p "There are some other, rare, types such as inflammatory breast cancer (1-2% of cases), and non-invasive breast
     ;;   cancers known as LCIS and DCIS.  For these, select ‘other’ in the options."]

     [:p "The " [:strong "size"] " and " [:strong "grade"] " of the tumour are important – the " [:strong "grade"] " describes how different the cancer cells are from normal
     cells. In a pathology report these are sometimes listed as 'differentiation':"]

     [:ul {:style {:font-size "1.2em"}}
      [:li [:strong "Grade 1 (Well differentiated)"] " - the cells are growing slowly and are similar to healthy cells"]
      [:li [:strong "Grade 2 (Moderately differentiated)"] " - the cells are growing faster and are less similar to the healthy ones"]
      [:li [:strong "Grade 3 (Poorly differentiated)"] " - the cells are very different from healthy ones and often fast-growing"]]

     [:p "The number of " [:strong "positive nodes"] " – lymph nodes from under the arm that have cancer cells found in them - will have been counted
    during surgery. On a pathology report it may be quoted as a pair of numbers such as 2/10, meaning 10 lymph nodes were
     examined and 2 of them had cancer cells found in them. In this case you would enter '2' in the box."]

     [:p [:strong "Micrometastases"] " are small groups of cancer cells are found in the lymph glands. If present these should be discovered during
     surgery."]

     [:p "It is necessary to select an option for each question, but if you do not know the answer, select " (unknown) "."]

     ]
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

    [:section#biopsy "Biopsy"
     [:p "The proportion of cores with any prostate cancer."]]

    [:section#comorb "Comorbidity"
     [:p "Choose 'yes' if the patient has been admitted to hospital in the 2 years prior
     to diagnosis and has a history of one (or more) of the following:"
      [:br]
      "Myocardial infarction, Congestive heart failure, Peripheral vascular disease (including aortic aneurysm >= 6 cm),
      Cerebrovascular disease (Stroke or TIA), Dementia, Chronic pulmonary disease, Connective tissue disease, Peptic
      ulcer disease, Liver disease, Diabetes (excluding diet-controlled diabetes alone), Hemiplegia, Moderate or severe
      renal disease, Cancer (EXCLUDING THIS PROSTATE CANCER) (exclude if > 5 y from diagnosis), Leukemia (acute or
      chronic), Lymphoma, AIDS."]]


    [:section#surgery "Treatments already received"
     [:p "This tool is useful in helping to decide on additional therapies after any surgery has taken place"]

     #_[:p "This section records the treatment that the woman has already received – whether their surgery was a complete
        mastectomy or breast-conserving (‘lumpectomy’), and whether they received chemotherapy before surgery (known as
        neo-adjuvant therapy)."]

     #_[:p "You need to enter a value for these options to proceed.  Once this information has been entered for a woman,
        these boxes will disappear and you will not be able to change them. This is to make the website clearer and simpler."]
     ]

    ;;
    ;; Treatment Options and Results
    ;;


    [:section#hormone-therapy "Hormone Therapy"
     [:p [:strong "Hormone therapy"] ", or " [:strong "Endocrine therapy"] ", involves a woman taking drugs to prevent the growth of tumour cells that
    are boosted by the hormones oestrogen or progesterone.  Some hormone therapy drugs act by blocking the action of
    oestrogen on the cells and some work by lowering the amount of oestrogen in the body (NB hormone therapy for breast
    cancer is the opposite of hormone replacement therapy or HRT, which is taken by women to help INCREASE oestrogen
    levels to help deal with side-effects of the menopause)."]
     ]

    [:section#chemotherapy "Chemotherapy"
     [:p [:strong "Chemotherapy"] " uses drugs to weaken or kill cancer cells throughout the body. There are many different
    chemotherapy drugs which work on different kinds of tumour cell, and they are often given in combinations to
    maximise their effectiveness.  The options in this web tool cover generic chemotherapy regimes used most commonly
    in England: "]
     [:ul {:style {:font-size "1.2em"}}
      [:li [:strong "No chemotherapy at all"]]
      [:li [:strong "2nd gen"] " is short for second-generation chemotherapy drug regimes such as FEC (fluorouracil, epirubicin and
      cyclophosphamide), CAF or FAC (Cyclophosphamide, doxorubicin, and 5-fluorouracil), AC-T (doxorubicin/cyclophosphamide
      followed by paclitaxel) or Docetaxel plus cyclophosphamide"]
      [:li [:strong "3rd gen"] " is short for third-generation chemotherapy drug regimes such as
      DAC (Docetaxel, doxorubicin, and cyclophosphamide), Sequential FEC-taxane, Dose dense sequential doxorubicin/
      cyclophosphamide-paclitaxel (AC-T) etc."]]

     [:h4 "Potential Harms of the treatment"]
     [:div
      [:.row {:style {:margin-top " 0px "}}
       [:.col-sm-12
        [:p "The table shows information on the adverse effects you may experience if your treatment includes
        chemotherapy. The data is based on women of a similar age. It does " [:strong "not"] " take account of dosage,
        or of interactions between treatments."]]]
      ]
     [:div
      (adverse-effects "Chemotherapy")]
     ]

    [:section#bisphosphonates "Bisphosphonates"
     [:p "Bisphosphonate text here"]]

    [:section#radiotherapy "Radiotherapy"
     [:p "Radiotherapy text here"]]

    [:section#trastuzumab "Trastuzumab"
     [:p [:strong "Trastuzumab"] " is a chemotherapy drug that specifically targets HER2 positive tumours."]]

    [:section#show-ranges "Show ranges"
     [:p "The default values are the best estimate of the benefit. When you click on show ranges, a 95% prediction
     interval is added to the table. The true value of the benefit is very unlikely be outside this range"]]

    [:section#adjuvant-treatments.input-box "Adjuvant treatments"

     [:p "This section allows you to enter potential ongoing treatment options for the woman whose details you have
    entered, to see how they will affect her health in the future.  As you change the options, you should see instant
    changes to the accompanying graphs and numbers to allow an easy comparison between treatments."]

     [:p "The treatment options that are shown as available in this web tool depend on the characteristics of the woman
    and the tumour that you have already entered. This is to make the interface clearer and simpler to use."]

     [:p [:strong "Endocrine therapy"] ", or " [:strong "hormone therapy"] ", involves a woman taking drugs to prevent the growth of tumour cells that
    are boosted by the hormones oestrogen or progesterone.  Some hormone therapy drugs act by blocking the action of
    oestrogen on the cells and some work by lowering the amount of oestrogen in the body (NB hormone therapy for breast
    cancer is the opposite of hormone replacement therapy or HRT, which is taken by women to help INCREASE oestrogen
    levels to help deal with side-effects of the menopause)."]

     [:p [:strong "Chemotherapy"] " uses drugs to weaken or kill cancer cells throughout the body. There are many different
    chemotherapy drugs which work on different kinds of tumour cell, and they are often given in combinations to
    maximise their effectiveness.  The options in this web tool cover generic chemotherapy regimes used most commonly
    in England:"]

     [:ul {:style {:font-size "1.2em"}}
      [:li [:strong "No chemotherapy at all"]]
      [:li [:strong "2nd gen"] " is short for second-generation chemotherapy drug regimes such as FEC (fluorouracil, epirubicin and
      cyclophosphamide), CAF or FAC (Cyclophosphamide, doxorubicin, and 5-fluorouracil), AC-T (doxorubicin/cyclophosphamide 
      followed by paclitaxel) or Docetaxel plus cyclophosphamide"]
      [:li [:strong "3rd gen"] " is short for third-generation chemotherapy drug regimes such as
      DAC (Docetaxel, doxorubicin, and cyclophosphamide), Sequential FEC-taxane, Dose dense sequential doxorubicin/
      cyclophosphamide-paclitaxel (AC-T) etc."]]




     ;;    [:ul
     ;;     [:li "Taxane-containing drugs help stop cancer cells dividing"]
     ;;     [:li "‘Anthra’ is short for anthracyclines, which damage cancer cells and kill them"]
     ;;     [:li "‘CMF’ stands for the regime of Cytoxan, methotrexate and fluorouracil"]]
     ;;
     ;;    [:p "Radiotherapy uses a high energy beam of radiation targeted at the tumour area to damage and kill cancer cells.
     ;;    The radiation affects cancer cells more than normal cells so normal cells in the path of the beam will repair and
     ;;    recover, whilst the cancer cells will be killed.  The options in this web tool cover three types of radiotherapy:"]
     ;;
     ;;    [:ul
     ;;     [:li "Breast/Chest wall – this is when the radiation oncologist targets the beam just to the affected breast area"]
     ;;     [:li "B/CW +Axilla/SCF – this is a beam that targets both the breast/chest wall and the axilla and supraclavicular
     ;;     fossa, to kill any cancer cells in the lymph glands in the underarm and collarbone areas near the tumour"]
     ;;     [:li "B/CW +Axilla/SCF +IMC – this is when the radiotherapy targets the breast/chest wall, the axilla and
     ;;     supraclavicular fossa and the internal mammary chain (near the breastbone) to reach other lymph nodes."]]
     ;;
     ;;    [:p "It also allows you to enter the dose of radiation (measured in Gray units, Gy) that the woman’s heart will be
     ;;    exposed to, and the lung on the side that she will be treated (the ‘ipsilateral lung’)."]
     ;;
     ;;    [:p "Bisphosphonates are drugs commonly used to help slow down bone thinning (osteoporosis), but can also be used in
     ;;    some women to help prevent cancer spreading to the bones. They are only suitable for post-menopausal women."]
     ;;    ]
     ]]]

  )
