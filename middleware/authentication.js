const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    console.log("header missing or beaer missing");
    throw new UnauthenticatedError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const testUser = payload.userId === "64c4f21916097d23cff4d1df";

    req.user = { userId: payload.userId, name: payload.name, testUser };
    next();
  } catch (error) {
    console.log("something went wrong at last");
    console.log(error);
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

module.exports = auth;
