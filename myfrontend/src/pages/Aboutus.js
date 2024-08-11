import React from "react";
import Footer from "../components/Footer"; // Corrected path

const Aboutus = () => {
  return (
    <div className="about-container">
      <section className="intro">
        <div className="intro-content">
          <h2>About Us</h2>
          <p>
            DineFinder is your go-to platform for finding the best places to
            eat. Whether you're looking for a cozy dinner spot or a quick lunch,
            we have you covered.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-item">
          <h3>Extensive Database</h3>
          <p>
            With over 20,000 restaurants in our database, you always find what
            you're craving.
          </p>
        </div>
        <div className="feature-item">
          <h3>Extensive Database</h3>
          <p>
            With over 20,000 restaurants in our database, you always find what
            you're craving.
          </p>
        </div>

        <div className="feature-item">
          <h3>Accurate Reviews</h3>
          <p>
            To Get the most reliable restaurant ratings and reviews to make
            informed decisions.
          </p>
        </div>
        <div className="feature-item">
          <h3>Easy to Use</h3>
          <p>
            Ability to Search, filter, and finds restaurants with ease on our
            user-friendly platform.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Aboutus;
