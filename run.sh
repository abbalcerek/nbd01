#!/bin/bash

# drop and reimport data
mongoimport \
  --db nbd --collection people --jsonArray --drop \
  --authenticationDatabase admin -u root -p example \
  --file cwiczenia2.json

for i in $(seq 15 $END); 
do 
mongo -u root -p example --authenticationDatabase admin \
  --quiet nbd zapytanie_$i.js > wyniki_$i.json 
done
