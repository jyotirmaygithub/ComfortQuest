const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  hotel_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  user_phone: {
    type: Number,
    required: true,
  },
  user_staying_days: {
    type: Number,
    required: true,
  },
  user_total_rooms: {
    type: Number,
    required: true,
  },
  hotel_picture: [String],
  hotel_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Booking = mongoose.model("booking", bookingSchema);
module.exports = Booking;
