const jwt = require("jsonwebtoken");
const secret = "ZXC1bnmap@";

function setUser(user) {
    try {
      return jwt.sign(
        { _id: user._id.toString(), email: user.email, role: user.role },
        secret
      );
    } catch (error) {
      console.error("Error generating token:", error);
      return null;
    }
  }

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    console.error("Error verifying token:", error);
    return null; 
  }
}

module.exports = {
  setUser,
  getUser,
};
