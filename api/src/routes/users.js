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

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, getUser);
router.get("/", verifyTokenAndAdmin, getUsers);
router.get("/stats", verifyTokenAndAdmin, getUserStats);

module.exports = router;
