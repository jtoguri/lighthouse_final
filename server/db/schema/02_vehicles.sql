-- Drop and recreate the vehicles table

DROP TABLE IF EXISTS vehicles CASCADE;
CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INT NOT NULL REFERENCES users(id),
  vin VARCHAR(17) NOT NULL,
  description TEXT,
  license_plate VARCHAR(255),
  make TEXT,
  model TEXT,
  year SMALLINT
  --images
);
