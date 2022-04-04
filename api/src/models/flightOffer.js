const mongoose = require("mongoose");

const FlightOfferScheme = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    nameCity: {
        type: String,
        default: "Sin nombre",
    },
    itineraries: {
      type: Array,
    },
    price: {
      type: Object,
    },
    travelerPricings: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("flightOffer", FlightOfferScheme);