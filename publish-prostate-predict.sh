#!/usr/bin/env sh
set -e
lein clean
lein cljsbuild once min
rsync -av --del --no-perms --git pull no-owner --no-group resources/public/ $USER@prostate.predict.wintoncentre.uk:/var/www/prostate.predict.wintoncentre.uk/