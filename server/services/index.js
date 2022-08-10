const db = require("../db");

const getUsers = async () => {
  return db.query("SELECT * FROM users;", []).then((res) => {
    return res.rows;
  });
};

const getUserByEmail = async (email) => {
  return db
    .query("SELECT * FROM users WHERE email=$1;", [email])
    .then((res) => {
      return res.rows[0];
    });
};

const getUserById = async (userId) => {
  return db
    .query('SELECT * FROM users WHERE id=$1;', [userId])
    .then(res => {
      return res.rows[0];
    });
}

const createNewUser = async ({ firstName, lastName, email, hash }) => {
  const queryString = `INSERT INTO users
      (first_name, last_name, email, password) VALUES
        ($1, $2, $3, $4)
      RETURNING *;`;

  const queryParams = [firstName, lastName, email, hash];

  return db.query(queryString, queryParams).then((res) => {
    console.log(res);
    return res.rows[0];
  });
};

const getListing = async (id) => {
  return db
    /*.query(
      "SELECT vehicles.*, images.photo FROM vehicles JOIN listings ON
      vehicles.owner_id = listings.owner_id JOIN images ON vehicles.id =
      images.vehicle_id WHERE listings.id = $1;"*/

    .query("select vehicles.*, users.first_name from vehicles join listings on vehicles.id = listings.vehicle_id join users on users.id = listings.owner_id where listings.id = $1;",
      [id]
    )
    .then((res) => {
      return res.rows;
    });
};

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

const getAllListings = () => {
  return db
    .query("select id, owner_id, vehicle_id, ST_AsText(location) as location from listings limit 20;", [])
    .then(res => res.rows);
}

module.exports = {
  getUsers,
  getUserByEmail,
  createNewUser,
  getListing,
  getUserById,
  createNewUser,
  revokeRefreshTokensForUser,
  getAllListings
};
