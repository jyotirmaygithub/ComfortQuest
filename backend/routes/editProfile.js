const express = require("express");
const router = express.Router();
const User = require("../models/User")
const fetchUserId = require("../middleware/fetchUserId");
const { body, validationResult } = require("express-validator");

router.get( "/edit-profile", fetchUserId, async (req, res) =>{
    
})
module.exports = router