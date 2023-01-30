const userServices = require('../Services/UserServices');
const bcrypt = require("bcryptjs");
const User = require('../Models/UserModel');
const { genaretToken } = require('../helpers/CreateToken');
exports.register = async (req, res) => {
    try {
        // check if user already exists
        const getuser = await userServices.registerUserInfo(req.body);
        // user already exists
        if (getuser) {
            return res.status(400).send({success:false,message:"User Already Exists"});
        }
        // user does not exist
        const {name, email, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        // create new user
        const user = await User.create({
            name,
            email,
            password: hashPassword
        })
        // Create Token
        const token = genaretToken({id: user._id.toString()},"7d");
        res.send({
            message: "User Created Successfully",
            success: true,
            user:{user,token}
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

// login user
exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).send({success:false,message:"Please Provide Email and Password"});
        }
        const user = await userServices.loginUserInfo(req.body);
        if(!user){
            return res.status(403).send({success:false,message:"Invalid Credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).send({success:false,message:"Provide Correct Password"});
        }
         // -----------------Create and assign token-----------------
         const token = genaretToken({id: user._id.toString()},"7d");
    res.send({ success: true, message: "Login Successfully", user: { user, token } });
    } catch (error) {
        res.status(500).send({ success: false, messages: error?.message });
    }
}