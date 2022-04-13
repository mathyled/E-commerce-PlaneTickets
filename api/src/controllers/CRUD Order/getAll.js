const { OrderModel } = require("../../models");

const getAllOrder = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    res.status(200).send({ message: "Orders retrieved successfully", orders });
  } catch (err) {
    res.status(400).send({ message: `Error retrieving orders: ${err}` });
  }
};

module.exports = {
  getAllOrder,
};
