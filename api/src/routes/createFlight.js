const express = require("express");
const router = express.Router();
const { getFlightsDb, createFlightDb } = require("../controllers/createFlightDb");

router.get("/", getFlightsDb);
router.post("/", createFlightDb);

module.exports = router;