const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Required"]
},
price: {
  type: Number,
  required: [true, "Price is Required"],
  min: [5, "Minimum of price must be greater than 5"],
  max: [500, "maximum of price must be less than 500"]
},
description: {
  type: String,
  required: [true, "description is Required"],
  minLength: [3, "min length must be greater than 3"]
}
},{timestamps: true})
module.exports.Product = mongoose.model("Product", ProductSchema);
