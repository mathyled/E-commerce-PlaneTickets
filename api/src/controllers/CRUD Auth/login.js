const { UserModel } = require("../../models");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // verify if user exists
    const user = await UserModel.findOne({ username });
    if (!user) {
      res.status(200).send({ message: "User not found" });
    } else {
      // verify if password is correct
      const pass = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
      if (pass.toString(CryptoJS.enc.Utf8) !== password) {
        res.status(200).send({ message: "Password is incorrect" });
      } else {
        // verify if user is active
        if (user.status !== "Active") {
          res.status(200).send({ message: "User is not active" });
        } else {
          // generate token
          const accesToken = jwt.sign(
            {
              username: username,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
          );
          res.status(200).send({
            message: "User logged in successfully",
            accesToken: accesToken,
          });
        }
      }
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = {
  login,
};
