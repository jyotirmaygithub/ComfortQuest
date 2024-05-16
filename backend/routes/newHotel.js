const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const Hotels = require("../models/Hotels");
require("dotenv").config();

router.post("/register-new-hotel", fetchUserId, async (req, res) => {
  try {
    const {
      chainName,
      hotelName,
      hotelAddress,
      zipCode,
      cityName,
      stateName,
      countryName,
      hotelUrl,
      totalRooms,
      hotelDescription,
      hotelPhone,
      hotelEmail,
      price,
    } = req.body;
    // CHECK 2 : dont want two or more user of same email id.
    const data = await Hotels.create({
      owner: req.userId,
      chain_name: chainName,
      hotel_name: hotelName,
      addressline1: hotelAddress,
      zipcode: zipCode,
      city: cityName,
      state: stateName,
      country: countryName,
      url: hotelUrl,
      numberrooms: totalRooms,
      photo: "",
      overview: hotelDescription,
      phone: hotelPhone,
      email: hotelEmail,
      rates_from: price,
    });
    res.json({ userDetails: data, msg: "user entered its details" });
  } catch (error) {
    // throw errors.
    console.error(error.message);
    res.status(500).send("Internal server Error Occured");
  }
});

module.exports = router;
