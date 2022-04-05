// const axios = require("axios");
// const { citiesDbModel } = require("../models");
// const { AVIATION_API_KEY } = process.env;
// const airportsByCities_Cities = require('./AirportsByCities_Cities.json')
const models = require("./models/index");

const getAllCities = (req, res) => {
    const citiesData = models.getCities();
    res.status(200).send({ message: "success", data: citiesData });
};

module.exports = {
  getAllCities,
};
