#!/bin/bash
rsync -av --del --no-perms --no-owner --no-group resources/public/ $USER@prostate.predict.wintoncentre.uk:/var/www/prostate.predict.wintoncentre.uk/