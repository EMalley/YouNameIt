const express = require("express");
const router = express.Router();

//User model
const User = require('../../models/User');

// GET api/users
// Get all users
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        });
});

// POST api/users
// Create a post
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name
    });
    //save user to DB
    newUser.save().then(user => res.json(user));
});



module.exports = router;