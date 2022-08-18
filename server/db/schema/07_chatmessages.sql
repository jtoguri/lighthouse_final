DROP TABLE IF EXISTS chatmessages CASCADE;
CREATE TABLE chatmessages (
  id SERIAL PRIMARY KEY NOT NULL,
  chatroom_id INT NOT NULL REFERENCES chatrooms(id),
  sender_id INT NOT NULL REFERENCES users(id),
  content TEXT
);
