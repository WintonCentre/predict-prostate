#!/bin/bash

set -e
echo "Publishing to LIVE HDI PREDICT server"
read -p "Are you sure? (y/n) " -n 1 -r
echo ""
TARGET='139.59.188.109:/var/www/prostate.predict.wintoncentre.uk/'
LOCAL_DEV='resources/public/'
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "===============Building files============="
    lein clean
    lein cljsbuild once min
    echo "===============rsync-ing files==================="
    rsync -av --del --no-perms --no-owner --no-group $LOCAL_DEV $USER@$TARGET
    echo "================================="
    echo "Uploaded to " $TARGET
    echo "================================="
fi