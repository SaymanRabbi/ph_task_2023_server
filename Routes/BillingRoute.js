const mongoose = require('mongoose');
const route = require('express').Router();
const BillingControler = require('../Controllers/BillingContoler');
const { verifyauth } = require('../helpers/CreateToken');

// @route get api/billing-list
// @desc Get all Billing
// @access Private
route.get('/billing-list',verifyauth,BillingControler.billingListControler)
// @route post api/add-billing
// @desc add a Billing
// @access Private
route.post('/add-billing',verifyauth,BillingControler.addBillingControler)
// @route post api/update-billing/:id
// @desc updating Billing
// @access Private
module.exports = route;