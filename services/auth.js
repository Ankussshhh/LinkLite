const jwt = require("jsonwebtoken");
const secret = "ZXC1bnmap@";

function setUser(user) {
    try {
      return jwt.sign(
        { _id: user._id.toString(), email: user.email },
        secret
      );
    } catch (error) {
      console.error("Error generating token:", error);
      return null;
    }
  }

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secret);
}

module.exports = {
  setUser,
  getUser,
};
