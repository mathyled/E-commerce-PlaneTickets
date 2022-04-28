const { CartModel } = require("../../models/");

const deleteCart = async (req, res) => {
  let { id, cart} = req.body;
  console.log(id, cart);
  try {
    const deletedCart = cart.filter(item => item._id !== id);
    console.log(deletedCart);
    const newCart = {
      userId: req.params.id,
      products: deletedCart,
    };
    await CartModel.findOneAndDelete({ userId: req.params.id });
    await CartModel.create(newCart);
    res.status(200).send({ message: "Cart has been deleted..." });
  } catch (err) {
    res.status(400).send({ message: "Cart has not been deleted...", err });
  }
};

module.exports = {
  deleteCart,
};
