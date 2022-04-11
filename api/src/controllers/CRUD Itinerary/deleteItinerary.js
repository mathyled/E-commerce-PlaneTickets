const { ItineraryModel } = require("../../models");

const deleteItinerary = async (req, res) => {
  const id = { _id: req.params.id };
  try {
    const data = await ItineraryModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Itinerary deleted", data });
  } catch (error) {
    res.status(400).send({ message: `Error deleting itinerarie: ${error}` });
  }
};

module.exports = {
  deleteItinerary,
};
