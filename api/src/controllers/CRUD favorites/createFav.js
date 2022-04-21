const { FavoriteModel } = require("../../models");
const mongoose = require("mongoose");
const createFav = async (req, res) => {
  let convertToObjectId2 = mongoose.Types.ObjectId(req.body.userId);
  let options = { upsert: true, new: true, setDefaultsOnInsert: true };
  console.log(req.body.product);
  const favs = await FavoriteModel.findOneAndUpdate(
    {
      userId: req.body.userId,
    },
    { $push: { products: req.body.product } },
    options
  );

  try {
    // const savedFav = await newFav.save();
    res.status(200).send({ message: "Fav created successfully", favs });
  } catch (err) {
    res.status(400).send({ message: `Error creating order: ${err}` });
  }
};

module.exports = {
  createFav,
};
