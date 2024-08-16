// Backend/seed.js

const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker"); // Updated import
const Restaurant = require("./models/restaurant");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB for seeding");
    seedDatabase();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

async function seedDatabase() {
  for (let i = 0; i < 20020; i++) {
    const restaurant = new Restaurant({
      name: faker.company.name(), // Updated method name
      cuisine: faker.helpers.arrayElement([
        "Italian",
        "Chinese",
        "Mexican",
        "Indian",
      ]),
      location: faker.address.city(),
      rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }), // Updated method name
    });
    await restaurant.save();
  }
  mongoose.connection.close();
  console.log("Database seeding complete");
}
