const { FlightCartModel } = require("../../models");

const getAllFlightCart = async (req, res) => {
  const qNew = req.query.new;
  try {
    if (qNew) {
      const flightCart = await FlightCartModel.find().sort({ _id: -1 });

      res.status(200).send({ status: "success", data: flightCart });
    } else {
      const flightCart = await FlightCartModel.find();
      res.status(200).send({ status: "success", data: flightCart });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "error getting flight cart " });
  }
};

module.exports = {
  getAllFlightCart,
};
