const mongoose = require("mongoose");

const CitiesScheme = new mongoose.Schema(
  {
    nameCity: {
      type: String,
    },
    codeIataCity: {
      type: String,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("city", CitiesScheme);
