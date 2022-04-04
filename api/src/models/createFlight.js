const mongoose = require("mongoose");

const CreateFlightScheme = new mongoose.Schema(
  {
    origin: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    createdByUser: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("createFlight", CreateFlightScheme);