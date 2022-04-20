const { UserModel } = require("../../models");
const CryptoJSS = require("crypto-js");

const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJSS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send({ message: "User updated successfully", updatedUser });
  } catch (err) {
    res.status(400).send({ message: `Error updating user: ${err}` });
  }
};

module.exports = {
  updateUser,
};
