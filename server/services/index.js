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
        "select vehicles.*, users.first_name, users.email from vehicles join listings on vehicles.id = listings.vehicle_id join users on users.id = listings.owner_id where listings.id = $1;",
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

const getNearbyListings = (coordinates) => {
  const searchLocation = `POINT(${Number(coordinates.lat)} ${Number(
    coordinates.lon
  )})`;

  return (
    db
      .query(
        `select distinct on (listings.id, ST_Distance(ST_GeographyFromText($1), listings.location)) listings.id, vehicles.*,
      images.photo, listings.owner_id, listings.vehicle_id,
      ST_Distance(ST_GeographyFromText($1), listings.location),
      ST_AsText(listings.location) as location from listings join
      vehicles on vehicles.id = listings.vehicle_id left join images on
      listings.id = images.listing_id order by
      ST_Distance(ST_GeographyFromText($1), listings.location) limit 100`,
        [searchLocation]
      )

      /*return db
      .query(
        `select ST_Distance(ST_GeographyFromText($1), listings.location)
        from listings limit 1;`, [searchLocation]
      )*/
      .then((res) => res.rows)
  );
};

const getImages = async (id) => {
  return db
    .query("SELECT photo FROM images WHERE listing_id = $1;", [id])
    .then((res) => {
      return res.rows;
    });
};

const getHomePageListings = () => {
  return db
    .query(
      `select distinct on (listings.id) *, images.photo,
    users.first_name from
    listings left join images on listings.id = images.listing_id join
    users on listings.owner_id = users.id order
    by listings.id limit 10;`
    )
    .then((res) => res.rows);
};

const createBooking = async ({
  owner_id,
  renter_id,
  vehicle_id,
  start_date,
  end_date,
  total_price,
}) => {
  const queryString = `INSERT INTO rentals
      (owner_id, renter_id, vehicle_id, start_date, end_date, total_price) VALUES
        ($1, $2, $3, $4, $5, $6)
      RETURNING *;`;

  const queryParams = [
    owner_id,
    renter_id,
    vehicle_id,
    start_date,
    end_date,
    total_price,
  ];

  return db.query(queryString, queryParams).then((res) => {
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
        "select rentals.*, users.first_name, users.last_name, vehicles.make, vehicles.model, vehicles.year from rentals JOIN users ON rentals.owner_id = users.id JOIN vehicles ON rentals.vehicle_id = vehicles.id where rentals.renter_id = $1 order by rentals.id desc;",
        [id]
      )
      .then((res) => {
        return res.rows;
      })
  );
};

const deleteBooking = async (id) => {
  const queryString = `DELETE FROM rentals WHERE rentals.id = $1`;

  const queryParams = [id];

  return db.query(queryString, queryParams).then((res) => {
    return res.rows;
  });
};

const getChatRooms = (userId) => {
  const queryString = `select users.first_name as sender_name, *from chatrooms join chatmessages on
  chatrooms.id = chatmessages.chatroom_id join users on
  chatmessages.sender_id = users.id where renter_id = $1 or
  host_id = $1;` 

  const queryParams = [userId];

  return db.query(queryString, queryParams).then((res) => {
    return res.rows; 
  });
}


module.exports = {
  getUsers,
  getUserByEmail,
  createNewUser,
  getListing,
  getUserById,
  createNewUser,
  revokeRefreshTokensForUser,
  getNearbyListings,
  getImages,
  createBooking,
  getBooking,
  getHomePageListings,
  deleteBooking,
  getChatRooms
};
