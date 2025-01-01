const express  = require ("express");
const router = express.Router();
const {handelUserSignup}  = require("../controllers/user");


router.post ("/", handelUserSignup);


module.exports = router;