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
// @route patch api/update-billing/:id
// @desc update Billing
// @access Private
route.patch('/update-billing/:id',verifyauth,BillingControler.updateBillingControler)
// @route delete api/delete-billing/:id
// @desc delete Billing
// @access Private
route.delete('/delete-billing/:id',verifyauth,BillingControler.deleteBillingControler)
module.exports = route;