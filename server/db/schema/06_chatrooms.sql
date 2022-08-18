DROP TABLE IF EXISTS chatrooms CASCADE;

CREATE TABLE chatrooms (
  id SERIAL PRIMARY KEY NOT NULL,
  listing_id INT NOT NULL REFERENCES listings(id),
  renter_id INT NOT NULL REFERENCES users(id)
);
