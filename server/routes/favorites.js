// routes/favorites.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Podcast = require("../models/Podcast");

router.put("/toggle/:podcastId", async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const podcastId = req.params.podcastId;
    const podcast = await Podcast.findById(podcastId);

    if (!podcast) {
      return res.status(404).json({ message: "Podcast not found" });
    }

    const index = user.favorites.indexOf(podcastId);
    if (index === -1) {
      user.favorites.push(podcastId);
    } else {
      user.favorites.splice(index, 1);
    }

    await user.save();
    res.json(user.favorites);
  } catch (error) {
    console.error("Toggle favorite error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;