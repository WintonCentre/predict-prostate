#!/usr/bin/env sh
set -e
lein clean
lein cljsbuild once min
#rsync -av resources/public/ gmp26@webuu1.maths.cam.ac.uk:/www/drupal/sites/wintoncentre.maths.cam.ac.uk/files/predict/prostate2