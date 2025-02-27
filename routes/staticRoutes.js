const express = require("express");
const URL = require("../models/url");
const { restrictTo } = require("../middleware/auth");
const router = express.Router();

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
  const allUrl = await URL.find({});
  return res.render("home", {
    urls: allUrl,
  });
});

router.get("/", restrictTo(["ADMIN", "NORMAL"]) , async (req, res) => {
  const allUrl = await URL.find({ createdBy: req.user._id });
  return res.render("home", {
    urls: allUrl,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});
module.exports = router;
