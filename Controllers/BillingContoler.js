const mongoose = require('mongoose');


exports.billingListControler = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send({ success: false, messages: error?.message });
    }
}