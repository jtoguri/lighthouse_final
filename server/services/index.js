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
  return db.query("SELECT * FROM users WHERE id=$1;", [userId]).then((res) => {
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
  return (
    db
      /*.query(
      "SELECT vehicles.*, images.photo FROM vehicles JOIN listings ON
      vehicles.owner_id = listings.owner_id JOIN images ON vehicles.id =
      images.vehicle_id WHERE listings.id = $1;"*/

      .query(
        "select vehicles.*, users.first_name from vehicles join listings on vehicles.id = listings.vehicle_id join users on users.id = listings.owner_id where listings.id = $1;",
        [id]
      )
      .then((res) => {
        return res.rows;
      })
  );
};

const revokeRefreshTokensForUser = (userId) => {
  const queryString = `UPDATE users SET token_version = token_version+1
      WHERE id = $1
    RETURNING token_version;`;

  const queryParams = [userId];

  return db.query(queryString, queryParams).then((res) => {
    console.log(res);
    return true;
  });
};

const getAllListings = () => {
  return db
    .query(
      `select vehicles.*, images.photo, listings.id, listings.owner_id, listings.vehicle_id, ST_AsText(listings.location) as location from listings join vehicles on vehicles.id = listings.vehicle_id left join images on listings.id = images.listing_id limit 20;`,
      []
    )
    .then((res) => res.rows);
};

const getImages = async (id) => {
  return db
    .query("SELECT photo FROM images WHERE listing_id = $1;", [id])
    .then((res) => {
      return res.rows;
    });
};

const createBooking = async ({ owner_id, renter_id, vehicle_id }) => {
  const queryString = `INSERT INTO rentals
      (owner_id, renter_id, vehicle_id) VALUES
        ($1, $2, $3)
      RETURNING *;`;

  const queryParams = [owner_id, renter_id, vehicle_id];

  return db.query(queryString, queryParams).then((res) => {
    console.log(res);
    return res.rows[0];
  });
};

const getBooking = async (id) => {
  return (
    db
      /*.query(
      "SELECT vehicles.*, images.photo FROM vehicles JOIN listings ON
      vehicles.owner_id = listings.owner_id JOIN images ON vehicles.id =
      images.vehicle_id WHERE listings.id = $1;"*/

      .query(
        "select rentals.*, users.first_name, users.last_name, vehicles.make, vehicles.model, vehicles.year from rentals JOIN users ON rentals.owner_id = users.id JOIN vehicles ON rentals.vehicle_id = vehicles.id where rentals.owner_id = $1 order by rentals.id asc;",
        [id]
      )
      .then((res) => {
        return res.rows;
      })
  );
};

module.exports = {
  getUsers,
  getUserByEmail,
  createNewUser,
  getListing,
  getUserById,
  createNewUser,
  revokeRefreshTokensForUser,
  getAllListings,
  getImages,
  createBooking,
  getBooking,
};
