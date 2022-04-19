const express = require("express");
const router = express.Router();
const { createFlightOffer } = require("../controllers/CRUD flightOffer/createFlightOffer");
const { getFlightOffer } = require("../controllers/CRUD flightOffer/getFlightOffer");

router.post("/create", createFlightOffer);
router.get("/:id", getFlightOffer);

module.exports = router;