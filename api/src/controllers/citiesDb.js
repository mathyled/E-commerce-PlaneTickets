const axios = require("axios");
// const {citiesDbModel} = require("../models")
const { AVIATION_API_KEY } = process.env;

// get flights from api

const getApiAllCities = async (req, res) => {
    try{
        const cities = await axios.get(`https://aviation-edge.com/v2/public/cityDatabase?key=${AVIATION_API_KEY}`);
        // cities.forEach(citi => {
        //   citiesDbModel.findOrCreate({
        //     where: {
        //       nameCity: citi.nameCity,
        //       codeIataCity: citi.codeIataCity,
        //     }
        //   });
        //   const citiesDb = citiesDbModel.findAll();
        // cities.data.forEach((e) => {
        //   citiesDbModel.findByIdAndUpdate({
        //     cityId: e.cityId,
        //     codeIataCity: e.codeIataCity,
        //     nameCity: e.nameCity,
        //   });
        // });
        // const citiesDb = citiesDbModel.find();
        const citiesDb = cities.data.map((e) => {
          return {
            codeIataCity: e.codeIataCity,
            nameCity: e.nameCity,
          };
        });
        res.send(citiesDb);
    }
    catch(err) {
      console.log(err)
      res.status(404).send("Error")
    }
};

module.exports = {
  getApiAllCities,
};
