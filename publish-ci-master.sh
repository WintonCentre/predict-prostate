#!/bin/bash


set -e
echo "Publishing to Live server"
TARGET='prostate.predict.nhs.uk:/var/www/prostate.predict.wintoncentre.uk/'
LOCAL_DEV='resources/public/'
#echo "===============Building files============="
#lein clean
#lein cljsbuild once min
echo "===============rsync-ing files==================="
rsync --dry-run -avz --omit-dir-times --del --no-perms --no-owner --no-group $LOCAL_DEV $USER@$TARGET
echo "================================="
echo "Uploaded to " $TARGET
echo "================================="
