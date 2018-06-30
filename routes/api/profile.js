const express = require("express");
const router = express.Router();

//@route GET api/profile/test
//@desc Tests profile route
//@acess public

//Get from another page
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

//Export router
module.exports = router;
