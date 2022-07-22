const bcrypt = require('bcrypt');

const hashPassword = (plainTextPass) => {
  const saltRounds = Number(process.env.SALT_ROUNDS);

  return bcrypt.hash(plainTextPass, saltRounds) 
    .then(hash => {
      return hash;
    });
}

const comparePasswords = (plainTextPass, hash) => {
  return bcrypt.compare(plainTextPass, hash)
    .then(res => res);
}

module.exports = {
  hashPassword,
  comparePasswords
}
