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
        console.error("Error fetching user:", error);
        return res.redirect("/login");
    }
}

module.exports = { restrictToLogin };
