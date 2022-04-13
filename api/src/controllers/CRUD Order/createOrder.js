const { OrderModel } = require("../../models");

const createOrder = async (req, res) => {
  const newOrder = new OrderModel(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).send({ message: "Order created successfully", savedOrder });
  } catch (err) {
    res.status(400).send({ message: `Error creating order: ${err}` });
  }
};

module.exports = {
  createOrder,
};
