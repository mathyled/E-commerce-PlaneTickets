const { OrderModel } = require("../../models");

const getAll = async (req, res) => {
    try {
      const orders = await OrderModel.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  module.exports = { 
    getAll,
};