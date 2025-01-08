const { getUser } = require("../services/auth");

async function restrictToLogin(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) {
    return res.redirect("/login");
  }

  try {
    const user = await getUser(userUid);
    if (!user) {
      return res.redirect("/login");
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in restrictToLogin:", error);
    return res.redirect("/login");
  }
}

async function checkAuth(req, res, next) {
  const userUid = req.cookies?.uid;
  try {
    const user = await getUser(userUid);
    req.user = user;
    next();
  } catch (error) {
    console.error("Error verifying JWT:", error);
    req.user = null;
    next();
  }
}

module.exports = { restrictToLogin, checkAuth };
