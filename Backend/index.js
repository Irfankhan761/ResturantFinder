// Backend/index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const restaurantRoutes = require("./routes/restaurants");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();
app.use(cors()); // Add this line

mongoose
  .connect(
    "mongodb+srv://irfandk:irfan761@cluster0.lwbjnfp.mongodb.net/Dinefinder?retryWrites=true&w=majority",
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
app.use("/api/auth", authRoutes); // Add this line

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
