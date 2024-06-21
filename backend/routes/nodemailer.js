const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
require("dotenv").config();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MYEMAIL, 
    pass: process.env.MY_PASSWORD, 
  },
});

// Route to handle contact form submission
router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;
    console.log(name)
    
  const mailOptions = {
    from: email,
    to: process.env.MYEMAIL, // Replace with your email to receive the messages
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email' });
  }
});

module.exports = router
