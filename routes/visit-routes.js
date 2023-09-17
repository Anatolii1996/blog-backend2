const express = require('express');
const {getVisits, getCurrentIp } = require("../controllers/visit-controller");


const router = express.Router();

router.get("/ip", getCurrentIp)
router.get("/visits", getVisits);


module.exports = router;