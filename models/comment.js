const mongoose = require("mongoose");
const moment = require('moment');
const { ObjectId } = require("mongodb")
const Scheme = mongoose.Schema;

const commentSchema = new Scheme({
    _id: {
        type: String,
        required: true,
        default: () => new ObjectId().toString()
    },
    ipAddress: String,
    ipAddress_x_forwarded: String,
    ip_remote: String,
    date: {
        type: String,
        required: true,
        default: () => moment().utcOffset(120).format("DD.MM.YYYY HH:mm")
    },
  
    creatingTime: {
        type: Date,
        required: true,
        default: () => moment().add(120, 'minutes').toDate()
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
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;