const { FavoriteModel } = require("../../models");

const deleteFav = async (req, res) => {
  try {
    await FavoriteModel.findOneAndUpdate(
      { userId: req.body.userId },
      {
        $pullAll: {
          products: [{ id: req.body.deleteId }],
        },
      },
      { new: true }
    );
    console.log(req.body.deleteId);

    res.status(200).send({ message: "Fav deleted successfully" });
  } catch (err) {
    res.status(400).send({ message: `Error deleting order: ${err}` });
  }
};

module.exports = {
  deleteFav,
};
