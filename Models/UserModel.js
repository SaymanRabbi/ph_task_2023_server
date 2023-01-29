const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!'],
        trim: true,
        maxlength: [20, 'name must have less or equal then 20 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        validate    : [validator.isEmail, 'Please provide a valid email'],

    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'A password must have more or equal then 8 characters'],
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;