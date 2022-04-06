const { itineraryModel } = require("../../models");

const deleteItinerary = async (req, res) => {
  try {
    const id = { _id: req.params.id };

    const data = await itineraryModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Itinerary deleted", data });
  } catch (error) {
    res.status(400).send({ message: `Error deleting itinerarie: ${error}` });
  }
};

module.exports = { deleteItinerary };
