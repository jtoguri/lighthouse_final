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
    .query(
      "SELECT vehicles.*, images.img FROM vehicles JOIN listings ON vehicles.owner_id = listings.owner_id JOIN images ON vehicles.id = images.vehicle_id WHERE listings.id = $1;",
      [id]
    )
    .then((res) => {
      return res.rows;
    });
};

module.exports = {
  getUsers,
  getUserByEmail,
  createNewUser,
  getListing,
};
