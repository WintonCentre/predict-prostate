# predict-prostate

A decision tool to help patients and clinicians decide on whether to go
for conservative or radical treatments for prostate cancer

## Status

> **Prototype**

> **Not to be used**

> **Not for release**

The user interface inherits much from the Winton breast cancer
predict interface which is undergoing separate user testing. A similar
user testing program will be implemented for this project before release.

## Overview

Add reference to the prostate cancer paper here.

This is a single page web application written in
[clojurescript](https://clojurescript.org/).
The clojurescript compiler generates javascript which runs in an HTML5
capable browser (Chrome, Safari, Firefox, Opera, IE10+). It uses Bootstrap
styling to achieve a responsive display that adapts to desktop or mobile
screen sizes.

## Local dependencies


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

For production we use the `min` build id which runs the code through the advanced
optimisation pass of Google's closure compiler.

To create the production build, download the repository or clone it using git and use the following leiningen command:

> Todo: I need to publish a couple of libraries used by this repo. `pubsub` and `wc-rum-libs` are dependencies not yet here or on Maven.

These instructions assume a MacOSX or Unix/Linux development system is to hand.
If running Windows, you should be able to load up a unix virtual box first
and run things in that.

```sh
# if using git...
git clone https://gitlab.com/gmp26/predict-prostate.git

cd predict-prostate
lein do clean, cljsbuild once min
```

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

## Development Prerequisites

Install JDK 8 and leiningen 2.7.1 or later. See details above.

In development we load the generated javascript directly in the browser
using [figwheel](https://github.com/bhauman/lein-figwheel).
Whenever code changes, it is recompiled and reloaded
into the running program without the need for a screen refresh. We
generate a source-map for chrome developer tools so code may be inspected
and exercised in the browser in javascript or clojurescript. Similarly,
we use the [binaryage devtools](https://github.com/binaryage/cljs-devtools)
to allow easy navigation through either
javascript or clojurescript data structures.

However as in all clojure programming, the main development tool is
the REPL (Read Evaluate Print Loop) ideally one which supports code
evaluation within the editor.

Our clojurescript-aware editor is the free [Intellij community edition](https://www.jetbrains.com/idea/download)
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

## Using VsCode/Calva

Click on the REPL button and choose to `Jack-in`.
Then select `Leiningen + Legacy Figwheel` and the :dev profile.
Evaluate/Load any file/ns in the REPL and you can start using it.

## Starting the REPL

Click the 'run' arrow.

Intellij will start a REPL window and run the clojurescript compiler.
Once the code has been compiled, it will launch your default browser at
the URL http://localhost:4449 where you should be able to see the
development web site.

You can type clojurescript expressions into the bottom half of the REPL
window, and they will be evaluated in the top half. Try
```clj
(+ 3 2)
```

It is usually more
convenient however to send selected sections of code from an editor window
to the REPL for evaluation. See the `Tools > REPL` commands
in Intellij/Cursive.

## Development release

Run the `publish.sh` script from the main repo. This simply rsyncs the
resources/public directory to a web server. You must have access permissions
for the web server.

## Updates

There should be no need to update the dependencies listed in the `project.clj`
file unless new features are added that depend on new libraries. If you
do need to, then run
```
lein ancient
```
for a list of dependencies for which newer versions are available. It is
safest to apply and test updates one by one.


## Utilities

To update after any dependency change:
```
lein deps
```
Cursive should prompt you to do this whenever you edit the `project.clj`
file.

To clean all compiled files:
```
lein clean
```

To create a production build run:



And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright ©2018 University of Cambridge

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
