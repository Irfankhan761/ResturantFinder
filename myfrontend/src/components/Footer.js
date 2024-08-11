import React from "react";
import { Link } from "react-router-dom";
import fbIcon from "../assets/fb.png";
import twitterIcon from "../assets/twiter.png";
import instagramIcon from "../assets/ins.jpeg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>DineFinder</h2>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={fbIcon} alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} DineFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
