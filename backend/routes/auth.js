const user = require("../models/User");
const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchUser");
require('dotenv').config();

const JWT_secret = process.env.REACT_APP_JWT_SECRET;

//ROUTE 1 : creating an new user account POST : /api/auth/createuser
router.post(
  "/createuser",
  [
    // CHECK 1 : Entered credentials are checking by the validation function.
    body("name", "Enter a valid name").isLength({ min: 4 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be of atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // Validation function to check inputs.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({outcome, errors: errors.array() });
    }
    try {
      // CHECK 2 : dont want two or more user of same email id.
      let newUser = await user.findOne({ email: req.body.email });
      if (newUser) {
        return res.status(400).json({outcome, message : "User already exists"});
      }
      // salt and hash we are using to ensure better security to the user.
      // gensalt() function creates a unique set of number or letters which add-up to the actual password
      // then hash is created from that salt and our password.
      const salt = await bcrypt.genSalt(10);
      // secpass is storing a hashed password which comprises of user's password and salt.
      const secPass = await bcrypt.hash(req.body.password, salt);
      // DOCUMENT CREATION : User entered data is being send to the database.
      newUser = await user.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      // Creating json web token for further use in other routes and to get rid of entering credentials again and again.
      const data = {
        newUser: {
          id: newUser.id,
        },
      };
      console.log("want to look at data of the json = " , data)
      const auth_token = jwt.sign(data, JWT_secret);
      res.json({auth_token });
    } catch (error) {
      // throw errors.
      console.error(error.message);
      res.status(500).send("Internal server Error Occured");
    }
  }
);

module.exports = router;
