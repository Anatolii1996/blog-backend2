const express = require('express');
const { addComment, getComments, deleteComment } = require("../controllers/comment-controller");


const router = express.Router();


router.get("/comments", getComments);
router.post("/new-comment", addComment);
router.delete("/delete-comment", deleteComment);


module.exports = router;