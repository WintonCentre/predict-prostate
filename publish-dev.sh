#!/bin/bash

set -e
echo "Publishing to Development server"
TARGET='dev.wintoncentre.uk:/var/www/prostate.predict.wintoncentre.uk/'
LOCAL_DEV='resources/public/'
echo "===============Building files============="
lein clean
lein cljsbuild once min
echo "===============rsync-ing files==================="
rsync -av --del --no-perms --no-owner --no-group $LOCAL_DEV $USER@$TARGET
echo "================================="
echo "Uploaded to " $TARGET
echo "================================="