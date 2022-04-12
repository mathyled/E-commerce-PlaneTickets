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
    res
      .status(200)
      .send({ message: "Order updated successfully", updatedOrder });
  } catch (err) {
    res.status(500).json({ message: `Error updating order: ${err}` });
  }
};

module.exports = {
  updateOrder,
};
