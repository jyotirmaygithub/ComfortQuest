const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDetails = new Schema({
  first_name: {
    type: String,
    required: true, // this means that the field is mandatory to fill in. If it's not filled in, an error will be
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken:String,
  expireToken:Date,
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("user", userDetails);
module.exports = User;
