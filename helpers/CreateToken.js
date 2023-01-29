  const jwt = require("jsonwebtoken");
  // ---------------Generate Token-----------------
  exports.genaretToken = (payload, expire) => {
    return jwt.sign(payload, process.env.SECRET_TOKEN, {
      expiresIn: expire,
    });
  };

    // ---------------Verify Token-----------------
    exports.verifyToken = (token) => {
        // return jwt.verify(token, process.env.SECRET_TOKEN);
    }