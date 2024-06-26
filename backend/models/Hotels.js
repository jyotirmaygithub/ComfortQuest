const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  chain_name: {
    type: String,
  },
  hotel_name: {
    type: String,
    required: true,
  },
  addressline1: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  star_rating: {
    type: Number,
    default: 4,
  },
  url: {
    type: String,
  },
  numberrooms: {
    type: Number,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rates_from: {
    type: Number,
    required: true,
  },
  photo1: {
    type: String,
  },
  photo2: {
    type: String,
  },
  photo3: {
    type: String,
  },
  photo4: {
    type: String,
  },
  photo5: {
    type: String,
  },
});

const Hotels = mongoose.model("hotels", hotelSchema);
module.exports = Hotels;
