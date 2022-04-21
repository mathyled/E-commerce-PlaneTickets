const { FavoriteModel } = require("../../models");

const deleteFav = async (req, res) => {
  try {
    console.log(req.body.userId);
    console.log(req.body.deleteId);
    const deleted = await FavoriteModel.findOneAndUpdate(
      {
        userId: req.body.userId,
      },
      {
        $pull: {
          products: { id: { $in: [req.body.deleteId] } },
        },
      }
    );
    console.log(deleted);

    res.status(200).send({ message: "Fav deleted successfully" });
  } catch (err) {
    res.status(400).send({ message: `Error deleting order: ${err}` });
  }
};

module.exports = {
  deleteFav,
};
