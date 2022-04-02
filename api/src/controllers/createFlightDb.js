const { createdFlightDb } = require("../models");

const getFlightsDb = async (req, res) => {
  const data = await createdFlightDb.find();
  res.send({ data });
};

const createFlightDb = async (req, res) => {
  const { origin, destination, comment } = req.body;
  const data = await createdFlightDb.create({
    origin,
    destination,
    comment,
  });
  res.send({ data });
};

module.exports = {
  getFlightsDb,
  createFlightDb,
};