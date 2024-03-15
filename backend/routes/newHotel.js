const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const Hotels = require("../models/Hotels");
require("dotenv").config();


router.post(
  "/booking",
  [
    // Check : for the validation of the inputs.
    body("title", "Enter hotel title"),
    body("address", "Enter hotel address"),
    body("description", "Enter description of hotel").isLength({ max: 50 }),
    body("phone", "Enter a valid phone number").isMobilePhone(),
    body("extraInfo", "Enter some extra information of the hotel"),
    body("maxGuest", "Enter number of guests"),
    body("price", "Enter prices"),
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
       let data = await Hotels.create({
        owner : req.userId,
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
