
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Podcast = require("../models/Podcast");

router.post("/:podcastId",  async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const podcastId = req.params.podcastId;
    if (!user.favorites.includes(podcastId)) {
      user.favorites.push(podcastId);
      await user.save();
    }
    res.json({ message: "Podcast added to favorites" });
  } catch (error) {
    res.status(500).json({ message: "Error adding podcast to favorites", error });
  }
});

router.delete("/:podcastId", async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const podcastId = req.params.podcastId;
    user.favorites = user.favorites.filter((fav) => fav.toString() !== podcastId);
    await user.save();
    res.json({ message: "Podcast removed from favorites" });
  } catch (error) {
    res.status(500).json({ message: "Error removing podcast from favorites", error });
  }
});

router.get("/",  async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("favorites");
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user's favorite podcasts", error });
  }
});

module.exports = router;
