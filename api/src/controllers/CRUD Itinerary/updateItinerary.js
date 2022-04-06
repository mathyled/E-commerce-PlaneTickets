const { itineraryModel } = require("../../models");

const updateItinerarie = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const update = req.body;

    itineraryModel.findOneAndUpdate(
      id,
      update,
      { new: true },
      (err, itinerarie) => {
        if (err)
          return res.status(500).send({ message: `Error updating : ${err}` });
        if (!itinerarie)
          return res.status(404).send({ message: `Itinerary doest not exist` });

        res.status(200).send({ itinerarie });
      }
    );
  } catch (error) {
    res.status(400).send({ message: `Error updating itinerary: ${error}` });
  }
};

module.exports = { updateItinerarie };
