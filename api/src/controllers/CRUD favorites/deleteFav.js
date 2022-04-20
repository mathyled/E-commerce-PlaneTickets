const { FavoriteModel } = require("../../models");

const deleteFav = async (req, res) => {
  try {
    await FavoriteModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Fav deleted successfully" });
  } catch (err) {
    res.status(400).send({ message: `Error deleting order: ${err}` });
  }
};

module.exports = {
  deleteFav,
};
