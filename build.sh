#! /bin/bash

cljsc src/cljs {:optimizations :advanced} > static-resources/js/client.js
compass compile
