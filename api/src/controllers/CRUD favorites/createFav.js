const { FavoriteModel } = require("../../models");

const createFav = async (req, res) => {
  const newFav = new FavoriteModel(req.body);

  try {
    const savedFav = await newFav.save();
    res.status(200).send({ message: "Order created successfully", savedFav });
  } catch (err) {
    res.status(400).send({ message: `Error creating order: ${err}` });
  }
};

module.exports = {
  createFav,
};
