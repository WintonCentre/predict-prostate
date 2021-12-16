# Developing Translations

## Overview
We offer translations of Predict in multiple languages. To do this we need a version of Predict that allows translators to make their translations while viewing something that approximates to the final site. This is the translations editor, and it is published at `https://translation.prostate.wintoncentre.uk`.

### The implementation
All translatable texts that appear in the Predict site code are wrapped in a call to `ttt`.

`ttt` takes a vector containing two parameters:
1. a namespaced keyword
1. the English text.

It returns a reactive rum component that renders the text.

We can build predict in two ways - either as a standard production or development site where the translations are offered according to the language the user selects in the menubar - or - as a translations editor that translators can use to enter the texts for their own language.

The main difference between normal and editor builds is how the `ttt` function is defined.

In a **normal** build,
`ttt` returns a span component containing the text for the selected language found in the dictionary map. That dictionary map is initialised at startup by merging the EDN files `live_dictionary.txt` over `prod_dictionary.txt`.
`prod_dictionary.txt` contains the basic menus in all production languages.

In an **editor** build, the app first reads in any dictionary it can find from a translations server endpoint. This remote mutable dictionary is merged with `dictionary.txt`. `dictionary.txt` contains the basic menu translations for all languages - including those that are currently being translated. See the `tranny` app for that - the endpoints are published at `https://api-prostate.wintoncentre.uk/`. The language dictionary gets merged with the default dictionary map so `ttt` can find the text for a selected language. If `ttt` finds the translation it is presented to the user inside as a clickable muted pink box. If no translation is found, the text is presented inside a clickable shocking pink box. This makes text that needs to be translated stand out. Either way, clicking on the text calls up a dialog box where a new translation may be entered. 

There are minimal safeguards here. Old text can be overwritten and is - immediately, and common mistakes such as failing to select the target language before commencing a translation are not caught. This last mistake shows up as the new language appearing when English is selected in the translation editor. It can be corrected by manual manipulation of the SQLite translations database located in the tranny project. See also `https://api-prostate.wintoncentre.uk/translations`. Because of this error it's important to clear the English of any translations before extracting the live dictionary EDN file. 

### Creating a translation editor or a normal app
In `leiningen` builds, we create a *normal* or a *translation editor* build by selecting either the `min`or`min-edit`profile defined in `project.clj` when calling `lein cljsbuild`. 
`min-edit` includes the folder `src_tt_edit` in the source path list. `min` includes the folder `src_tt_prod` instead.

In development, when using a `shadow-cljs` build, we have to do this differently. It's easiest to pull in the different ttt definitions by building different targets which use different entry points as defined in `shadow-cljs.edn`. This in turn means that we need different root html to refer to those entry points.

The Jenkins production builds currently still use leiningen (for IE9 compatibility), so it is only worthwhile going over to shadow-cljs if you are making extensive changes in development. 

### Selecting the languages offered
Define them in `translations.config/initial-supported-languages`

### Making the translations 
Once built, it's over to the translation editors so they can complete the translations. Monitor progress on the translations editor site `https://translation.prostate.wintoncentre.uk/` and on `https://api-prostate.wintoncentre.uk/translations`. Each language needs around 600 translations. Watch out for missed info box translations, and missed texts that only come up on certain input choices, and code changes that demand new translations in all languages. 

### Building a site with a new language
The safeguards need to come in before publication of the live site. Here's the checklist:
1. Go to https://api-prostate.wintoncentre.uk/translations and apply the `en` filter. Ensure there are no English 
translations in the database. If there are, it's easiest to download the Tranny data base using `sync-dev--serv-to-me.sh` from the predict-prostate branch. Delete all rows in `tranny-dev.sqlite3` which have `lang='en'`, and then upload using `sync-dev--serv-to-me.sh`.
Yes - this should be automated further! ** It now is - see `getdictionary.clj` **
2. Back in the Predict repo, edit `public/resources/prod_dictionary.txt`. This file is a minimal translation dictionary that is just enough to allow every language to be selected. Any new languages must appear here with their
menu items translated into all the old languages too.
3. Back in the Predict repo, run `getdictionary.sh`. This pulls the tranny database and creates the `live_dictionary.txt` that will be used in the production code. The production code only uses static files and has no database connection. The implementation is a babashka script - it sits in bb-scripts. It imports trasplants.config/initial-supported-languages from src-tt-prod to filter the live-dictionary for the published languages. It will not import any new English definitions - as these must be hard coded.
4. Merge develop, staging, translation so they are one and the same.
5. Build a **normal** system - either a dev or a production build. You will want to remove refs to shadow.debug at this time if you are developing with shadow. I usually do a local build first and follow it up with a develo build.
6. If all good publish on staging and move items in JIRA to 'STAGED FOR REVIEW'
7. Email reviewers


### On git branches
The translation editor uses the same git branch, `shadow`, which Jenkins uses to create `https://translation.prostate.wintoncentre.uk/`. 

Similarly, there are branches for the live site `master`, the staging site `staging` and the development site `develop`. Changes usually propagate from `develop` through `staging` into `master`. The `shadow` branch should also point to `master`. In (rare) stable periods all these branches should be at the same hash.