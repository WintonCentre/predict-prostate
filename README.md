
<h1 align="center">Predict Prostate</h1>
<p align="center">
<img src="https://img.shields.io/badge/to--inform-not--persuade-informational">
<img src="https://img.shields.io/badge/License-EPL_1.0-red.svg">
</p>

_A decision tool to help patients and clinicians decide on whether to go for conservative or radical treatments for prostate cancer, made by the **[Winton Centre team](https://wintoncentre.maths.cam.ac.uk/)**._

---
This is a single page web application written in
[clojurescript](https://clojurescript.org/).
The clojurescript compiler generates javascript which runs in an HTML5
capable browser (Chrome, Safari, Firefox, Opera, IE11, Edge). It uses Bootstrap
styling to achieve a responsive display that adapts to desktop or mobile
screen sizes.

The user interface inherits much from the [Winton breast cancer predict](https://github.com/WintonCentre/predict3) interface which is undergoing separate user testing. A similar user testing program has been implemented for this project before release.

<p align="center">
<a href="https://ibb.co/Cbyr4BH"><img src="https://i.ibb.co/x1b4wh7/PP.png" alt="PP" border="0" /></a>
</p>

The site is currently available in seven languages (EN, FR, DE, SC, PT, ES and IT). It is mainly based on [the following paper](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002758). The site is deployed and maintained at the following URL: [https://prostate.predict.nhs.uk/](https://prostate.predict.nhs.uk/)

This codebase can also be used to add translations in different languages to the application, by building an editor mode populating a PostgreSQL backend.
## Installation

These instructions create a production version. To create a development
version see the next section below.

Ensure you have **Java 1.11** installed. At a terminal try
```sh
java -version
```
If not, install JDK 11 from [Oracle](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html), [OpenJDK v11](http://openjdk.java.net/install/) or [Azul Zulu](https://www.azul.com/downloads/?package=jdk) for Mac M1.

Ensure you have **leiningen 2.7.1** or later installed.
Leiningen is a build tool for clojure programming.
```sh
lein --version
```
If not, install it from https://leiningen.org/

For production we use the `min-` build ids which runs the code through the advanced optimisation pass of Google's closure compiler. Use `min`build for a production app, and `min-edit`for a production editor.
> You may need to comment out the Service Worker in `predict-prostate.core/init` for the editor, as it could cause an issue when requesting the API from a Safari browser.

To create the production build, download the repository or clone it using git and use the following leiningen command:

```sh
# if using git...
git clone https://gitlab.com/gmp26/predict-prostate.git

cd predict-prostate
# For a production app
lein do clean, with-profile rum-react-patch cljsbuild once min
# For a production editor
lein do clean, with-profile rum-react-patch cljsbuild once min-edit
```
>These instructions assume a MacOSX or Unix/Linux development system is to hand.
>If running Windows, you should be able to load up a unix virtual box first and run things in that.

_The first time you run this it will download Clojure, Clojurescript and all project dependencies. Subsequent runs will be faster._

This creates a distribution in the `resources/public` folder which can
be served as a directory by a simple static file web server (e.g. Netlify, Surge.sh).

Any server capable of serving files from a directory will do. Those that come with python or NodeJS are often near to hand (see [here](https://gist.github.com/willurd/5720255) for more options).
For instance, switch to the resources/public directory, and start a local web server
to test:

```
cd resources/public

# for python 2.7
python -m'SimpleHTTPServer'

# for python 3.3
python3 -m'http.server'

```
For these python examples, the production site may be tested at `http://localhost:8000`.


The repo contains a couple of scripts that automate these steps:

* `./build.sh` will compile the application. 
* `./build_number.sh`updates the version number using the latest annotated tag. After running these, execute:
* `./publish.sh`

> You will need to edit the URL in the publish script so it syncs to your server.

## Development prerequisites and workflow

Install JDK 11 and leiningen 2.7.1 or later. See details above.

In development, we now use `Shadow-cljs` instead of `Figwheel`to create either the app or the editor build. Whenever code changes, it is recompiled and reloaded into the running program without the need for a screen refresh (hot-reloading). We generate a source-map for chrome developer tools so code may be inspected and exercised in the browser in javascript or clojurescript. Similarly, we use the [binaryage devtools](https://github.com/binaryage/cljs-devtools) to allow easy navigation through either javascript or clojurescript data structures.

However as in all clojure programming, the main development tool is
the REPL (Read Evaluate Print Loop) ideally one which supports code
evaluation within the editor.

### Using VsCode/Calva + Shadow-cljs

* Click on the REPL button and choose to `Jack-in`.
* Select the `/predict-prostate`project (not the `bb-script`one).
* Then select `Shadow-cljs` and the `:app` and/or `:editor` and/or `:test-browser` builds to start.
* Finally, choose the build to connect the REPL to.


The `shadow dashboard`is available at `localhost:9630`
The app is available at `localhost:4000`
The browser tests are available at `localhost:4021`

## Model tests

Under `/model-tests/f04064a489c3a0f32ced64d4bae42e93c6a050fb0ef5aa4d2a701fe3d2671818`, there is a button to load and run the tests contained in `test-runs.txt` (currently 5000).
These tests have been generated using the original model in Stata, and they are here to make sure that the published model gives out the same results as the original model.
They should be run after every release.
The result of these tests is output in the console of the browser.

## Creating build number for releases
As seen on bottom right of predict webpage, version number to track is generated through git tag system. See https://git-scm.com/book/en/v2/Git-Basics-Tagging for detailed information

### Create tag
Create annotated tag: git tag -a v-1.00-1.09 -m "EE release. Contains translations also."

### Format
Format: v-1.00-1.09

1.00 is Vincent's versioning. 1.09 is our software versioning. '-' is used as separator.

### Git describe
git describe is used to generate our build number shown on webpage. Contains useful information such as how many commits current branch you are on from initial tag.

## License

_Copyright ©2022 Winton Centre for Risk & Evidence Communication_

_Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version._
