const express = require("express");
const router = express.Router();
const user = require("../model/User");
const { body, validationResult } = require('express-validator');

router.post("/createuser",
    body('email','enter correct email').isEmail(),
    body('name','name should be of atleast 8 letters').isLength({ min: 8 }),
    body('password','password should be of atleast 8 letters').isLength({ min: 8 })
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        try {
            await user.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: req.body.password
            })
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })

module.exports = router;