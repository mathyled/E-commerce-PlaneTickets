const models = require("./models/index");

const getAllCities = (req, res) => {
    const citiesData = models.getCities();
    res.status(200).send({ message: "success", data: citiesData });
};

module.exports = {
  getAllCities,
};
