const { FavoriteModel } = require("../../models");

const deleteFav = async (req, res) => {
  try {
    await FavoriteModel.updateOne(
      { userId: req.body.userId },
      {
        $pullAll: {
          products: [req.body.deleteId],
        },
      }
    );

    console.log("DELETED");
    res.status(200).send({ message: "Fav deleted successfully" });
  } catch (err) {
    res.status(400).send({ message: `Error deleting order: ${err}` });
  }
};

module.exports = {
  deleteFav,
};
