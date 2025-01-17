const userModel = require("../models/user");
// const uuid = require("uuid").v4;

const { setUser } = require("../services/auth");

async function handelUserSignup(req, res) {
  const { name, email, password } = req.body;
  await userModel.create({
    name,
    email,
    password,
  });
  return res.render("home");
}

async function handelUserLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email, password });

    if (!user) {
      return res.render("login", { error: "Invalid email or password" });
    }

    const token = setUser(user)
    res.cookie("token", token);
    return res.redirect("/");
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }

}

module.exports = {
  handelUserSignup,
  handelUserLogin,
};
