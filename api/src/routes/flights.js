const express = require("express");
const { getFlights, getFlightDetail, deleteFlight } = require("../controllers/flights");
const router = express.Router();
// const {
//     verifyToken,
//     verifyTokenAndAuthorization,
//     verifyTokenAndAdmin,
// } = require("./verifyToken");

router.get("/", getFlights); // ej: http://localhost:3001/api/flights?city={AEP}&date={2022-04-15}
router.get("/detail/:id", getFlightDetail);
router.delete("/delete/:id", deleteFlight);

module.exports = router;
