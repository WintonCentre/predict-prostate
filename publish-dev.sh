#!/bin/bash

set -e
echo "Publishing to Development server"
TARGET='dev.wintoncentre.uk:/var/www/prostate.predict.wintoncentre.uk/'
LOCAL_DEV='resources/public/'
echo "===============Building files============="
#lein clean
#lein cljsbuild once min
echo "===============rsync-ing files==================="
rsync -avz --inplace --omit-dir-times --del --no-perms --no-owner --no-group $LOCAL_DEV $USER@$TARGET
# --temp-dir=/home/${USER}/rsync-temp/prostate.predict.wintoncentre.uk
echo "================================="
echo "Uploaded to " $TARGET
echo "================================="
