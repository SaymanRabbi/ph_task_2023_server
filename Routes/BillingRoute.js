const mongoose = require('mongoose');
const route = require('express').Router();
const BillingControler = require('../Controllers/BillingContoler');

// @route get api/billing-list
// @desc Get all Billing
// @access Private

route.get('/billing-list',BillingControler.billingListControler)

module.exports = route;