require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./database/config");
const server = express();

server.use(cors());
server.use(express.json());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/api", require("./routes"));

dbConnect();

module.exports = server;
