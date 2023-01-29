const mongoose = require('mongoose');
const Billing = require('../Models/BillingModel');


exports.billingListControler = async (req, res) => {
    try {
        const billingList = await Billing.find();
        res.status(200).send({ success: true, data: billingList });
    } catch (error) {
        res.status(500).send({ success: false, messages: error?.message });
    }
}