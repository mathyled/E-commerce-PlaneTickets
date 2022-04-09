const { OrderModel } = require("../../models");

const createOrder = async (req, res) => {
    const newOrder = new OrderModel(req.body);
  
    try {
      const savedOrder = await OrderModel.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  };

  module.exports = { 
    createOrder,
};
