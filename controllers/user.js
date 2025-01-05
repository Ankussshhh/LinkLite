const user = require ("../models/user")
const {v4 : uuid} = require("uuid");

const {getUser, setUser} = require("../services/auth");

async function handelUserSignup(req,res){
    const {name, email, password} = req.body;
    await user.create({
        name,
        email,
        password,
    });
    return res.render("home");
}


async function handelUserLogin(req,res){
    const {email, password} = req.body;
    const User = await user.findOne({email, password});
    
    if(!User) return res.render("/login", console.error("Wrong userid or pass")
    );

    const sessionID = uuid();
    setUser(sessionID, user);
    res.cookie("uid", sessionID);

    return res.redirect("/");
}

module.exports = {
    handelUserSignup,
    handelUserLogin
}