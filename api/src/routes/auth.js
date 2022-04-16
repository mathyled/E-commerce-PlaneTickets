const express = require("express");
const router = express.Router();

const { register } = require("../controllers/CRUD Auth/register");
const { login } = require("../controllers/CRUD Auth/login");
const { verifyUser } = require("../controllers/CRUD Auth/verifyUser");
const { forgotPass } = require("../controllers/CRUD Auth/forgotPass");
const { recoverPass } = require("../controllers/CRUD Auth/recoverPass");

router.post("/register", register);
router.post("/login", login);
router.get("/confirm/:confirmationCode", verifyUser);
router.post("/recover", forgotPass);
router.put("/recover/:token", recoverPass);

module.exports = router;
