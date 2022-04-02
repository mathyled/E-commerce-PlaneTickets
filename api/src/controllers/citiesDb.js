const axios = require("axios");
const { citiesDbModel } = require("../models");
const { AVIATION_API_KEY } = process.env;

// get cities from aviation api

const getApiAllCities = async (req, res) => {
  try {
    const cities = await axios.get(
      `https://aviation-edge.com/v2/public/cityDatabase?key=${AVIATION_API_KEY}`
    );
    const citiesDb = cities.data;
    // console.log(citiesDb.length);
    const citiesDbData = citiesDb.map((city) => {
      return {
        nameCity: city.nameCity,
        codeIataCity: city.codeIataCity,
      };
    });
    if (citiesDbModel.length > 0) {
      await citiesDbModel.deleteMany({});
      await citiesDbModel.insertMany(citiesDbData);
    }
    const dataDb = await citiesDbModel.find();
    res.status(200).send({ message: "success", data: dataDb });
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
