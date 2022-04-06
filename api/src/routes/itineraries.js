const express = require("express");
const router = express.Router();
const {
  createItinerary,
} = require("../controllers/CRUD Itinerary/createItinerary");
const { getItinerary } = require("../controllers/CRUD Itinerary/getItinerary");
const {
  updateItinerarie,
} = require("../controllers/CRUD Itinerary/updateItinerary");
const {
  deleteItinerary,
} = require("../controllers/CRUD Itinerary/deleteItinerary");

router.post("/", createItinerary);
router.get("/", getItinerary);
router.put("/update/:id", updateItinerarie);
router.delete("/delete/:id", deleteItinerary);

module.exports = router;
