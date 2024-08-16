// Backend/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const restaurantRoutes = require("./routes/restaurants");
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contacts"); // Import contacts routes
require("dotenv").config();

const app = express();
app.use(cors()); // Enable CORS

mongoose
  .connect(
    process.env.MONGO_URI, // Use environment variable for MongoDB URI
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());
app.use("/restaurants", restaurantRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes); // Use contacts routes

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
