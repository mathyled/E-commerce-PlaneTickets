const { CartModel } = require("../../models/");

const getUserCart = async (req, res) => {
  try {
    const cart = await CartModel.find({ userId: req.params.userId });
    res.status(200).send({ message: "Cart retrieved successfully", cart });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: `Error retrieving cart: ${err}` });
  }
};

module.exports = {
  getUserCart,
};
