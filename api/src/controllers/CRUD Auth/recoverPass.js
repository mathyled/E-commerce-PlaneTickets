const { UserModel } = require("../../models");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

const recoverPass = async (req, res) => {
  try {
    // get token from params
    const { token } = req.params;
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    // get user from email
    const user = await UserModel.findOne({ email: decoded.email });
    if (!user) {
      res.status(200).send({ message: "User not found" });
    } else {
      // post new password by body
      const { password } = req.body;
      // encrypt password
      const encrypted = CryptoJS.AES.encrypt(
        password,
        process.env.PASS_SEC
      ).toString();
      // update password
      await UserModel.updateOne(
        { email: decoded.email },
        { $set: { password: encrypted } }
      );
      res.status(200).send({ message: "Password updated" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

module.exports = {
  recoverPass,
};
