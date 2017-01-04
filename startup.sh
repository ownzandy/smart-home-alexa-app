#!/bin/bash
fuser -n tcp -k 8081
fuser -n tcp -k 4567
fuser -n tcp -k 3000
sleep 5
USER=$1 PASSWORD=$2 ruby /home/pi/Development/smart-home-sensi-thermostat/server.rb &
USER=$1 PASSWORD=$2 IP=$3 node /home/pi/Development/smart-home-samsung-tv/index.js &
USER=$1 PASSWORD=$2 node /home/pi/Development/smart-home-alexa-app/index.js &
