const express = require("express");
const { login, register, updateUser } = require("../controllers/auth");
const authenticatedUser = require("../middleware/authentication");

const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/updateUser").patch(authenticatedUser, updateUser);

module.exports = router;
