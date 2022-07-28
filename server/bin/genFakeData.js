const { faker } = require( '@faker-js/faker/locale/en_CA');
const addresses = require('./fakeAddresses.json');

const seen = {};

const users = [];

let count = 0;
while (count < 100) {
  const first = faker.name.firstName();
  const last = faker.name.lastName();

  const name = `${first} ${last}`;

  if (seen[name]) continue; 

  seen[name] = true;

  const email = `${first}${last}@test.com`.toLowerCase();

  users.push({
    firstName: first,
    lastName: last,
    email,
    address: faker.address.cityName()
  });

  count ++;
}

console.log(users);
