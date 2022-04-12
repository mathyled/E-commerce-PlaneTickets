const mongoose = require("mongoose");

const FlightsScheme = new mongoose.Schema(
  {
    weekday: {
      type: String,
    },
    departure: {
      type: Object,
    },
    arrival: {
      type: Object,
    },
    aircraft: {
      type: Object,
    },
    airline: {
      type: Object,
    },
    flight: {
      type: Object,
    },
    codeshared: {
      type: Object,
    },
    date: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("flights", FlightsScheme);
