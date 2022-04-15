const express = require("express");
const router = express.Router();

const { register } = require("../controllers/CRUD Auth/register");
const { login } = require("../controllers/CRUD Auth/login");
const { verifyUser } = require("../controllers/CRUD Auth/verifyUser");

router.post("/register", register);
router.post("/login", login);
router.get("/confirm/:confirmationCode", verifyUser);

module.exports = router;
