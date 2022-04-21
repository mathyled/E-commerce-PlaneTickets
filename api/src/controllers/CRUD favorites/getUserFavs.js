const { FavoriteModel } = require("../../models");

const getUserFavs = async (req, res) => {
  try {
    const favs = await FavoriteModel.findOne({
      userId: req.params.userId,
    }).select("products -_id");
    // let products = [...favs.products];
    //console.log(products);
    res.status(200).send({ message: "Orders retrieved successfully", favs });
  } catch (err) {
    res.status(400).send({ message: `Error retrieving orders: ${err}` });
  }
};

module.exports = {
  getUserFavs,
};
