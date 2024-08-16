// Backend/routes/contacts.js

const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Use environment variables for email credentials
      pass: process.env.EMAIL_PASS,
    },
  });

  // const mailOptions = {
  //   from: email,
  //   to: process.env.EMAIL_USER, // Use environment variable for recipient email
  //   subject: `Contact form submission from ${name}`,
  //   text: message,
  // };
  const mailOptions = {
    from: process.env.EMAIL_USER, // Your email address as the sender
    replyTo: email, // The user's email address for replies
    to: process.env.EMAIL_USER, // Recipient email
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error details:", error); // Log error details
      return res
        .status(500)
        .json({ error: `Failed to send message: ${error.message}` });
    }
    console.log("Email sent:", info.response); // Log email sent response
    res.status(200).json({ message: "Message sent successfully" });
  });
});

module.exports = router;
