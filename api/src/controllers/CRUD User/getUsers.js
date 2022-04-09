const { UserModel } = require("../../models");

const getUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await UserModel.find().sort({ _id: -1 }).limit(5)
      : await UserModel.find();
    res.status(200).send({ message: "Users retrieved successfully", users });
  } catch (err) {
    res.status(400).send({ message: `Error retrieving users: ${err}` });
  }
};

module.exports = {
  getUsers,
};
