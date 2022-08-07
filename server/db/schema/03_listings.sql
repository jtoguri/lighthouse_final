
DROP TABLE IF EXISTS listings CASCADE;
CREATE TABLE listings (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INT NOT NULL REFERENCES users(id),
  vehicle_id INT NOT NULL REFERENCES vehicles(id)
  --dates,
  --duration,
  --location
);
