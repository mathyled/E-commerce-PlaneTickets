const { UserModel } = require("../../models");

const verifyUser = (req, res) => {
  try {
    const { confirmationCode } = req.params;
    UserModel.findOne({ confirmationCode }, (err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        res.status(404).send({ message: "User not found" });
        return;
      }
      user.status = "Active";
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.status(200).send({ message: "User verified successfully" });
      });
    });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = {
  verifyUser,
};
