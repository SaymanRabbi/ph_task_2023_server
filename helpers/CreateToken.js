  // ---------------Generate Token-----------------
  exports.genaretToken = (payload, expire) => {
    return jwt.sign(payload, process.env.SECRET_TOKEN, {
      expiresIn: expire,
    });
  };