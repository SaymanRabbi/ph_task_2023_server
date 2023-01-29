const mongoose = require('mongoose');
const route = require('express').Router();
const BillingControler = require('../Controllers/BillingContoler');

// @route get api/billing-list
// @desc Get all Billing
// @access Private
route.get('/billing-list',BillingControler.billingListControler)
// @route post api/add-billing
// @desc add a Billing
// @access Private
route.post('/add-billing',BillingControler.addBillingControler)
module.exports = route;