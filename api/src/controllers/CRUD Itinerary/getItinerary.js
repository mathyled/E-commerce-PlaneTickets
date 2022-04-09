const { ItineraryModel } = require("../../models/");

const getItinerary = async (req, res) => {
  try {
    const data = await ItineraryModel.find();
    res.send({ message: "Itineraries retrieved successfully", data });
  } catch (error) {
    res.status(400).send({ message: `Error retrieving itineraries: ${error}` });
  }
};

module.exports = {
  getItinerary,
};
