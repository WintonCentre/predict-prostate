#!/usr/bin/env sh
#set -e
#lein clean
#lein cljsbuild once min
rsync -av --del --no-perms --no-owner --no-group resources/public/ $USER@prostate.predict.wintoncentre.uk:/var/www/prostate.predict.wintoncentre.uk/