const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name: String,

    price: Number,

    category: String,

    image: String,

    ownerEmail: String

});

module.exports = mongoose.model("Product", productSchema);