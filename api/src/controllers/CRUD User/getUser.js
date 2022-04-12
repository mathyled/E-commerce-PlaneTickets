const { UserModel } = require("../../models");

const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...others } = user._doc;
    res
      .status(200)
      .send({ message: "User retrieved successfully", user: others });
  } catch (err) {
    res.status(400).send({ message: `Error retrieving user: ${err}` });
  }
};

module.exports = {
  getUser,
};
