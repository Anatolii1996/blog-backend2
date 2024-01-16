const express = require('express');
const {getVisits, addVisit } = require("../controllers/visit-controller");


const router = express.Router();


router.get("/visits", getVisits);
router.post("/new-visit", addVisit);


module.exports = router;