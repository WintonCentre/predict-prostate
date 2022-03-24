#!/usr/bin/env sh
echo "===============Building files============="
lein clean
lein with-profile rum-react-patch cljsbuild once min-edit
