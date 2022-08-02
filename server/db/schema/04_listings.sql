-- Drop and recreate the listings table

DROP TABLE IF EXISTS rentals CASCADE;
CREATE TABLE listings (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INT NOT NULL REFERENCES users(id),
  -- does the listing table need a reference to the renter_id? 
  -- renter_id INT NOT NULL REFERENCES users(id),
  vehicle_id INT NOT NULL REFERENCES vehicles(id)
  -- status
);