require("dotenv").config();
const { AMADEUS_API_KEY, AMADEUS_API_SECRET } = process.env;
const Amadeus = require("amadeus");

const amadeus = new Amadeus({
  clientId: AMADEUS_API_KEY,
  clientSecret: AMADEUS_API_SECRET,
});

module.exports = amadeus;
