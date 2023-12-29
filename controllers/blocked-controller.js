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
};

const toBlockUser = (req, res) => {
    // console.log("getBlockedUsers started")
    const newRecord = {
        name: req.body.name,
        surname: req.body.surname,
        comment: req.body.comment,
        date: req.body.date,
        ipAddress: req.body.ipAddress,
    }
    const blockedUser = new BlockedUser(newRecord);
    blockedUser
        .save()
        .then(() => {
            // Отправляем пустой ответ с кодом 201 (Created)
            res.sendStatus(201);
        })
        .catch((err) => handleError(res, err));
}
module.exports = { getBlockedUsers, toBlockUser };