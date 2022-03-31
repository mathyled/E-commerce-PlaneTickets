const express = require("express");
const router = express.Router();
const {
  getApiFlights,
  //   getFlightByNumber,
} = require("../controllers/flightsTracking");

router.get("/", getApiFlights);
// router.get("/", getFlightByNumber);

module.exports = router;
