const BlockedUser = require("../models/blockedUser");
const { handleError } = require("../helper")

const getBlockedUsers = (req, res) => {
    // console.log("getBlockedUsers started")
    BlockedUser
        .distinct("ipAddress")
        .then((visits) => {
            res.status(200)
                .json(visits)
        })
        .catch((err) => handleError(res, err));
}


module.exports = { getBlockedUsers };