const mongoose = require("mongoose");

const PodcastSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    speaker: { type: String, required: true },
    fileName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Podcast", PodcastSchema);
