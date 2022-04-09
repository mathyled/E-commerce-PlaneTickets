const { OrderModel } = require("../../models");

const updateOrder = async (req, res) => {
    try {
      const updatedOrder = await OrderModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  module.exports = { 
    updateOrder,
};