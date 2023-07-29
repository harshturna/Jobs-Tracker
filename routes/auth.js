const express = require("express");
const { login, register, updateUser } = require("../controllers/auth");
const authenticatedUser = require("../middleware/authentication");
const testUser = require("../middleware/testUser");
const router = express.Router();
const rateLimiter = require("express-rate-limit");

const apiLimit = rateLimiter({
  windowsMs: 15 * 60 * 1000,
  max: 15,
  message: {
    msg: "Too many requests from this IP, please try again after 15 minutes",
  },
});

router.post("/login", apiLimit, login);
router.post("/register", apiLimit, register);
router.route("/updateUser").patch(authenticatedUser, testUser, updateUser);

module.exports = router;
