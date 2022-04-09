const express = require("express");
const router = express.Router();

const { register } = require("../controllers/CRUD Auth/register");
const { login } = require("../controllers/CRUD Auth/login");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
