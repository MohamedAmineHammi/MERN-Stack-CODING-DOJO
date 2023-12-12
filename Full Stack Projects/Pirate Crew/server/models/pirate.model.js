const mongoose = require("mongoose")





const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is Required"]
    },
   treasure: {
        type: Number,
        required: [true, "treasure is Required"]
    },
    imageurl: {
        type: String,
        required: [true, "image  is Required"]
    },
    piratecatch: {
        type: String,
        required: [true, "piratecatch  is Required"]
    },
    Crewposition: {
        type: String,
        required: [true, "Crewposition is Required"]
    },
    peg: {
        type: String,
        default: true
    },
    eye: {
        type: Boolean,
        default: true
    },
    hook: {
        type: Boolean,
        default: true
    }



}, { timestamps: true })


module.exports.Pirate = mongoose.model("Pirate", PirateSchema)