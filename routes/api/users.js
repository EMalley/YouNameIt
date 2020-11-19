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
        email: req.body.email,
        password: req.body.password,
        name: req.body.name
    });
    //save user to DB
    newUser.save().then(user => res.json(user));
});


// delete api/users/:id
// Delete an User
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(User => {
            item.remove().then(() => res.json({ success: true }))
        }).catch(err => res.status(404).json({ success: false }))
});



module.exports = router;