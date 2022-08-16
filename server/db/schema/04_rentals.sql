-- Drop and recreate the rentals table

DROP TABLE IF EXISTS rentals CASCADE;
CREATE TABLE rentals (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INT NOT NULL REFERENCES users(id),
  renter_id INT NOT NULL REFERENCES users(id),
  vehicle_id INT NOT NULL REFERENCES vehicles(id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  total_price VARCHAR(10) NOT NULL
  --dates,
  --duration,
  --location
);
