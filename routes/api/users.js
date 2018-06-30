const express = require("express");
const router = express.Router();

//@route GET api/users/test
//@desc Tests post users
//@acess public

//Get from another page
router.get("/test", (req, res) => res.json({ msg: "users works" }));

//Export router
module.exports = router;
