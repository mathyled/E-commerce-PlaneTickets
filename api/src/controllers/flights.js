const axios = require("axios");
const models = require("./models/index");

const getFlights = async (req, res) => {
    try {
        const { city, date } = req.query;
        let citiesData = models.getCities();
        let flightsApi = await axios.get(`https://aviation-edge.com/v2/public/flightsFuture?key=d92357-cb8e74&type=departure&iataCode=${city}&date=${date}`); // Cambiar a la variable
        let flights = flightsApi.data;
    
        for(let i = 0; i < flights.length; i++) {
            function random(min, max) {
                return Math.floor((Math.random() * (max - min + 1)) + min);
            }
            flights[i]["id"] = i + 1;
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
        res.status(200).send({ status: "success", data: flights });
    }
    catch(error) {
        console.log(error);
        res.status(400).send({ message: "error getting flights" });
    };
};

module.exports = {
    getFlights,
};
