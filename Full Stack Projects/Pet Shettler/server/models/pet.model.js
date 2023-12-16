const mongoose = require("mongoose")





const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name"],
    minLength: [3, "min length must be greater than 3"],
    unique : true
    },
    type: {
        type: String,
        required: [true, "type is required"],
        min: [3, "Minimum of type must be greater than 5"],
        max: [500, "maximum of pages must be less than 500"]
    },
    description: {
        type: String,
        required: [true, "description is Required"],
        minLength: [3, "min length must be greater than 3"]
    },
    skill1: {
        type: String,
       
    },
    skill2: {
        type: String,
        
    },
    skill3: {
        type: String,
    }
}, { timestamps: true })


module.exports.pet = mongoose.model("pet", petSchema)