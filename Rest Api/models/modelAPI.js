const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
     name: String,
     description: String,
     price: Number
});

module.exports = new mongoose.model("Product", productSchema);