const express = require('express');
const { getBlockedUsers, toBlockUser } = require("../controllers/blocked-controller");


const router = express.Router();


router.get("/getBlockedUsers", getBlockedUsers);
router.post("/addBlockedUsers", toBlockUser);


module.exports = router;