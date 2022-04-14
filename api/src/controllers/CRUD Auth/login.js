const { UserModel } = require("../../models");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const username = req.body.username
  try {
    const user = await UserModel.findOne({
      username: username ,
    });
    console.log(username)
   

    !user && res.status(200).send({ message: "Wrong User Name" });

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    originalPassword != inputPassword &&
      res.status(200).send({ message: "Wrong Password" });


    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
 user && res.status(200).send({ message: "Sign In" });
    const { password, ...others } = user._doc;
    res.status(200).send({ ...others, accessToken });
  } catch (err) {
    res.status(400).send({ message: `Error logging in: ${err}` });
  }
};

module.exports = {
  login,
};
