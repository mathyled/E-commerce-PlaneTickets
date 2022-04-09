const { UserModel } = require("../../models");

const deleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).send({ message: `Error deleting user: ${err}` });
  }
};

module.exports = {
  deleteUser,
};
