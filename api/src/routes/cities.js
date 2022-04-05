const express = require("express");
const router = express.Router();
const { getAllCities } = require("../controllers/citiesDb");

router.get("/", getAllCities);

module.exports = router;
