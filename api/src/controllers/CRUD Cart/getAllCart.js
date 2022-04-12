const { CartModel } = require("../../models/");

const getAllCart = async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.status(200).send({ message: "Carts retrieved successfully", carts });
  } catch (err) {
    res.status(400).send({ message: `Error retrieving carts: ${err}` });
  }
};

module.exports = {
  getAllCart,
};
