import React from "react";
import Footer from "../components/Footer"; // Corrected path

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to DineFinder</h1>
          <p>Discover the best restaurants around you</p>
          <a href="#search" className="btn-primary">
            Find Restaurants
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
