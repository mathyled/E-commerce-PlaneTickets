const express = require("express");
const { getFlights, getFlightDetail } = require("../controllers/flights");
const router = express.Router();

router.get("/", getFlights); // ej: http://localhost:3001/api/flights?city={AEP}&date={2022-04-15}
router.get("/detail/:id", getFlightDetail);

module.exports = router;
