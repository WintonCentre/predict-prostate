
<h1 align="center">Predict Prostate</h1>
<p align="center">
<img src="https://img.shields.io/badge/to--inform-not--persuade-informational">
<img src="https://img.shields.io/badge/License-EPL_1.0-red.svg">
</p>

_A decision tool to help patients and clinicians decide on whether to go for conservative or radical treatments for prostate cancer, made by the **[Winton Centre team](https://wintoncentre.maths.cam.ac.uk/)**._

---

The user interface inherits much from the [Winton breast cancer predict](https://github.com/WintonCentre/predict3) interface which is undergoing separate user testing. A similar user testing program has been implemented for this project before release.

<p align="center">
<a href="https://ibb.co/Cbyr4BH"><img src="https://i.ibb.co/x1b4wh7/PP.png" alt="PP" border="0" /></a>
</p>

The site is currently available in five languages (EN, FR, DE, SC and PT).

This is a branch dedicated to adding translation capabilities to the application in the form of an editor mode populating a PostgreSQL backend.
## Overview

Add reference to the [prostate cancer paper](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002758) here.

This is a single page web application written in
[clojurescript](https://clojurescript.org/).
The clojurescript compiler generates javascript which runs in an HTML5
capable browser (Chrome, Safari, Firefox, Opera, IE10+). It uses Bootstrap
styling to achieve a responsive display that adapts to desktop or mobile
screen sizes.
## Installation

These instructions create a production version. To create a development
version see below.

Ensure you have **Java 1.8** installed. At a terminal try
```sh
java -version
```
If not, install JDK 8 from [Oracle](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html).
I would expect [OpenJDK v8](http://openjdk.java.net/install/) to work too, but this is untested.

JDK 9 has also been released, but this project has not yet been tested with it.

Ensure you have **leiningen 2.7.1** or later installed.
Leiningen is a build tool for clojure programming.
```sh
lein --version
```
If not, install it from https://leiningen.org/

For production we use the `min-` build ids which runs the code through the advanced optimisation pass of Google's closure compiler. Use `min`build for a production app, and `min-edit`for a production editor.
> Make sure you comment out the Service Worker in index.html for the editor, as it causes an issue when requesting the API from a Safari browser.

To create the production build, download the repository or clone it using git and use the following leiningen command:

```sh
# if using git...
git clone https://gitlab.com/gmp26/predict-prostate.git

cd predict-prostate
# For a production app
lein do clean, cljsbuild once min
# For a production editor
lein do clean, cljsbuild with-profile rum-react-patch cljsbuild once min-edit
```
>These instructions assume a MacOSX or Unix/Linux development system is to hand.
>If running Windows, you should be able to load up a unix virtual box first and run things in that.

The first time you run this it will download clojure, clojurescript and
all project dependencies. Subsequent runs will be faster.

This creates a distribution in the `resources/public` folder which can
be served as a directory by a simple static file web server.

Any server capable of serving files from
a directory will do. Those that come with python or NodeJS are often near
to hand. See https://gist.github.com/willurd/5720255 for more options.
Switch to the resources/public directory, and start a local web server
to test.

```
cd resources/public

# for python 2.7
python -m'SimpleHTTPServer'

# for python 3.3
python3 -m'http.server'

```
For these python examples, the production site may be tested at
`http://localhost:8000`.


The repo contains a couple of scripts that automate these steps:

* `./build.sh` will compile the application. And after testing it, run
* `./publish.sh`

> You will need to edit the URL in the publish script so it syncs to your server.

## Development Prerequisites and workflow

Install JDK 8 and leiningen 2.7.1 or later. See details above.

In development, we now use `Shadow-cljs` instead of `Figwheel`to create either the app or the editor build. Whenever code changes, it is recompiled and reloaded into the running program without the need for a screen refresh. We generate a source-map for chrome developer tools so code may be inspected and exercised in the browser in javascript or clojurescript. Similarly, we use the [binaryage devtools](https://github.com/binaryage/cljs-devtools) to allow easy navigation through either javascript or clojurescript data structures.

However as in all clojure programming, the main development tool is
the REPL (Read Evaluate Print Loop) ideally one which supports code
evaluation within the editor.

## Using VsCode/Calva + Shadow-cljs

Click on the REPL button and choose to `Jack-in`.
Then select `Shadow-cljs` and the :app and/or :editor profile.
Evaluate/Load any file/ns in the REPL and you can start using it.

## Using Intellij/Cursive+Figwheel

One other possible clojurescript-aware editor is the free [Intellij community edition](https://www.jetbrains.com/idea/download)
augmented with the [Cursive plugin](https://cursive-ide.com/) for Clojure/Clojurescript). Other editors
may be used but some adjustments may be necessary to support hot-loading.
(For example, if using Emacs with Cider, the figwheel setup is slightly
different.)

Install Intellij and the Cursive plugin following [these instructions](https://cursive-ide.com/userguide/index.html).
I recommend enabling the ParEdit option rather than ParInfer for fast
clojure editing with balanced parenthises.

Start Intellij, and select `File > New Project > From Version Control`.
This will clone and install the repo and create a new project.

Open `project.clj`. Cursive will prompt you for the path to your Java
SDK and will register the project file.

You will need to create a [figwheel run configuration](https://github.com/bhauman/lein-figwheel/wiki/Running-figwheel-in-a-Cursive-Clojure-REPL).
Follow the link for instructions - look for 'Create a clojure.main Cursive REPL Configuration'.
The `script/repl.clj` file is already in the distribution, so you don't need
to make it. If you name this configuration 'figwheel' it will appear next
to the green 'run' arrow in the intellij menu bar.
> Be aware that the latest build is using shadow-cljs, and getting figwheel to work again might require some adjustments.

## License

Copyright ©2022 University of Cambridge

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
