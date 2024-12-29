const express = require("express");

const {
  handelCreateUrl,
  handelShortID,
  handelDeleteById,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handelCreateUrl);

router.get("/:shortID", handelShortID);

router.delete("/:shortID", handelDeleteById);

module.exports = router;
