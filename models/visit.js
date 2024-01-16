const mongoose = require("mongoose");
const moment = require('moment');
const Schema = mongoose.Schema;

const visitSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    entryTime: {
        type: Date,
        required: true,
        default: () => moment().add(120, 'minutes').toDate()
    }

});

const Visit = mongoose.model("Visit", visitSchema);
module.exports = Visit;