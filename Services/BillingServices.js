const Billing = require("../Models/BillingModel");

exports.deleteBillingService = async (id) => {
    const billing = await Billing.findByIdAndDelete(id);
    if (billing) {
        return billing
    }
    return null
}