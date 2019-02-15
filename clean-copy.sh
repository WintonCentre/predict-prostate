#!/bin/bash
cat .gitignore exclude_list.txt > .temp_exclude_list
#rsync -av --exclude-from=.temp_exclude_list /Users/$USER/Workspace/predict-prostate  /Users/$USER/Workspace/predict-prostate-clean
rsync -av --exclude-from=.temp_exclude_list $(pwd) $(pwd)-clean
