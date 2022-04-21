const express = require("express");
const router = express.Router();

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const {
  createFlightCart,
} = require("../controllers/CRUD flightCart/createFlightCart");
const {
  updateFlightCart,
} = require("../controllers/CRUD flightCart/updateFlightCart");
const {
  getFlightCart,
} = require("../controllers/CRUD flightCart/getFlightCart");
const {
  deleteFlightCart,
} = require("../controllers/CRUD flightCart/deleteFlightCart");
const {
  getAllFlightCart,
} = require("../controllers/CRUD flightCart/getAllFlightCart");

router.post("/create", /*verifyTokenAndAdmin,*/ createFlightCart);
router.put("/:id", /*verifyTokenAndAdmin,*/ updateFlightCart);
router.delete("/delete/:id", /*verifyTokenAndAdmin,*/ deleteFlightCart);
router.get("/:id", getFlightCart);
router.get("/", getAllFlightCart);

module.exports = router;
