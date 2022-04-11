const { flightCartDb } = require("../../models");

const createFlightCart = async (req, res) => {
    try {
        const { weekday, departure, arrival, aircraft, airline, flight, codeshared, date, price } = req.body;
        const newFlight = {
            weekday,
            departure,
            arrival,
            aircraft,
            airline,
            flight,
            codeshared,
            date,
            price,
        };
        await flightCartDb.create(newFlight)
        res.status(200).send({ status: "success", data: newFlight });
    }
    catch(error) {
        console.log(error);
        res.status(400).send({ message: "error getting flight cart "});
    };
};

module.exports = {
    createFlightCart,
};