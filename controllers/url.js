const URL = require("../models/url");
const shortid = require("js-shortid");

async function handelCreateUrl(req, res) {
    const body = req.body;
  
    if (!body.url) {
      return res.status(400).json({ error: "Please provide a URL" });
    }
  
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: "User not authenticated" });
    }
  
    const sID = shortid.gen();
  
    try {
      const newUrl = await URL.create({
        shortURL: sID,
        mainURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
      });
  
      return res.render("home", {
        id: sID,
      });
    } catch (error) {
      console.error("Error creating URL:", error);
      return res.status(500).json({ error: "Failed to create URL" });
    }
  }
  

async function handelShortID(req, res) {
  const shortID = req.params.shortID;

  const entry = await URL.findOneAndUpdate(
    { shortURL: shortID },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    },
    { new: true }
  );

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  res.redirect(entry.mainURL);
}

async function handelDeleteById(req, res) {
  const shortid = req.params.shortID;
  await URL.findByIdAndDelete(shortid);
  res.status(200).json("USER is deleted");
}

async function handelGetAllUserForAdmin(req, res) {
  const allLinks = await URL.find({});
  return res.json(allLinks);
}

module.exports = {
  handelCreateUrl,
  handelShortID,
  handelDeleteById,
  handelGetAllUserForAdmin,
};
