const URL = require("../models/url");
const shortid = require("js-shortid");

async function handelCreateUrl(req, res) {
  const body = req.body;
  const sID = shortid.gen();

  if (!body.url) return res.status(400).json({ err: "Pls provide URL" });

  await URL.create({
    shortURL: sID,
    mainURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: sID });
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
  const result = await URL.findByIdAndDelete(shortid);
  res.json("USER is deleted", result);
}

module.exports = {
  handelCreateUrl,
  handelShortID,
  handelDeleteById,
};
