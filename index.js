const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// // Socket
// io.on("connection", (socket) => {
//   console.log("a user connected");

//   // Disconnect event
//   socket.on("disconnect", () => {
//     console.log("a user disconnected");
//   });

//   // Send message to everyone
//   socket.on("chat message", (message) => {
//     io.emit("message: " + message);
//   });
// });

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
