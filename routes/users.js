const express = require('express');
const router = express.Router();

const User = require('../models/users');

// Register
router.post('/register', (req, res, next) => {
// res.send('REGISTER');
let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username    
});

User.addUser(newUser, (err, user) => {
    if(err) {
        res.json({success: false, message: 'Failed to register user'});
    } else {
        res.json({success: true, message: 'user registered'});
    }
})
});

module.exports = router;