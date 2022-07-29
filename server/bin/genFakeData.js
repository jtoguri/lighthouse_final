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

let insertString = 
  `INSERT INTO users
    (first_name, last_name, email, address) VALUES
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

  /*users.push({
    firstName: first,
    lastName: last,
    email,
    address: addresses[count] 
  });*/

  const address = addresses[count];

  const street = checkForApost(address.street);
  const city = checkForApost(address.city);
  const province = address.province
  const zip = address.zip
  
  insertString += ` ('${first}', '${last}', '${email}',
  '${street}, ${city}, ${province}, ${zip}')`;
  
  insertString += (count === maxCount - 1) ? ';' : ',';

  count ++;
}


const writeQuery = async() => {
  await fs.writeFile('../db/seeds/02_fake_hosts.sql', insertString);
  return;
}

writeQuery();


//console.log(users);
