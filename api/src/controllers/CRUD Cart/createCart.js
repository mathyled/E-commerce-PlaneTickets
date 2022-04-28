const { CartModel } = require("../../models/");

function addToCart(cityDetailsUsage, cart, id) {
  let inCart = false;
  if (cart.length > 0) {
    inCart = cart.some(item => item.id === cityDetailsUsage._id);
  };
  return (
    inCart ?
      cart.map(item => item.id === id ? { ...item } : item)
    :
      [...cart, { ...cityDetailsUsage, quantity: 1, total: cityDetailsUsage.price }]
  );
};

const createCart = async (req, res) => {
  const { userId, products } = req.body;
  let newCart = {};
  try {
    const userCart = await CartModel.find({ userId: userId });
    if(userCart.length === 0) {
      newCart = {
        userId,
        products: addToCart(products, userCart, products._id),
      };
      await CartModel.create(newCart);
    }else {
      if(userCart[0].products.find(item => item._id === products._id)) {
        return;
      }else {
        let newArr = [];
        const newProduct = addToCart(products, userCart, products._id);
        newArr = [...userCart[0].products, newProduct[1]];
        newCart = {
          userId,
          products: newArr,
        };
        await CartModel.findOneAndDelete({ userId: userId });
        await CartModel.create(newCart);
      };
    };
    res.status(200).send({ message: "Cart has been created...", newCart });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Cart has not been created...", err });
  }
};

module.exports = {
  createCart,
};
