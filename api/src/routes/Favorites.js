const express = require("express");
const router = express.Router();

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

const { createFav } = require("../controllers/CRUD favorites/createFav");
const { deleteFav } = require("../controllers/CRUD favorites/deleteFav");
const { getAllFavs } = require("../controllers/CRUD favorites/getAll");

const { getUserFavs } = require("../controllers/CRUD favorites/getUserFavs");
const { updateFav } = require("../controllers/CRUD favorites/updateFav");

router.post("/", createFav);
router.put("/update/:id", updateFav);
router.delete("/delete/:id", deleteFav);
router.get("/find/:userId", getUserFavs);
router.get("/", getAllFavs);

module.exports = router;
