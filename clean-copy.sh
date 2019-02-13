#!/bin/bash
cat .gitignore exclude_list.txt > .temp_exclude_list
rsync -av --exclude-from=.temp_exclude_list /Users/jin/Workspace/predict-prostate  /Users/jin/Workspace/predict-prostate-copy-06