---- Drop and recreate users table

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email TEXT NOT NULL,
  token_version INT DEFAULT 0 NOT NULL, 
  phone VARCHAR(255),
  password VARCHAR(255),
  address VARCHAR(255)
);
