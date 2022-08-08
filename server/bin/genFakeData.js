#!/usr/bin/env node

if (process.argv.length > 3) {
  console.log("Invalid script usage");
  return;
}

const { faker } = require( '@faker-js/faker/locale/en_CA');
const fs = require('fs/promises');

const addresses = require('../fake_data/fakeAddresses.json');

const checkForApost = (word) => {
  return word.split("'").join("''");
}

let userString = 
  `INSERT INTO users
    (first_name, last_name, email, address, location) VALUES
  `;
let vehicleString = 
  `INSERT INTO vehicles
    (owner_id, vin, make, model) VALUES
  `;
let listingString = 
  `INSERT INTO listings
    (owner_id, vehicle_id) VALUES
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

  const location = faker.address.nearbyGPSCoordinate([43, -79], 1000,
  true);

  userString += ` ('${first}', '${last}', '${email}',
  '${street}, ${city}, ${province}, ${zip}', '${location[0]} ${location[1]}')`;
  
  userString += (count === maxCount - 1) ? ';' : ',';

  const owner_id = count + 2;

  const vin = faker.vehicle.vin();

  const make = faker.vehicle.manufacturer();

  const model = faker.vehicle.model();

  vehicleString += ` (${owner_id}, '${vin}', '${make}', '${model}')`;
  vehicleString += (count === maxCount - 1) ? ';' : ',';

  const vehicleId = count + 1;

  listingString += ` (${owner_id}, ${vehicleId})`;
  listingString += (count === maxCount - 1) ? ';' : ',';

  count ++;
}


const writeQueries = async() => {
  await fs.writeFile('../db/seeds/02_fake_hosts.sql', userString);
  await fs.writeFile('../db/seeds/04_fake_vehicles.sql', vehicleString);
  await fs.writeFile('../db/seeds/05_fake_listings.sql', listingString);
  return;
}

writeQueries();


//console.log(users);
