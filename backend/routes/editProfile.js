const express = require("express");
const router = express.Router();
const User = require("../models/User");
const fetchUserId = require("../middleware/fetchUserId");

// Route : to update or edit user profile.
router.post("/edit-profile", fetchUserId, async (req, res) => {
  try {
    const { name, picture } = req.body;
    const userDocument = await User.findById({ _id: req.userId });
    if (userDocument) {
      // Through if's checking the existence of values.
      if (name) {
        // updating the name field.
        userDocument.name = name;
      }
      if (picture) {
        //  Updating the picture field.
        userDocument.picture = picture;
      }
      await userDocument.save();
    } else {
      return res.status(404).send("No such user exists!");
    }
    res.send({ "edited user document": userDocument });
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});
module.exports = router;
