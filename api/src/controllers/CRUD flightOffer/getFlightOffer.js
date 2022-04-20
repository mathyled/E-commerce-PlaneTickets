const { flightOffer } = require("../../models");

const getFlightOffer = async (req, res) => {
  try {
    const { id } = req.params;

    const flight = await flightOffer.findById(id);
    res.status(200).send({ status: "success", data: flight });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "error getting flights" });
  };
};

module.exports = {
  getFlightOffer,
};
