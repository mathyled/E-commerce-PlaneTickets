const amadeus = require("../helpers/amadeus");

const flightOffers = async (req, res) => {
  try {
    const { origin, destination, departureDate, adults } = req.query;

    const offer = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: departureDate,
      adults: adults,
    });
    res.status(200).send({ status: "success", data: { offer: offer.data } });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "error getting flights" });
  }
};

const flightInspiration = async (req, res) => {
  try {
    const { origin } = req.query;

    const flight = await amadeus.shopping.flightDestinations.get({
      origin: origin,
    });
    res.status(200).send({ status: "success", data: { offer: flight.data } });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "error getting flights" });
  }
};

module.exports = {
  flightOffers,
  flightInspiration,
};
