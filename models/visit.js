const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const visitSchema = new Scheme({
    ipAddress: {
        type: String,
        required: true
    },
    entryTime: {
        type: String,
        required: true
    }
    
});

const Visit = mongoose.model("Visit", visitSchema);
module.exports = Visit;