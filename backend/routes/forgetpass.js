const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const generateOtp = require("generate-otp");
const bcrypt = require("bcrypt");
const { promisify } = require("util");
const { route } = require("./auth");
require("dotenv").config();
const crypto = require('crypto')

router.post("/reset-password", (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }

    const token = buffer.toString("hex");
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ error: "User doesnt exists with given email" });
      }

      user.resetToken = token;
      user.expireToken = Date.now() + 3600000;
      user.markModified("resetToken");
      user.markModified("expireToken");
      user.save().then((result) => {
        const msg = {
          to: user.email,
          from: process.env.MY_EMAIL_ID,
          subject: "Password Reset",
          html: `
                      <p>You have requested for password reset</p>
                      <h5>click in this <a href="${process.env.HOSTEDLOCALHOST}/reset/${token}">link</a> to reset password</h5>
                      `,
        };
        sgMail.send(msg);

        res.json({ message: "check your mail" });
      });
    });
  });
});

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.MY_EMAIL_ID,
//     pass: process.env.MY_EMAIL_PASSWORD,
//   },
// });

// const users = [
//   {
//     id: 1,
//     email: 'user@example.com',
//     password: '$2b$10$yi1oQDJN9pMjSMe1Z41d0OIKqzVi5O5s5f4M18aBYiaPRMeT3.JGq', // Hashed password
//     otpSecret: null,
//     otpExpiry: null,
//   },
// ];

// async function generateOtpAndSecret() {
//   console.log("is it working or not")
//   const otpSecret = generateOtp.secret();
//   console.log("otp secreat = ", otpSecret);
//   const otp = generateOtp({
//     secret: otpSecret,
//     digits: 6,
//     period: 300, // OTP validity period in seconds (5 minutes)
//   });
//   console.log("this belongs to otp = ", otp);
//   return { otpSecret, otp };
// }

// router.post(
//   "/forgetPassword",
//   [body("email", "Enter a valid Email").isEmail()],
//   async (req, res) => {

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const { email } = req.body;

//     const existingUser = await user.findOne({ email });
//     console.log("existing user = ", existingUser);

//     if (!existingUser) {
//       return res.status(404).json({ error: "User not found" });
//     }
//       const { otpSecret, otp } = await generateOtpAndSecret();
//       const otpExpiry = Date.now() + 300000; // OTP expiry in 5 minutes

//     // Save OTP secret and expiry in the user object
//       existingUser.otpSecret = otpSecret;
//       existingUser.otpExpiry = otpExpiry;

//     // Send OTP via email
//       const mailOptions = {
//         from: process.env.MY_EMAIL_ID,
//         to: email,
//         subject: 'OTP for Password Reset',
//         text: `Your OTP for password reset is: ${otp}`,
//       };

//     try {
//       // await transporter.sendMail(mailOptions);
//       res.json({ message: "OTP sent successfully" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Error sending email" });
//     }
//   }
// );

// // app.post('/verify-otp/:email', async (req, res) => {
// //   const { email } = req.params;
// //   const { otp, newPassword } = req.body;

// //   const user = users.find((u) => u.email === email && u.otpExpiry > Date.now());

// //   if (!user || !generateOtp.verify(otp, user.otpSecret)) {
// //     return res.status(400).json({ error: 'Invalid or expired OTP' });
// //   }

// //   // Update the user's password and reset OTP
// //   user.password = await bcrypt.hash(newPassword, 10);
// //   user.otpSecret = null;
// //   user.otpExpiry = null;

// //   res.json({ message: 'Password reset successfully' });
// // });
module.exports = router;
