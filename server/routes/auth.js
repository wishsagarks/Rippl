// server/routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send();
  } catch (error) {
    res.status(400).send({ error: "Email already in use" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await user.comparePassword(req.body.password))) {
      return res.status(401).send({ error: "Invalid email or password" });
    }
    const token = jwt.sign({ userId: user._id }, "SECRET_KEY");
    res.send({ token });
  } catch (error) {
    res.status(500).send({ error: "Error logging in" });
  }
});

module.exports = router;
