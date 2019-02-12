#!/bin/bash
#cp .gitignore .temp_exclude_list
cat .gitignore exclude_list.txt > .temp_exclude_list
rsync -av --exclude-from=.temp_exclude_list /Users/jin/Workspace/predict-prostate  /Users/jin/Workspace/predict-prostate-copy-03