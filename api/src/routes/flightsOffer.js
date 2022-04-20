const express = require("express");
const router = express.Router();
const {
  flightOffers,
  getOfferDetail,
  getAllOffers,
} = require("../controllers/flightsController");

router.get("/", flightOffers); // test http://localhost:3001/api/flights?origin=SYD&destination=BKK&departureDate=2022-04-04&adults=2
router.get("/detailspage/:id", getOfferDetail); // test localhost:3001/api/flights/inspiration?origin=MAD
router.get("/getall", getAllOffers);
const {
  createFlightOffer,
} = require("../controllers/CRUD flightOffer/createFlightOffer");
const {
  getFlightOffer,
} = require("../controllers/CRUD flightOffer/getFlightOffer");

router.post("/create", createFlightOffer);
router.get("/:id", getFlightOffer);

module.exports = router;
