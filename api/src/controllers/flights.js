const axios = require("axios");
const models = require("./models/index");
const { flightsDb } = require("../models");
const { AVIATION_API_KEY } = process.env;

const getFlights = async (req, res) => {
    try {
        const { city, date } = req.query;
        let citiesData = models.completeCities();
        let flightsApi = await axios.get(`https://aviation-edge.com/v2/public/flightsFuture?key=${AVIATION_API_KEY}&type=departure&iataCode=${city}&date=${date}`); // Cambiar a la variable
        let flights = flightsApi.data;

        function random(min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }
        for(let i = 0; i < flights.length; i++) {
            flights[i]["date"] = date.split(9, date.length - 1)[0];
            flights[i]["price"] = random(200,400);
            for(let j = 0; j < citiesData.length; j++) {
                for(let k = 0; k < citiesData[j]["airports"].length; k++) {
                    if(flights[i]["arrival"]["iataCode"] === citiesData[j]["airports"][k]["codeIataAirport"].toLowerCase()) {
                        flights[i]["arrival"]["nameCity"] = citiesData[j]["nameCity"];
                        flights[i]["arrival"]["nameCountry"] = citiesData[j]["airports"][k]["nameCountry"];
                        flights[i]["arrival"]["nameAirport"] = citiesData[j]["airports"][k]["nameAirport"];
                        flights[i]["arrival"]["image"] = citiesData[j]["airports"][k]["image"];
                    };
                    if(flights[i]["departure"]["iataCode"] === citiesData[j]["airports"][k]["codeIataAirport"].toLowerCase()) {
                        flights[i]["departure"]["nameCity"] = citiesData[j]["nameCity"];
                        flights[i]["departure"]["nameCountry"] = citiesData[j]["airports"][k]["nameCountry"];
                        flights[i]["departure"]["nameAirport"] = citiesData[j]["airports"][k]["nameAirport"];
                        flights[i]["departure"]["image"] = citiesData[j]["airports"][k]["image"];
                    };
                };
            };
        };

        if(flightsDb.length > 0) {
            await flightsDb.deleteMany({});
            await flightsDb.insertMany(flights);
        };
        const flightsInDb = await flightsDb.find();

        // await flightsDb.insertMany(flights);
        // const flightsInDb = await flightsDb.find();
        // const flightsData = flightsInDb.filter(e => e.departure.iataCode.toLowerCase() === city.toLowerCase());
        
        res.status(200).send({ status: "success", data: flightsInDb });
    }
    catch(error) {
        console.log(error);
        res.status(400).send({ message: "error getting flights" });
    };
};

const getFlightDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const flightsInDb = await flightsDb.find({ "_id": id });
        res.status(200).send({ status: "success", data: flightsInDb });
    }
    catch(error) {
        console.log(error);
        res.status(400).send({ message: "error getting flight" });
    };
};

const deleteFlight = async (req, res) => {
    try {
        const { id } = req.params;
        await flightsDb.findByIdAndDelete(id);
        res.status(200).send({ status: "success", data: "deleted flight" });
    }
    catch(error) {
        console.log(error);
        res.status(400).send({ message: "error deleting flight" });
    };
};

module.exports = {
    getFlights,
    getFlightDetail,
    deleteFlight,
};
