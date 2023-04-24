// server/models/Podcast.js
const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  type: String, // "Audio" or "Video"
  speaker: String,
  fileName: String,
});

const Podcast = mongoose.model("Podcast", podcastSchema);
module.exports = Podcast;
