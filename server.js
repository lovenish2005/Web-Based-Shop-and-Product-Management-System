const express = require("express");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const shopRoutes = require("./routes/shopRoutes");
const productRoutes = require("./routes/productRoutes");
const app = express();

connectDB();

app.use(express.json());

app.use(express.static("public"));

app.use(userRoutes);
app.use(shopRoutes);
app.use(productRoutes);

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});