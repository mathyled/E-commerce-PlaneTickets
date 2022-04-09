const { OrderModel } = require("../../models");

const getUserOrders = async (req, res) => {
    try {
      const orders = await OrderModel.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  module.exports = { 
    getUserOrders,
};