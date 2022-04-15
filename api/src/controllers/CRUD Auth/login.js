const { UserModel } = require("../../models");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {

    const user = await UserModel.findOne({
      username: username ,
    });
    console.log("PASS",user.password) // decrypt password already
   

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


    ///////
   if (user.status === "Pending") {
      res
        .status(200)
        .send({ message: "User not confirmed, please check your email" });
    }
    ///////
    else {
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );


    // const hashedPassword = CryptoJS.AES.decrypt(
    //   user.password,
    //   process.env.PASS_SEC
    // );

    // const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    //   console.log("ORIGINAL",originalPassword) // undefined


      const originalPassword = user.password

      const inputPassword = req.body.password;

    originalPassword !== inputPassword && res.status(200).send({ message: "Wrong Password" });


    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
//  user && res.status(200).send({ message: "Sign In" });
    const { password, ...others } = user._doc;
    res.status(200).send({ ...others, accessToken });

  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = {
  login,
};
