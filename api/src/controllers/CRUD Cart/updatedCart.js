const { CartModel } = require("../../models/");

const updatedCart = async (req, res) => {
  try {
    await CartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send({ message: "Cart has been updated..." });
  } catch (err) {
    res.status(400).send({ message: "Cart has not been updated...", err });
  }
};

module.exports = {
  updatedCart,
};
