const amadeus = require("../helpers/amadeus");
const { flightOffer } = require("../models");
const airportsByCities_Cities = require('./AirportsByCities_Cities.json')

const flightOffers = async (req, res) => {
  try {
    const { origin, destination, departureDate, adults } = req.query;

    //Airports
    
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

    //offers
    const offer = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: departureDate,
      adults: adults,
    });
    let flights = offer.data.map(flight => {
      return {
        id: flight.id,
        itineraries: flight.itineraries,
        price: flight.price,
        travelerPricings: flight.travelerPricings,
      };
    });

    for(let i = 0; i < flights.length; i++) {
      for(let j = 0; j < citiesData.length; j++) {
        if(citiesData[j]["airports"].length > 0){
          for(let k = 0; k < citiesData[j]["airports"].length; k++) {
            if(flights[i]["itineraries"][0]["segments"][0]["departure"]["iataCode"] === citiesData[j]["airports"][k]["codeIataAirport"]) {
              flights[i].nameCity = citiesData[j]["nameCity"];
            };
          };
        };
      };
    };

    if(flightOffer.length > 0) {
      await flightOffer.deleteMany({});
      await flightOffer.insertMany(flights);
    };
    const flightOffersDb = await flightOffer.find();
    res.status(200).send({ message: "success", data: flightOffersDb});
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "error",
    });
  }
};

const getOfferDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const flight = await flightOffer.find({"id": id});
    res.status(200).send({ status: "success", data: { offer: flight } });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "error getting flights" });
  }
};

module.exports = {
  flightOffers,
  getOfferDetail,
};
