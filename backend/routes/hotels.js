const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const Hotels = require("../models/Places")
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/hotels-data", async (req, res) => {
    try {
      res.send({ Hotels });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  });