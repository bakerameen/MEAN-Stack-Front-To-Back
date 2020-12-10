const mongoose = require('mongoose');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});


const User =  module.exports = mongoose.model('User', UserSchema);

module.exports.addUser = function(newUser, callback){
newUser.save(callback);
};