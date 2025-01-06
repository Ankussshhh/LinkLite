const express = require("express");

const {
  handelCreateUrl,
  handelShortID,
  handelDeleteById,
  handelGetAllUserForAdmin,
} = require("../controllers/url");

const router = express.Router();

router.route("/").get(handelGetAllUserForAdmin).post(handelCreateUrl);

router.route("/:shortID").delete(handelDeleteById).get(handelShortID);

module.exports = router;
