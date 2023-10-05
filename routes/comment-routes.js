const express = require('express');
const {addComment, getComments } = require("../controllers/comment-controller");


const router = express.Router();


router.get("/comments", getComments);
router.post("/new-comment", addComment);


module.exports = router;