const { FavoriteModel } = require("../../models");

const updateFav = async (req, res) => {
  try {
    const updatedFav = await FavoriteModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send({ message: "Order updated successfully", updatedFav });
  } catch (err) {
    res.status(500).json({ message: `Error updating order: ${err}` });
  }
};

module.exports = {
  updateFav,
};
