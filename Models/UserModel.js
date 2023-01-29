const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please tell us your firstname!'],
        trim: true,
        maxlength: [20, 'A firstname must have less or equal then 20 characters'],
    },
    lastname: {
        type: String,
        required: [true, 'Please tell us your lastname!'],
        trim: true,
        maxlength: [20, 'A lastname must have less or equal then 20 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        validator: [validator.isEmail, 'Please provide a valid email'],

    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'A password must have more or equal then 8 characters'],
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;