const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const blockedSchema = new Scheme({
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

const Blockeduser = mongoose.model("Blockeduser", blockedSchema);
module.exports = Blockeduser;