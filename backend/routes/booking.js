const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const Booking = require("../models/Booking");
require("dotenv").config();

router.post("/booking", fetchUserId, async (req, res) => {
  const {
    hotelId,
    userEmail,
    hotelPicture,
    hotelName,
    hotelAddress,
    price,
    noOfDays,
    checkIn,
    checkOut,
    userFullName,
    userPhoneNumber,
    userNoOfRooms
  } = req.body;
  try {
    await Booking.create({
      user_id: req.userId,
      hotel_id: hotelId,
      user_email: userEmail,
      user_name: userFullName,
      user_phone: userPhoneNumber,
      user_staying_days : noOfDays,
      user_total_rooms : userNoOfRooms,
      hotel_picture : hotelPicture,
      hotel_name: hotelName,
      address: hotelAddress,
      checkIn: checkIn,
      checkOut: checkOut,
      price: price,
    });
    // console.log("data = ",data)
    res.json({ msg: "user entered its booking details successfully!" });
  } catch (error) {
    // throw errors.
    console.error(error.message);
    res.status(500).send("Internal server Error Occured");
  }
});

module.exports = router;
