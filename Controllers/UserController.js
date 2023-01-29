const userServices = require('../Services/UserServices');
const bcrypt = require("bcryptjs");
const User = require('../Models/UserModel');
const { genaretToken } = require('../helpers/CreateToken');
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
        // create new user
        const newUser = await User.create({
            name,
            email,
            password: hashPassword
        })
        // Create Token
        const token = genaretToken({id: newUser._id.toString()},"7d");
        res.status(201).json({
            message: "User Created Successfully",
            success: true,
            user:{newUser,token}
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}