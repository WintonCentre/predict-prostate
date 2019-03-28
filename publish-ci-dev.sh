#!/bin/bash

set -e
echo "Publishing to Development server"
TARGET='/var/www/prostate.predict.wintoncentre.uk/'
LOCAL_DEV='resources/public/'
echo "===============rsync-ing files==================="
rsync -avz --omit-dir-times --del --no-perms --no-owner --no-group $LOCAL_DEV $TARGET
echo "================================="
echo "Uploaded to " $TARGET
echo "================================="
#