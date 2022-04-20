require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { dbConnect } = require("./database/config");
const passport = require("passport");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URI,
    }),
  })
);
server.use(passport.initialize());
server.use(passport.session());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
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
