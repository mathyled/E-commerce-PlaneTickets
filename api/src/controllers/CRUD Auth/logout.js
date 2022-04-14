// const { UserModel } = require("../../models/");

// const logout = async (req, res) => {
//   try {
//     req.session.destroy();
//     res.status(200).send({
//       message: "Logout successful",
//     });
//   } catch (error) {
//     res.status(400).send({
//       message: "Logout failed",
//     });
//   }
// };

// const changePassword = async (req, res) => {
//   try {
//     // recibo el nuevo password
//     const { password } = req.body;
//     // busco el usuario
//     const user = await UserModel.findById(req.user._id);
//     // cambio el password
//     if (!user) {
//       res.status(400).send({
//         message: "User not found",
//       });
//     } else {

// };
