const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const bookingSchema = new Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId, 
        ref : "user",
        required : true,
    },
    // place :{
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "place",
    //     required : true,
    // },
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
const Booking = mongoose.model("booking", bookingSchema);
module.exports= Booking;