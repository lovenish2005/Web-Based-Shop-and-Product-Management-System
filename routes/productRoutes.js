const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// CREATE PRODUCT
router.post("/products", async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
});

// GET ALL PRODUCTS
router.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// DELETE PRODUCT
router.delete("/products/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
});

module.exports = router;