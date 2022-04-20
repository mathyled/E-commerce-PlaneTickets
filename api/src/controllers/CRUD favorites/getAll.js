const { FavoriteModel } = require("../../models");

const getAllFavs = async (req, res) => {
  try {
    const allFavs = await FavoriteModel.find();
    res
      .status(200)
      .send({ message: "Favorites retrieved successfully", allFavs });
  } catch (err) {
    res.status(400).send({ message: `Error retrieving orders: ${err}` });
  }
};

module.exports = {
  getAllFavs,
};
