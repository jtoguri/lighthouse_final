require('dotenv').config()

const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const { verifyRefreshToken } = require('./helpers');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const apiRouter = require('./routes');
const refreshToken = require('./routes/refresh_token');

const { isAuth } = require('./middleware');

const PORT = process.env.PORT || 3001;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
  cors: {
    origin: "http://localhost:3000",
  }
});

app.use(isAuth);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.json({ message: "lighthose final" });
});

app.post('/refresh_token', refreshToken);

io.on("connection", (socket) => {
  console.log("client connection");
  console.log(socket.id);
  console.log(socket.username);

  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userID: id,
      username: socket.username,
    });
  }
  socket.emit("users", users);
  socket.broadcast.emit("users", users);

  socket.on("private message", ({ content, to }) => {
    socket.to(to).emit("private message", {
      content,
      from: socket.id,
    });
  });
});


io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  next();
});

httpServer.listen(PORT, () => {
  console.log(`lighthouse final is live, listening on port: ${PORT}`)
});
