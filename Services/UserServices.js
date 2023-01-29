const User = require("../Models/UserModel");
exports.registerUserInfo = async (req, res) => {
 const {email} = req.body;
 const user = await User.findOne({email});
    if (user) {
        return user
    }
    return null
}