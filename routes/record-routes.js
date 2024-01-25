const express = require('express');
const { startAddandDelRecord } = require("../controllers/record-controller");


const router = express.Router();



router.post("/start-record", startAddandDelRecord);


module.exports = router;