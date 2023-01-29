const mongoose = require('mongoose');
const validator = require('validator');

const billingSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
    },
    PaidAmount:{
        type: Number,
        required: [true, 'Paid Amount is required'],
        trim: true,
    }
})

const Billing = mongoose.model('Billing', billingSchema);
module.exports = Billing;