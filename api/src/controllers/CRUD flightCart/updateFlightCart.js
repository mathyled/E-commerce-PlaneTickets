const { FlightCartModel } = require("../../models");

const updateFlightCart = async (req, res) => {
  try {
    const updatedFlight = await FlightCartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res
      .status(200)
      .send({ message: "Flight cart updated successfully", updatedFlight });
  } catch (err) {
    res.status(400).send({ message: `Error updating flight cart: ${err}` });
  }
};

module.exports = {
  updateFlightCart,
};
