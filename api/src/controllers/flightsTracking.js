const axios = require("axios");
// const { objDataFlight } = require("../helpers");
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

// const getFlightByNumber = async (req, res) => {
//   try {
//     const { flightNumber } = req.params;
//     console.log(flightNumber);
//     const apiFlights = await axios.get(
//       `https://aviation-edge.com/v2/public/flights?key=${AVIATION_API_KEY}&flightNumber=${flightNumber}`
//     );

//     const data = apiFlights.data.map((e) => {
//       return {
//         aircraft: e.aircraft,
//         airline: e.airline,
//       };
//     });

//     res.status(200).send(data);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({ message: "error getting flights" });
//   }
// };

module.exports = {
  getApiFlights,
  // getFlightByNumber,
};
