const mongoose = require("mongoose");
const moment = require('moment');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
 
    recordTime: {
        type: Date,
        required: true,
        default: () => moment().add(120, 'minutes').toDate()
    }

});

const Record = mongoose.model("Records", recordSchema);
module.exports = Record;