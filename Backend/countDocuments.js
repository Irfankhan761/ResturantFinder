// Backend/countDocuments.js

const mongoose = require("mongoose");
const Restaurant = require("./models/restaurant");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");
    const count = await Restaurant.countDocuments(); // Count all documents
    console.log("Number of documents in the restaurants collection:", count);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
