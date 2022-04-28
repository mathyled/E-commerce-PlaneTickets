const express = require("express");
const router = express.Router();
// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("../middlewares/verifyToken");

const { createCart } = require("../controllers/CRUD Cart/createCart");
const { updatedCart } = require("../controllers/CRUD Cart/updatedCart");
const { deleteCart } = require("../controllers/CRUD Cart/deleteCart");
const { getUserCart } = require("../controllers/CRUD Cart/getUserCart");
// const { getAllCart } = require("../controllers/CRUD Cart/getAllCart");

router.post("/", /* verifyToken, */ createCart);
router.post("/update/:id", /* verifyTokenAndAuthorization, */ updatedCart);
router.post("/delete/:id", /* verifyTokenAndAuthorization, */ deleteCart);
router.get("/:userId", /* verifyTokenAndAuthorization, */ getUserCart);
// router.get("/", verifyTokenAndAdmin, getAllCart);

module.exports = router;
