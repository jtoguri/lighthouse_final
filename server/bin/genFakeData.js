#!/usr/bin/env node

if (process.argv.length > 3) {
  console.log("Invalid script usage");
  return;
}

const { faker } = require( '@faker-js/faker/locale/en_CA');
const fs = require('fs/promises');

const addresses = require('../fake_data/fakeAddresses.json');
const images = require('../fake_data/images.json');

const checkForApost = (word) => {
  return word.split("'").join("''");
}

let userString = 
  `INSERT INTO users
    (first_name, last_name, email, address, location) VALUES
  `;
let vehicleString = 
  `INSERT INTO vehicles
    (owner_id, vin, make, model, description) VALUES
  `;
let listingString = 
  `INSERT INTO listings
    (owner_id, vehicle_id, location) VALUES
  `;

let imageString = 
  `INSERT INTO images
    (listing_id, photo) VALUES
  `;

const seen = {};

const users = [];

let maxCount = addresses.length

if (process.argv[2] && 
  Math.abs(Math.floor(Number(process.argv[2]))) < maxCount) {
    maxCount = Math.abs(Math.floor(Number(process.argv[2])));
}

let count = 0;
while (count < maxCount) {
  let first = faker.name.firstName();
  let last = faker.name.lastName();

  const name = `${first} ${last}`;

  if (seen[name]) continue; 

  seen[name] = true;

  first = checkForApost(first);
  last = checkForApost(last); 

  const email = `${first}${last}@test.com`.toLowerCase();

  const address = addresses[count];

  const street = checkForApost(address.street);
  const city = checkForApost(address.city);
  const province = address.province
  const zip = address.zip

  const location = faker.address.nearbyGPSCoordinate([43.65, -79.4], 10,
  true);

  userString += ` ('${first}', '${last}', '${email}',
  '${street}, ${city}, ${province}, ${zip}', '${location[0]} ${location[1]}')`;
  
  userString += (count === maxCount - 1) ? ';' : ',';

  const owner_id = count + 2;

  const vin = faker.vehicle.vin();

  const make = faker.vehicle.manufacturer();

  const model = faker.vehicle.model();

  const description = `Lorem Ipsum is simply dummy text of the printing
  and typesetting industry. Lorem Ipsum has been the industry
  standard dummy text ever since the 1500s, when an unknown printer
  took a galley of type and scrambled it to make a type specimen
  book. It has survived not only five centuries, but also the leap
  into electronic typesetting, remaining essentially unchanged. It was
  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
  publishing software like Aldus PageMaker including versions of
  Lorem Ipsum.`

  vehicleString += ` (${owner_id}, '${vin}', '${make}', '${model}',
  '${description}')`;
  vehicleString += (count === maxCount - 1) ? ';' : ',';

  let vehicleId, listingId, imageIndex; 
  vehicleId = listingId = imageIndex = count + 1;

  listingString += ` (${owner_id}, ${vehicleId},
  'POINT(${Number(location[0])} ${Number(location[1])})')` 
  listingString += (count === maxCount - 1) ? ';' : ',';

  if (imageIndex >= images.length) {
    imageIndex = imageIndex % images.length; 
  }

  for (let i = 0; i < images[imageIndex]["urls"].length; i++) {
    const url = images[imageIndex].urls[i];

    imageString += ` (${listingId}, '${url}')`;
    
    if (i !== images[imageIndex]["urls"].length - 1) {
      imageString += ',';
    }
  }

  imageString += (count === maxCount - 1) ? ';' : ',';

  count ++;
}


const writeQueries = async() => {
  await fs.writeFile('../db/seeds/02_fake_hosts.sql', userString);
  await fs.writeFile('../db/seeds/04_fake_vehicles.sql', vehicleString);
  await fs.writeFile('../db/seeds/05_fake_listings.sql', listingString);
  await fs.writeFile('../db/seeds/06_images.sql', imageString);
  return;
}

writeQueries();
