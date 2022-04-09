const { UserModel } = require("../../models");

const getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await UserModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res
      .status(200)
      .send({ message: "User stats retrieved successfully", data });
  } catch (err) {
    res.status(400).send({ message: `Error retrieving user stats: ${err}` });
  }
};

module.exports = {
  getUserStats,
};
