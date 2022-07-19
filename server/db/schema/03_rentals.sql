-- Drop and recreate the rentals table

DROP TABLE IF EXISTS rentals CASCADE;
CREATE TABLE rentals (
  id SERIAL PRIMARY KEY NOT NULL,
  host_id INT NOT NULL REFERENCES users(id),
  renter_id INT NOT NULL REFERENCES users(id),
  vehicle_id INT NOT NULL REFERENCES vehicles(id)
  --dates,
  --duration,
  --location
);
