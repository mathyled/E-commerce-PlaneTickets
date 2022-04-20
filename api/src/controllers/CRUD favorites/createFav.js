const { FavoriteModel } = require("../../models");
const mongoose = require("mongoose");
const createFav = async (req, res) => {
  let convertToObjectId = mongoose.Types.ObjectId(req.body.product_id);
  let convertToObjectId2 = mongoose.Types.ObjectId(req.body.userId);
  let options = { upsert: true, new: true, setDefaultsOnInsert: true };

  const favs = await FavoriteModel.findOneAndUpdate(
    {
      userId: req.body.userId,
    },
    { $push: { products: convertToObjectId } },
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
