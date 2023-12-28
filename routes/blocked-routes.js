const express = require('express');
const {getBlockedUsers } = require("../controllers/blocked-controller");


const router = express.Router();


router.get("/getBlockedUsers", getBlockedUsers);
// router.post("/new-comment", addComment);


module.exports = router;