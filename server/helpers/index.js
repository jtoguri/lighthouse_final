const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

const generateAccessToken = (data) => {
  const secretKey = process.env.JWT_SECRET;

  return jwt.sign(data, secretKey, { expiresIn: '7d' });
}

module.exports = {
  hashPassword,
  comparePasswords,
  generateAccessToken
}
