// server/app.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/podcasts", require("./routes/podcasts"));
app.use("/api/users", require("./routes/users"));
app.use("/api/favorites", require("./routes/favorites"));
app.use("/api/auth", require("./routes/auth")); // Add this line
app.use("/api/admin", require("./routes/admin")); // Add this line

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Routes
app.use("/api/podcasts", require("./routes/podcasts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
