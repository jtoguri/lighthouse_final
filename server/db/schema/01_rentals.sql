-- Drop and recreate the rentals table

DROP TABLE IF EXISTS rentals CASCADE;
CREATE TABLE rentals (
  id SERIAL PRIMARY KEY NOT NULL
);
