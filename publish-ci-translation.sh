#!/bin/bash

set -e
echo "Publishing Editor to Staging server"
TARGET='translation.prostate.wintoncentre.uk:/var/www/translation.prostate.wintoncentre.uk'
LOCAL_DEV='resources/public/'
echo "===============rsync-ing files==================="
rsync -avz --omit-dir-times --del --no-perms --no-owner --no-group $LOCAL_DEV $USER@$TARGET
echo "================================="
echo "Uploaded Editor to " $TARGET
echo "================================="
