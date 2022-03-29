require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./database/config");
const server = express();

server.use(cors());
server.use(express.json());

server.use("/api", require("./routes"));

dbConnect();

module.exports = server;
