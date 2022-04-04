// const axios = require("axios");
// const { citiesDbModel } = require("../models");
// const { AVIATION_API_KEY } = process.env;
const airportsByCities_Cities = require('../AirportsByCities_Cities.json')

// get cities from aviation api

const getApiAllCities = async (req, res) => {
  try {
    const airportsByCity = airportsByCities_Cities.airportsByCities;
    const cities = airportsByCities_Cities.cities;

    const airportsData = airportsByCity.map((city) => {
      return {
        codeIataCity: city.codeIataCity,
        codeIataAirport: city.codeIataAirport,
        nameAirport: city.nameAirport,
        nameCountry: city.nameCountry,
      };
    });
    let citiesData = cities.map((city) => {
      return {
        codeIataCity: city.codeIataCity,
        nameCity: city.nameCity,
      };
    });
    

    for(let i = 0; i < citiesData.length; i++) {
      citiesData[i].airports = [];
      for(let j = 0; j < airportsData.length; j++) {
        if(citiesData[i]["codeIataCity"] === airportsData[j]["codeIataCity"]) {
          citiesData[i]["airports"].push(airportsData[j])
        };
      };
    };
    res.status(200).send({ message: "success", data: citiesData });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "error",
    });
  }
};

module.exports = {
  getApiAllCities,
};
