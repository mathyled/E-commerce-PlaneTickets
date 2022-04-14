const { UserModel } = require("../../models");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const { sendConfirmationEmail } = require("../../helpers/nodemailer.config");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  // token for email confirmation
  const accesToken = jwt.sign(
    {
      email: email,
    },
    process.env.JWT_SEC,
    { expiresIn: "3d" }
  );
  // verify if user exists
  const user = await UserModel.findOne({ username });
  if (user) {
    res.status(200).send({ message: "User already exists" });
  } else {
    //verify if email exists
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(200).send({ message: "Email already exists" });
    } else {
      // create user
      const user = new UserModel({
        username: username,
        email: email,
        password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC),
        confirmationCode: accesToken,
      });
      // save user
      await user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        res.status(200).send({
          message:
            "User created successfully! Please check your email to confirm your account",
        });
      });
      // send email
      sendConfirmationEmail(user.username, user.email, user.confirmationCode);
    }
  }
};

module.exports = {
  register,
};
