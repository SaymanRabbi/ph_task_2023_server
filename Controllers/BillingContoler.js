const mongoose = require('mongoose');
const Billing = require('../Models/BillingModel');
const { addBillingService } = require('../Services/BillingServices');


exports.billingListControler = async (req, res) => {
    try {
        const billingList = await Billing.find();
        res.status(200).send({ success: true, data: billingList });
    } catch (error) {
        res.status(500).send({ success: false, messages: error?.message });
    }
}

exports.addBillingControler = async (req, res) => {
    try {
        const { name, email, phone,paidamount } = req.body;
        if(!name || !email || !phone || !paidamount){
            return res.status(400).send({success:false,message:"Please Provide All Fields"});
        }
        const data = await addBillingService(req.body);
        res.status(201).send({ success: true, data: data });
    } catch (error) {
        res.status(500).send({ success: false, messages: error?.message });
    }
}

exports.updateBillingControler = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send({ success: false, messages: error?.message });
    }
}