const { flightOffer } = require("../../models");

const createFlightOffer = async (req, res) => {
    try {
      const { id, weekday, departure, arrival, aircraft, airline, flight, codeshared, date, price } = req.body;
      const newFlight = { 
        _id: id,
        weekday,
        departure,
        arrival,
        aircraft,
        airline,
        flight,
        codeshared,
        date,
        price,
      };
      const searchId = await flightOffer.findById(id);
      if(searchId === null) {
        await flightOffer.create(newFlight);
      };
      res.status(200).send({ message: "success", data: newFlight });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        message: "error",
      });
    };
  };

module.exports = {
    createFlightOffer,
};
