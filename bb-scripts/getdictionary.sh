#!/usr/bin/env sh

#
# Gets the static production dictionary from the database
#
# Run from the project root with
# ./getdictionary.sh
#
# Future variants might pull single languages so they can be loaded individually.
#
# The jet utility comes from `brew install borkdude/brew/jet`
# See borkdude on github.
#
# You also need to install babashka from homebrew
#

curl -d --get --silent -- "https://api-prostate.wintoncentre.uk/api/upserts/all" |
 jet --from json --to edn |
 ./getdictionary.clj