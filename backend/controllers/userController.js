const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");
const generateToken = require("../config/genrateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("login called");
  const user = await User.findOne({ email });
  if (user && user.password == password) {
    res.status(201);
    res.json({
      user,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    res.json({
      success: "false",
    });
  }
});

module.exports = registerUser;
//module.exports = loginUser;
