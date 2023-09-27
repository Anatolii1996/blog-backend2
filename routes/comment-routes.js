const express = require('express');
const {addComment } = require("../controllers/comment-controller");


const router = express.Router();


router.post("/new-comment", addComment);


module.exports = router;