const express = require('express');
const {getVisits } = require("../controllers/visit-controller");


const router = express.Router();


router.get("/visits", getVisits);


module.exports = router;