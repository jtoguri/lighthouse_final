const db = require('../db');

const getUsers = async () => {
  return db
    .query('SELECT * FROM users;', [])
    .then(res => {
      return res.rows; 
    });
};

module.exports = {
  getUsers
};
