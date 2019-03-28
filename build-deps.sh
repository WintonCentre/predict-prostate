#!/usr/bin/env bash
#set -e

git clone git@github.com:WintonCentre/pubsub.git
cd pubsub
git checkout d7398c7a311cdd8df276e84ff4d64fcc108c6f48
lein install
cd ..
yes y | rm -r pubsub

git clone git@github.com:WintonCentre/wc-rum-lib.git
cd wc-rum-lib
git checkout 416f11d3abef0222cfcba3d397f41d114a5f1fb5
lein install
cd ..
yes y | rm -r wc-rum-lib
