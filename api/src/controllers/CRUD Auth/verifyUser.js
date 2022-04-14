const { UserModel } = require("../../models");

const verifyUser = (req, res) => {
  const {confirmationCode} = req.params
  console.log("CONF",confirmationCode)
  UserModel.findOne({
    confirmationCode: confirmationCode,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      user.status = "Active";
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    })
    .catch((e) => console.log("error", e));
};

module.exports = {
  verifyUser,
};
