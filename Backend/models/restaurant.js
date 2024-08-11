// Backend/models/restaurant.js

const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  location: String,
  rating: Number,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
