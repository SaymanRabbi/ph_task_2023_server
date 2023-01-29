const userServices = require('../Services/UserServices');
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
    try {
        const user = await userServices.registerUserInfo(req.body);
        // user already exists
        if (user) {
            return res.status(400).send({success:false,message:"User Already Exists"});
        }
        // user does not exist
        const {name, email, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}