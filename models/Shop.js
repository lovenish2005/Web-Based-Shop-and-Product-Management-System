const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({

    shopName: String,

    image: String,

    ownerEmail: String

});

module.exports = mongoose.model("Shop", shopSchema);