const mongoose = require("mongoose")
const Schema = mongoose.Schema

const hotelSchema = new Schema({
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    images : [String],
    description : {
        type : String,
    },
    phone : {
        type : Number,
        required : true
    },
    perks : [String],
    extraInfo : {
        type : String
    },
    maxGuests : {
        type : Number,
    },
    price : {
        type : Number,
    }
})

const newPlaces = mongoose.model("hotels-trial" , hotelSchema);
module.exports = newPlaces