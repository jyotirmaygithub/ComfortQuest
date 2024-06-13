const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const Hotels = require("../models/Hotels");
require("dotenv").config();

router.post("/register-hotel", fetchUserId, async (req, res) => {
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
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
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
      photo1: photo1,
      photo2: photo2,
      photo3: photo3,
      photo4: photo4,
      photo5: photo4,
    });
    console.log("data of the new hotel = ", data);
    res.json({ data });
  } catch (error) {
    // throw errors.
    console.error(error.message);
    res.status(500).send("Internal server Error Occured");
  }
});

module.exports = router;
