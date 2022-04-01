const express = require("express");
const router = express.Router();
const { getApiFlights } = require("../controllers/flightsTracking");

router.get("/", getApiFlights);

module.exports = router;
