const { OrderModel } = require("../../models");

const createOrder = async (req, res) => {
  try {
    const { userId, products, amount } = req.body;

    let arr = [];
    for(let i = 0; i < products.length; i++) {
      arr.push({
        [`product_${i + 1}`]: products[i].product,
        [`quantity_${i + 1}`]: products[i].quantity,
      });
    };

    const newOrder = {
      userId,
      products: arr,
      amount,
    };
    await OrderModel.create(newOrder);
    res.status(200).send({ message: "Order created successfully", newOrder });
  } catch (err) {
    res.status(400).send({ message: `Error creating order: ${err}` });
  }
};

module.exports = {
  createOrder,
};
