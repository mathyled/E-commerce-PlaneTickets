const axios = require("axios");
const { AVIATION_API_KEY } = process.env;

// get flights from api

const getApiFlights = async (req, res) => {
  try {
    const apiFlights = await axios.get(
      `https://aviation-edge.com/v2/public/flights?key=${AVIATION_API_KEY}&limit=15`
    );

    const data = apiFlights.data.map((e) => {
      return {
        aircraft: e.aircraft,
        airline: e.airline,
        arrival: e.arrival,
        departureAirport: e.departure,
        flight: e.flight,
        geography: e.geography,
        speed: e.speed,
        status: e.status,
      };
    });
    // console.log(data);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "error getting flights" });
  }
};

module.exports = {
  getApiFlights,
};
