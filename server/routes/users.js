// server/routes/users.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.put("/:id/favorites/add", async (req, res) => {
  try {
    const userId = req.params.id;
    const podcastId = req.body.podcastId;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { favorites: podcastId } },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error adding favorite podcast", error });
  }
});
router.get("/:id/favorites", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).populate("favorites");
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: "Error fetching favorite podcasts", error });
  }
});
router.put("/:id/favorites/remove", async (req, res) => {
  try {
    const userId = req.params.id;
    const podcastId = req.body.podcastId;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { favorites: podcastId } },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error removing favorite podcast", error });
  }
});
// server/routes/users.js

// ...
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;
