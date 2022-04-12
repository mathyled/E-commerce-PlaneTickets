const { OrderModel } = require("../../models");

const deleteOrder = async (req, res) => {
    try {
      await OrderModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  };

  module.exports = { 
    deleteOrder,
};