const { FlightCartModel } = require("../../models");

const getFlightCart = async (req, res) => {
  try {
    const { id } = req.params;
    const flightCart = await FlightCartModel.findById(id);
    res.status(200).send({ status: "success", data: flightCart });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "error getting flight cart " });
  }
};

module.exports = {
  getFlightCart,
};
