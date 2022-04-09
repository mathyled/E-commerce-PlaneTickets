const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

                  
const newCart = async (req, res) => {
    new Cart(req.body);

try {
  const savedCart = await newCart.save();
  res.status(200).json(savedCart);
} catch (err) {
  res.status(500).json(err);
}
};
module.exports = router