const mongoose = require("mongoose");
const moment = require('moment');
const Scheme = mongoose.Schema;

const commentSchema = new Scheme({
    ipAddress: String,
    date: {
        type: String,
        required: true,
        default:  moment().format("DD.MM.YYYY HH:mm")
    },
    creatingTime: {
        type: Date,
        required: true,
        default: Date.now
    },
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