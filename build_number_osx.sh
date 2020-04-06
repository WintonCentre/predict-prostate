#!/usr/bin/env sh
echo "===============Adding build number============="
BUILD_SEARCH="v-0.0-0.00-0-hash"
GIT_DESCRIBE=$(git describe)

echo ${BUILD_SEARCH}
echo ${GIT_DESCRIBE}

gsed -i "s|${BUILD_SEARCH}|${GIT_DESCRIBE}|g" resources/public/js/compiled/predict_prostate.js
