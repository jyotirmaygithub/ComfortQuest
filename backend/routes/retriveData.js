const Hotel = require("../models/Hotels");
const express = require("express");
const router = express.Router();

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

module.exports = router;
