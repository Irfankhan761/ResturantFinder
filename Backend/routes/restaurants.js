// // Backend/routes/restaurants.js

const express = require("express");
const Restaurant = require("../models/restaurant");
const router = express.Router();

// Search and filter with pagination
router.get("/", async (req, res) => {
  try {
    const {
      name = "",
      cuisine = "",
      location = "",
      minRating = 0,
      page = 1,
      limit = 10,
    } = req.query;

    // Convert page and limit to numbers
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    // Build query
    const query = {
      name: new RegExp(name, "i"),
      cuisine: new RegExp(cuisine, "i"),
      location: new RegExp(location, "i"),
      rating: { $gte: parseFloat(minRating) },
    };

    console.log("Query:", query); // Log the query to check if it's correct

    // Fetch total count for pagination
    const totalCount = await Restaurant.countDocuments(query);

    // Fetch paginated results
    const results = await Restaurant.find(query)
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    console.log("Results:", results); // Log results to check data

    res.status(200).json({
      restaurants: results,
      totalCount: totalCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
