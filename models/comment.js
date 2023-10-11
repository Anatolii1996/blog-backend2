const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const commentSchema = new Scheme({
    ipAddress: String,
    date: String,
    creatingTime: String,
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;