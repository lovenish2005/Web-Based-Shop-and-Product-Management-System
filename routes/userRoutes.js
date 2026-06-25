const express = require("express");
const router = express.Router();

const User = require("../models/User");


router.post("/register", async (req, res) => {

    await User.create(req.body);

    res.json({
        message: "User Registered"
    });

});


router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({
        email,
        password
    });

    if(user){
        res.json({
            success: true
        });
    }
    else{
        res.json({
            success: false
        });
    }

});

module.exports = router;