#!/usr/bin/env sh
echo "===============Adding build number============="
git checkout develop
BUILD_SEARCH="Build: v0.0-dev-#000-hash"
GIT_DESCRIBE=$(git describe)

echo ${BUILD_SEARCH}
echo ${GIT_DESCRIBE}

sed -i "s|${BUILD_SEARCH}|${GIT_DESCRIBE}|g" resources/public/js/compiled/predict_prostate.js
