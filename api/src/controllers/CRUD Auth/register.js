const { UserModel } = require("../../models");
const CryptoJS = require("crypto-js");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  console.log(username, email, password)
  try {
    const emailAlreadyExist = await UserModel.findOne({email: email  })
  const userAlreadyExist = await UserModel.findOne({username: username  })

  if (emailAlreadyExist){ return res.status(200).json({ message: "Email already exist" })};
  if (userAlreadyExist){ return res.status(200).json({ message: "User already exist" })};

    const newUser = new UserModel({
      username: username,
      email: email,
      password: CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString(),
    });
      const savedUser = await newUser.save();
      res.status(200).send({
        message: "User created successfully",
        savedUser,
      });
    } catch (err) {
      res.status(400).send({ message: `Error creating user: ${err}` });
    }
  

};

module.exports = {
  register,
};
