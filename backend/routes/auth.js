const user = require("../models/User");
const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const JWT_secret = "somethingtoknow";

//ROUTE 1 : creating an new user account POST : /api/auth/createuser
router.post(
  "/newuser",
  [
    // CHECK 1 : Entered credentials are checking by the validation function.
    body("name", "Enter a  valid last name").isLength({ max: 50 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be of atleast 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // Validation function to check inputs.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() ,message : "Name, email and password are required" });
    }
    try {
      // CHECK 2 : dont want two or more user of same email id.
      let newUser = await user.findOne({ email: req.body.email });
      if (newUser) {
        return res.status(400).json({ message: "User already exists" });
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
        email: req.body.email,
        password: secPass,
      });
      // Creating json web token for further use in other routes and to get rid of entering credentials again and again.
      const data = {
        newUser: {
          id: newUser.id,
        },
      };
      const auth_token = jwt.sign(data, JWT_secret);
      res.json({ auth_token });
    } catch (error) {
      // throw errors.
      console.error(error.message);
      res.status(500).send("Internal server Error Occured");
    }
  }
);

// ROUTE 2 : Authenticate a user using : POST /api/auth/login . login required.
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      // CHECK 1 : Email
      // matching will make entire document avaiable to use.
      let existingUser = await user.findOne({ email });
      if (!existingUser) {
        return res.status(401).json({ outcome, msg: "User does not exist!" });
      }
      // CHECK 2 : Password (comparision by using bcrypt library).

      const existingPassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!existingPassword) {
        return res.status(401).json({ outcome, msg: "Invalid Credentials" });
      }
      // Storing current user document id to use it with the jwt token.
      const data = {
        newUser: {
          id: existingUser.id,
        },
      };
      // Token creation.
      const auth_token = jwt.sign(data, JWT_secret);
      res.json({ auth_token });
    } catch (error) {
      // for errors.
      console.error(error.message);
      res.status(500).send("Server Error Occured");
    }
  }
);

module.exports = router; 