const { CartModel } = require("../../models/");

const createCart = async (req, res) => {
  new CartModel(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).send({ message: "Cart has been created...", savedCart });
  } catch (err) {
    res.status(400).json({ mesasge: "Cart has not been created...", err });
  }
};

module.exports = {
  createCart,
};
