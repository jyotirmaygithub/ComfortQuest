const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const Booking = require("../models/Booking");
require("dotenv").config();


router.post(
  "/booking",
  [
    // Check : for the validation of the inputs.
    body("checkIn", "Enter your check-in date"),
    body("checkOut", "Enter your check-out date"),
    body("name", "Enter a valid last name").isLength({ max: 50 }),
    body("phone", "Enter a valid phone number").isMobilePhone(),
    body("price", "Enter a valid price").isNumeric().toFloat(),
  ], fetchUserId,
  async (req, res) => {
    // Validation function to check inputs.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array(), message: "Enteries are required!" });
    }
    try {
        let {checkIn,checkOut,name,phone,price} = req.body
      // CHECK 2 : dont want two or more user of same email id.
       let data = await Booking.create({
        user_id : req.userId,
        // place : "something",
        checkIn : checkIn,
        checkOut : checkOut,
        name : name ,
        phone : phone,
        price : price
      })
      res.json({userDetails : data, msg : "user entered its details" });
    } catch (error) {
      // throw errors.
      console.error(error.message);
      res.status(500).send("Internal server Error Occured");
    }
  }
);

module.exports = router;
