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

const generateAccessToken = (user) => {
  const secretKey = process.env.ACCESS_TOKEN_SECRET;

  const payload = {
    userID: user.id,
    name: user.firstName
  };

  return jwt.sign(payload, secretKey, { expiresIn: "15m" });
}

const generateRefreshToken = (user) => {
  const secretKey = process.env.REFRESH_TOKEN_SECRET;

  const payload = {
    userID: user.id,
  };

  return jwt.sign(payload, secretKey, { expiresIn: "7d" });
}

const verifyAccessToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch(err) {
    // err
  }
}

const verifyRefreshToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch(err) {
    // err
  }
}

module.exports = {
  hashPassword,
  comparePasswords,
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken
}
