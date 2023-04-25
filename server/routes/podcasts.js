const express = require("express");
const router = express.Router();
const multer = require("multer");
const Podcast = require("../models/Podcast");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  try {
    const podcasts = await Podcast.find();
    res.json(podcasts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching podcasts", error });
  }
});

router.post("/", upload.single("file"), async (req, res) => {
  console.log(req.file);

  // Determine the type based on the mimetype of the uploaded file
  const fileType = req.file.mimetype.startsWith("audio") ? "Audio" : "Video";

  try {
    const newPodcast = new Podcast({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      type: fileType, // Use fileType instead of req.body.type
      speaker: req.body.speaker,
      fileName: req.file.filename,
    });

    const savedPodcast = await newPodcast.save();
    res.status(201).json(savedPodcast);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/search", async (req, res) => {
  try {
    const query = req.query.query;
    const podcasts = await Podcast.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    });
    res.json(podcasts);
  } catch (error) {
    res.status(500).json({ message: "Error searching podcasts", error });
  }
});

router.get("/popular", async (req, res) => {
  try {
    const podcasts = await Podcast.find();
    res.json(podcasts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching popular podcasts", error });
  }
});

router.get("/:id/file", async (req, res) => {
  try {
    const podcastId = req.params.id;
    const podcast = await Podcast.findById(podcastId);

    res.sendFile(process.cwd() + "/uploads/" + podcast.fileName);
  } catch (error) {
    res.status(500).json({ message: "Error fetching podcast file", error });
  }
});

module.exports = router;
