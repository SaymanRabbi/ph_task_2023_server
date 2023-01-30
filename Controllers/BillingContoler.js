const mongoose = require('mongoose');
const Billing = require('../Models/BillingModel');
const  BillingService  = require('../Services/BillingServices');


exports.billingListControler = async (req, res) => {
    try {
        const count = await Billing.countDocuments();
        // pagination
        const queries = {}
        if(req.query.page){
            const {page=1,limit=10} = req.query;
            const skip = (page-1)*parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }
        const billingList = (await Billing.find({}).skip(queries.skip).limit(queries.limit)).reverse(); 
        res.status(200).send({ success: true, data: billingList,count });
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
        const data = await Billing.create({ name, email, phone,paidamount });
        res.status(201).send({ success: true, data: data });
    } catch (error) {
        res.status(500).send({ success: false, messages: error?.message });
    }
}
exports.updateBillingControler = async (req, res) => {
    try {
        // console.log(req.params.id,req.body);
        const ID = req.params.id.trim()
        const BillingUpdate = await Billing.findByIdAndUpdate(ID, {$set: req.body}, {runValidators: true});
        // console.log(BillingUpdate);
        if (!BillingUpdate) {
            return res.status(400).send({ success: false, message: "Billing Not Found" });
        }
        await BillingUpdate.save();
        res.status(200).send({ success: true, data: BillingUpdate });
    } catch (error) {
        res.status(500).send({ success: false, messages: error?.message });
    }
}
exports.deleteBillingControler = async (req, res) => {
    try {
        const ID = req.params.id;
        const BillingDelete = await BillingService.deleteBillingService(ID);
        if (!BillingDelete) {
            return res.status(400).send({ success: false, message: "Billing Not Found" });
        }
        res.status(200).send({ success: true, data: BillingDelete });
    } catch (error) {
        res.status(500).send({ success: false, messages: error?.message });
    }
}