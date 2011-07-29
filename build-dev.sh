#! /bin/bash

cljsc src/cljs '{:output-dir "static-resources/js-dev"}' > static-resources/js-dev/client-deps.js
