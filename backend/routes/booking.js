const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const Booking = require("../models/Booking");
require("dotenv").config();


router.post(
  "/booking",
  fetchUserId,
  async (req, res) => {
    const {hotelId,userEmail,Hotel,Address,price,checkIn, checkOut, userFullName, userPhoneNumber} = req.body
    console.log("to see data = ",hotelId,userEmail,Hotel,Address,price,checkIn, checkOut, userFullName, userPhoneNumber)
    try {
       await Booking.create({
        user_id : req.userId,
        hotel_id: hotelId ,
        user_email: userEmail,
        user_name : userFullName ,
        user_phone : userPhoneNumber,
        hotel_name: Hotel,
        address: Address,
        checkIn : checkIn,
        checkOut : checkOut,
        price: price,
      })
      // console.log("data = ",data)
      res.json({msg : "user entered its booking details successfully!" });
    } catch (error) {
      // throw errors.
      console.error(error.message);
      res.status(500).send("Internal server Error Occured");
    }
  }
);

module.exports = router;
