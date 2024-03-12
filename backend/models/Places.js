const mongoose = require("mongoose")

const placeSchema = new schema({
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
    photos : [String],
    description : {
        type : String,
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

const newPlaces = mongoose.model("newPlaces" , placeSchema);
module.exports = newPlaces