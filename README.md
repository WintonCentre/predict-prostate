# predict-prostate

A decision tool to help patients and clinicians decide on whether to go
for conservative or radical treatments for prostate cancer

## Status

**Prototype**.

The user interface inherits much from the Winton breast cancer
predict interface which is undergoing separate user testing. A similar
user testing program will be implemented for this project before release.

## Overview

Add reference to the prostate cancer paper here.

This is a single page web application written in
[clojurescript](https://clojurescript.org/).
The clojurescript compiler generates javascript which runs in an HTML5
capable browser (Chrome, Safari, Firefox, Opera, IE10+). It uses Bootstrap
styling to achieve a responsive displaythat adapts to desktop or mobile
screen sizes.

In development we load the generated javascript directly in the browser
using figwheel. Whenever code changes, it is recompiled and reloaded
into the running program without the need for a screen refresh. We
generate a source-map for chrome developer tools so code may be inspected
and exercised in the browser in javascript or clojurescript. Similarly,
we use the binaryage devtools to allow easy navigation through either
javascript or clojurescript data structures. We also make good use
of the clojurescript REPL (Read Evaluate Print Loop) to support code
evaluations within the editor.


Our clojurescript-aware editor is the free [Intellij community edition](https://www.jetbrains.com/idea/download)
augmented with the [Cursive plugin](https://cursive-ide.com/) for Clojure/Clojurescript). Other editors
may be used but some adjustments may be necessary to support hot-loading.
(For example, if using Emacs with Cider, the figwheel setup is slightly
different.)

## Development Prerequisites

Install a java v1.8 development kit if it is not already installed.
Download and install Intellij and Cursive. Follow the [Cursive
Getting Started guide](https://cursive-ide.com/userguide/).

Install [leiningen](https://leiningen.org/) - the clojure/script build tool.
You do not need to install clojure or clojurescript language tools as
leiningen will handle everything.

Start Intellij, and select `File > New Project > From Version Control`.
This will clone and install the repo and create a new project.

Open `project.clj`. Cursive will prompt you for the path to your Java
SDK and will register the project file.

You will need to create a [figwheel run configuration](https://github.com/bhauman/lein-figwheel/wiki/Running-figwheel-in-a-Cursive-Clojure-REPL).
Follow the link for instructions - look for 'Create a clojure.main Cursive REPL Configuration'.
The `scrip/repl.clj` file is already in the distribution, so you don't need
to make it. If you name this configuration 'figwheel' it will appear next
to the green 'run' arrow in the intellij menu bar.

## Development testing

Click the 'run' arrow.

Intellij will start a REPL window and run the clojurescript compiler.
Once the code has been compiled, it will launch your default browser at
the URL http://localhost:4449 where you should be able to see the
development web site.


## Development release

Run the `publish.sh` script from the main repo. This simply rsyncs the
resources/public directory to a web server.

## Updates

There should be no need to update the dependencies listed in the `project.clj`
file unless new features are added that depend on new libraries. If you
do need to, then run
```
lein ancient
```
for a list of dependencies for which newer versions are available. It is
safest to apply and test updates one by one.

## Production Releases

Since we are at prototype, this is not yet finalised. For production we
use the `prod` build id which runs the code through the advanced
optimisation pass of Google's closure compiler. A distribution will
be created in `resources` ready for deployment in a suitable container.

The production release may be tested by pointing a local web server at
the `resources/public' directory. Any server capable of serving files from
a directory will do. Those that come with python or NodeJS are often to
hand. See https://gist.github.com/willurd/5720255 for more options.

```sh
lein do clean, cljsbuild once min
cd resources/public

# for python 2.7
python -m'SimpleHTTPServer'

# for python 3.3
python3 -m'http.server'

```
For these python examples, the test site may then be accessed at
`http://localhost:8000`


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
