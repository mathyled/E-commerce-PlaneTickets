const { CartModel } = require("../../models/");

const deleteCart = async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Cart has been deleted..." });
  } catch (err) {
    res.status(400).send({ message: "Cart has not been deleted...", err });
  }
};

module.exports = {
  deleteCart,
};
