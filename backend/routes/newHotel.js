const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const fetchUserId = require("../middleware/fetchUserId");
const Hotels = require("../models/Hotels");
require("dotenv").config();

router.post("/register-new-hotel", fetchUserId, async (req, res) => {
  try {
    const { title, address, description, extraInfo, maxGuests, price} = req.body;
    // CHECK 2 : dont want two or more user of same email id.
    const data = await Hotels.create({
      owner: req.userId,
      title: title,
      address: address,
      description: description,
      phone: phone,
      price: price,
    });
    res.json({ userDetails: data, msg: "user entered its details" });
  } catch (error) {
    // throw errors.
    console.error(error.message);
    res.status(500).send("Internal server Error Occured");
  }
});

module.exports = router;
