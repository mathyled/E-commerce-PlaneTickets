const { OrderModel } = require("../../models");

const deleteOrder = async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(400).send({ message: `Error deleting order: ${err}` });
  }
};

module.exports = {
  deleteOrder,
};
