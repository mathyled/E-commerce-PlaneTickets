const express = require("express");
const router = express.Router();
const { getApiAllCities } = require("../controllers/citiesDb");

router.get("/", getApiAllCities);

module.exports = router;
