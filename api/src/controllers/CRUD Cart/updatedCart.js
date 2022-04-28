const { CartModel } = require("../../models/");

  function updateQuantity(cart, id, quantity) {
    const cartCopy = cart;
    let pos = cartCopy.map(e => e._id).indexOf(id);
    let itemchange = cartCopy[pos];
    itemchange.quantity = quantity;
    itemchange.total = itemchange.price * quantity;
    cartCopy[pos] = itemchange;
    return cartCopy;
  };

// const updatedCart = async (req, res) => {
//   let { cart, id, quantity } = req.body;
//   try {
//     const products = updateQuantity(cart, id, quantity);
//     await CartModel.findOneAndUpdate(
//       { userId: req.params.id },
//       {
//         $mod: products,
//       },
//       { new: true }
//     );
//     res.status(200).send({ message: "Cart has been updated..." });
//   } catch (err) {
//     console.log(err);
//     res.status(400).send({ message: "Cart has not been updated...", err });
//   }
// };

const updatedCart = async (req, res) => {
  let { cart, id, quantity } = req.body;
  try {
    // const userCart = await CartModel.find({ userId: req.params.id });
    const productUpdated = updateQuantity(cart, id, quantity);
    // let newArr = [];
    // newArr = [...userCart[0].products, productUpdated];
    const newCart = {
      userId: req.params.id,
      products: productUpdated,
    };
    await CartModel.findOneAndDelete({ userId: req.params.id });
    await CartModel.create(newCart);
    res.status(200).send({ message: "Cart has been updated..." });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "Cart has not been updated...", err });
  }
};

module.exports = {
  updatedCart,
};
