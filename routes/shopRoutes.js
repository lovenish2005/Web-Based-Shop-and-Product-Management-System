const express = require("express");
const router = express.Router();

const Shop = require("../models/Shop");

// CREATE SHOP
router.post("/shops", async (req, res) => {
    const shop = await Shop.create(req.body);
    res.json(shop);
});

// GET ALL SHOPS
router.get("/shops", async (req, res) => {
    const shops = await Shop.find();
    res.json(shops);
});

// DELETE SHOP (simple)
router.delete("/shops/:id", async (req, res) => {
    await Shop.findByIdAndDelete(req.params.id);
    res.json({ message: "Shop deleted" });
});

module.exports = router;