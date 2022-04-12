const models = require("./models/index");

const getAllCities = (req, res) => {
    const citiesData = models.getCities();
    citiesData.sort((a, b) => {
      if(a.nameCity < b.nameCity) {
        return - 1;
      };
      if(a.nameCity > b.nameCity) {
        return 1;
      };
      return 0;
    });
    res.status(200).send({ message: "success", data: citiesData });
};

module.exports = {
  getAllCities,
};
