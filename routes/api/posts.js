const express = require("express");
const router = express.Router();

//@route GET api/posts/test
//@desc Tests post route
//@acess public
router.get("/test", (req, res) => res.json({ msg: "posts works" }));

//Export router
module.exports = router;
