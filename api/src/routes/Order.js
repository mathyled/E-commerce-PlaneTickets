const express              = require("express");
const router               = express.Router();
const {createOrder}        = require("../controllers/CRUD Order/createOrder");
const {deleteOrder}        = require("../controllers/CRUD Order/deleteOrder");
const { getAll }           = require("../controllers/CRUD Order/getAll");
const { getMonthlyIncome } = require("../controllers/CRUD Order/getMonthlyIncome");
const {getUserOrders}      = require("../controllers/CRUD Order/getUserOrders");
const {updateOrder}        = require("../controllers/CRUD Order/updateOrder");


// router.post   ("/", verifyToken, createOrder);
// router.put    ("/update/:id", verifyTokenAndAdmin, updateOrder);
// router.delete ("/delete/:id", verifyTokenAndAdmin, deleteOrder);
// router.get    ("/find/:userId", verifyTokenAndAuthorization, getUserOrders);
// router.get    ("/", verifyTokenAndAdmin,  getAll);
// router.get    ("/income", verifyTokenAndAdmin,  getMonthlyIncome);

// module.exports = router;

router.post   ("/", createOrder);
router.put    ("/update/:id", updateOrder);
router.delete ("/delete/:id", deleteOrder);
router.get    ("/find/:userId", getUserOrders);
router.get    ("/", getAll);
router.get    ("/income", getMonthlyIncome);

module.exports = router;






