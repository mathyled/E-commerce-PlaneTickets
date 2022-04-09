const express = require("express");
const { createFlightCart } = require("../controllers/CRUD flightCart/createflightCart");
const { getFlightCart } = require("../controllers/CRUD flightCart/getFlightCart");
const { deleteFlightCart } = require("../controllers/CRUD flightCart/deleteFlightCart");
const router = express.Router();

router.post("/create", createFlightCart);
router.get("/:id", getFlightCart);
router.delete("/delete/:id", deleteFlightCart);

module.exports = router;
