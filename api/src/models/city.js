const mongoose = require("mongoose");

const CitiesScheme = new mongoose.Schema(
  {
    cityId: {
      type: Number,
      unique: true,
      primaryKey: true,
    },
    nameCity: {
      type: String,
      unique: true,
    },
    codeIataCity: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("city", CitiesScheme);