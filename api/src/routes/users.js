const express = require("express");
const router = express.Router();

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const { updateUser } = require("../controllers/CRUD User/updateUser");
const { deleteUser } = require("../controllers/CRUD User/deleteUser");
const { getUser } = require("../controllers/CRUD User/getUser");
const { getUsers } = require("../controllers/CRUD User/getUsers");
const { getUserStats } = require("../controllers/CRUD User/getUserStats");

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/find/:id", getUser);
router.get("/", getUsers);
router.get("/stats", getUserStats);

module.exports = router;
