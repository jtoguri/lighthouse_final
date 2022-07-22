const db = require('../db');

const getUsers = async () => {
  return db
    .query('SELECT * FROM users;', [])
    .then(res => {
      return res.rows; 
    });
};

const getUserByEmail = async (email) => {
  return db
    .query('SELECT * FROM users WHERE email=$1;', [email])
    .then(res => {
      return res.rows[0];
    });
}

module.exports = {
  getUsers,
  getUserByEmail
};
