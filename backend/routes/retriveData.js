const Hotel = require("../models/Hotels");
const Booking = require("../models/Booking")
const express = require("express");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId")

// Route 1 : To retrive single hotel data.
router.post(
  "/single-hotel",
  async (req, res) => {
    try {
        const {id} = req.body;
        const singleHotelData = await Hotel.findById({_id: id});
        console.log("let see the hotel =", singleHotelData);
        res.json({ HotelData: singleHotelData });
    } catch (error) {
      // throw errors.
      console.error(error.message);
      res.status(500).send("Internal server Error Occurred");
    }
  }
);

// Route 2 : To retrive single hotel data.
router.get("/hotels-data", async (req, res) => {
  try {
     // Retrieve all documents from the hotels collection
    const allHotels = await Hotel.find();
    res.send({ hotels: allHotels });
  } catch (error) {
    console.error("Error retrieving hotels:", error);
    res.status(500).send("Internal server error");
  }
});

// Route 3 : To retrive user booking data.
router.get("/user-booking-data", fetchUserId, async(req, res) => {
  try {
     // Retrieve all documents from the hotels collection
    const userBookedData = await Booking.find({user_id : req.userId});
    res.send({ userBookedData });
  } catch (error) {
    console.error("Error retrieving hotels:", error);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;
