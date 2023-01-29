const Billing = require("../Models/BillingModel");


exports.addBillingService= async (billingData) => {
    const data = await Billing.create(billingData);
    return data;
}
exports.deleteBillingService = async (id) => {
    const billing = await Billing.findByIdAndDelete(id);
    if (billing) {
        return billing
    }
    return null
}