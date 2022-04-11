const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();


const updatedCart = async (req, res) => {
    try { await Cart.findByIdAndUpdate(
  req.params.id,
  {
    $set: req.body,
  },
  { new: true }
);
res.status(200).json(updatedCart);
} catch (err) {
res.status(500).json(err);
}
};

module.exports = router