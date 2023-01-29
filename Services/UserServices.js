const User = require("../Models/UserModel");
exports.registerUserInfo = async (usermail) => {
 const {email} = usermail;
 const user = await User.findOne({email});
    if (user) {
        return user
    }
    return null
}