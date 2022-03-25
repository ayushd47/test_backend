const express = require("express");
const router = new express.Router();
const Contact = require("../model/contact");

router.post('/contact/post', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const data = new Contact({ name: name, email: email, message: message });
    data.save()
        .then(function (result) {
            res.status(201).json({ msg: "comment inserted!" })
        })
        .catch(function (error) {
            res.status(500).json({ msg: error })
        })
})
module.exports = router