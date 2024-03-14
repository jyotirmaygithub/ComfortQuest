const Hotel = require("../models/Hotels");
const express = require("express");
const router = express.Router();

router.get("/hotels-data", async (req, res) => {
  try {
     // Retrieve all documents from the hotels collection
    const allHotels = await Hotel.find();
    console.log(allHotels)
    res.send({ hotels: allHotels });
  } catch (error) {
    console.error("Error retrieving hotels:", error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
