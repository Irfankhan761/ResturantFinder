// myfrontend/src/pages/Contact.js
import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      try {
        console.log("Submitting form data:", formData);
        const response = await axios.post(
          "http://localhost:3000/api/contacts",
          formData
        );
        if (response.status === 200) {
          setSuccessMessage("Thank you! Your message has been sent.");
          setErrorMessage("");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          setErrorMessage("Failed to send the message, please try again.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setErrorMessage("An error occurred. Please try again later.");
      }
    } else {
      setErrorMessage("Please fill out all fields.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="main-contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
