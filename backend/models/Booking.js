const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId, 
        ref : "user",
        required : true,
    },
    place :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "place",
        required : true,
    },
    checkIn : {
        type : Date,
        required : true,
    },
    checkOut : {
        type : Date,
        required : true,
    },
    name : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    }
})
const hotelBooking = mongoose.model("hotelbooking", bookingSchema);
module.exports= hotelBooking;