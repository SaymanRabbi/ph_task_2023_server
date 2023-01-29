const userServices = require('../Services/UserServices');
const register = async (req, res) => {
    try {
        const user = await userServices.registerUserInfo(req.body);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}