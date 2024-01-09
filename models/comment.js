const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const commentSchema = new Scheme({
    ipAddress: String,
    date: String,
    creatingTime: Date,
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
    },
    _id: String
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;