const Billing = require("../Models/BillingModel");


exports.addBillingService= async (billingData) => {
    const data = await Billing.create(billingData);
    return data;
}