require("dotenv").config();
const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASS } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});
const sendConfirmationEmail = (name, email, confirmationCode) => {
  transporter
    .sendMail({
      from: '"Heading North" <user>',
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for registering with us! Please click on the link below to confirm your account</p>
        <a href=http://localhost:3001/confirm/${confirmationCode}> Click here</a>
        </div>`,
    })
    .catch((err) => console.log(err));
};

module.exports = {
  sendConfirmationEmail,
};
