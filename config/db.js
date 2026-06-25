const mongoose = require("mongoose");

async function connectDB() {

    await mongoose.connect(
        "mongodb://localhost:27017/localBusinessDBase"
    );

    console.log("MongoDB Connected");
}

module.exports = connectDB;