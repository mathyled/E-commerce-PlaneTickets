const { UserModel } = require("../../models");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const forgotPass = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(200).send({ message: "User not found" });
    } else {
      const token = jwt.sign({ email: email }, process.env.JWT_SEC, {
        expiresIn: "10m",
      });
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Recover Password",
        html: `<h1>Recover Password</h1>
        <p>Click on the link below to recover your password</p>
        <a href=http://localhost:3000/recover/${token}>Recover Password</a>`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.status(200).send({ message: "Email sent" });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = {
  forgotPass,
};
