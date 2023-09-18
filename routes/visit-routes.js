const express = require('express');
const {getVisits, getCurrentIp, addVisit } = require("../controllers/visit-controller");


const router = express.Router();

router.get("/ip", getCurrentIp)
router.get("/visits", getVisits);
router.post("/new-visit", addVisit);


module.exports = router;