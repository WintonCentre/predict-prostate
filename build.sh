#!/usr/bin/env sh
echo "===============Building files============="
lein clean
lein cljsbuild once min
