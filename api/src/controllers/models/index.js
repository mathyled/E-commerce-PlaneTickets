const pictures = require("../pictures.json");
const airportsCities = require("../AirportsByCities_Cities.json");

// Aiports and cities

const getCities = () => {
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
                citiesData[i]["nameCountry"] = airportsData[j]["nameCountry"];
                citiesData[i]["airports"].push(airportsData[j])
            };
        };
    }; // citiesData es el arreglo
    return citiesData
};

// Le agregamos las imagenes

const completeCities = () => {
    let citiesData = getCities();
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
    return citiesData;
};

module.exports = {
    getCities,
    completeCities,
};
