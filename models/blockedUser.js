const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const blockedSchema = new Scheme({
    _id: {
        type: String,
        required: true,
       
    },
    date: String,
   
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