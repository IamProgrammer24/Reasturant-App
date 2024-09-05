const express = require("express");
const {registerController, loginController, } = require("../controllers/authController");
const router = express.Router();

//routes
// GET USER || GET
router.post("/register", registerController);

router.get("/login", loginController);


module.exports = router;