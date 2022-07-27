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

const getUserById = async (userId) => {
  return db
    .query('SELECT * FROM users WHERE id=$1;', [userId])
    .then(res => {
      return res.rows[0];
    });
}

const createNewUser = async ({ firstName, lastName, email, hash }) => {
  const queryString = 
    `INSERT INTO users
      (first_name, last_name, email, password) VALUES
        ($1, $2, $3, $4)
      RETURNING *;`;

  const queryParams = [
    firstName,
    lastName,
    email,
    hash
  ];

  return db
    .query(queryString, queryParams)
    .then(res => {
      console.log(res);
      return res.rows[0];
    });
}

const revokeRefreshTokensForUser = (userId) => {
  const queryString = 
    `UPDATE users SET token_version = token_version+1
      WHERE id = $1
    RETURNING token_version;`;
  
  const queryParams = [userId];

  return db
    .query(queryString, queryParams)
    .then(res => {
      console.log(res);
      return true;
    });
}

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  createNewUser,
  revokeRefreshTokenForUser
};
