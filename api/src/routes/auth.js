const express = require("express");
const router = express.Router();
passport = require("passport");
require("../middlewares/google");

const { register } = require("../controllers/CRUD Auth/register");
const { login } = require("../controllers/CRUD Auth/login");
const { verifyUser } = require("../controllers/CRUD Auth/verifyUser");
const { forgotPass } = require("../controllers/CRUD Auth/forgotPass");
const { recoverPass } = require("../controllers/CRUD Auth/recoverPass");
const { logout } = require("../controllers/CRUD Auth/logout");
const CLIENT_URL = "http://localhost:3000/home";

router.post("/register", register);
router.post("/login", login);
router.get("/confirm/:confirmationCode", verifyUser);
router.post("/recover", forgotPass);
router.put("/recover/:token", recoverPass);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/login/success",(req,res)=>{
  console.log("google",req.user)
  if(req.user){
    res.status(200).json(
      {
        success:true,
        message: "successfull",
        user:req.user
      }
    )
  }
})
router.get("/logout", logout);

module.exports = router;
