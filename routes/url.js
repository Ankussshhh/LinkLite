const express = require("express");

const {handelCreateUrl, handelShortID}  = require("../controllers/url")

const router = express.Router();

router.post("/", handelCreateUrl);

router.get('/:shortID', handelShortID )


module.exports = router;