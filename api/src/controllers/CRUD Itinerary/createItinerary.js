const { itineraryModel } = require("../../models");

const createItinerary = async (req, res) => {
  try {
    const { origin, destination, comment } = req.body;
    const data = await itineraryModel.create({
      origin,
      destination,
      comment,
    });
    res.status(200).send({ message: "Itinerary created successfully", data });
  } catch (error) {
    res.status(400).send({ message: `Error creating itinerary: ${error}` });
  }
};

module.exports = {
  createItinerary,
};
