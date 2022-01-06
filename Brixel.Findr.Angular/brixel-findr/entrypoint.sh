#!/bin/sh
if [ -z "$APIURL" ]
then
    echo "No APIURL found, aborting..."
    exit
else
    echo "APIURL found: $APIURL"
fi

echo "{ \"apiURL\": \"$APIURL\", \"googleMapsKey\": \"$GOOGLEMAPSKEY\"  }"  > ./usr/share/nginx/html/assets/config/config.json

echo "Starting nginx..."
nginx -g "daemon off;"
