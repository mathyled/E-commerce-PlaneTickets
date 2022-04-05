const axios = require("axios");
const pictures = require("../pictures.json");
const airportsCities = require("../AirportsByCities_Cities.json");
// const { AVIATION_API_KEY } = process.env; no trae la apiKey

// console.log("pictures")
// console.log(pictures[0])

// let flights = [];



// Aiports and cities

const airportsByCity = airportsCities.airportsByCities;
const cities = airportsCities.cities;

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

// console.log("cities")
// console.log(citiesData[0])


// Cities with images

for(let i = 0; i < pictures.length; i++) {
    for(let j = 0; j < citiesData.length; j++) {
        if(citiesData[j]["airports"].length > 0) {
            for(let k = 0; k < citiesData[j]["airports"].length; k++) {
                if(citiesData[j]["airports"][k]["codeIataAirport"] === pictures[i]["destination"]) {
                    citiesData[j]["airports"][k]["image"] = pictures[i]["image"];
                };
            };
        };
    };
};

// console.log(citiesData[0])


// Arreglo final con toda la info
async function getFlights() {
    let flightsApi = await axios.get(`https://aviation-edge.com/v2/public/flightsFuture?key=d92357-cb8e74&type=departure&iataCode=MAD&date=2022-04-13`); // Cambiar a la variable
    let flights = flightsApi.data;

    for(let i = 0; i < flights.length; i++) {
        function random(min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }
        flights[i]["price"] = random(200,400);
        for(let j = 0; j < citiesData.length; j++) {
            for(let k = 0; k < citiesData[j]["airports"].length; k++) {
                if(flights[i]["arrival"]["iataCode"] === citiesData[j]["airports"][k]["codeIataAirport"].toLowerCase()) {
                    flights[i]["arrival"]["nameCity"] = citiesData[j]["nameCity"];
                    flights[i]["arrival"]["image"] = citiesData[j]["airports"][k]["image"];
                };
                if(flights[i]["departure"]["iataCode"] === citiesData[j]["airports"][k]["codeIataAirport"].toLowerCase()) {
                    flights[i]["departure"]["nameCity"] = citiesData[j]["nameCity"];
                    flights[i]["departure"]["image"] = citiesData[j]["airports"][k]["image"];
                };
            };
        };
    };
    // let aerolinea = flights.filter(e => e.airline.name !== "aerolineas argentinas")
    console.log("flights");
    console.log(flights);
    console.log(flights.length);
};

getFlights();

// let fecha = new Date().toString();
// console.log(fecha)

// console.log(fecha[8])
// console.log(fecha[9])


// console.log(flights[0])
