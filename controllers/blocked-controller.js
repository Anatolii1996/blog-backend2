const BlockedUser = require("../models/blockedUser");
const { handleError } = require("../helper")

const getBlockedUsers = async (req, res) => {
    // console.log("getBlockedUsers started")
    await BlockedUser
        .distinct("_id")
        .then((visits) => {
            res.status(200)
                .json(visits)
        })
        .catch((err) => handleError(res, err));
};

const toBlockUser = async (req, res) => {
    // console.log("getBlockedUsers started")
    const newRecord = {
        _id:req.body._id,
        name: req.body.name,
        surname: req.body.surname,
        comment: req.body.comment,
        date: req.body.date,
       
    }
    const blockedUser = new BlockedUser(newRecord);
    await blockedUser
        .save()
        .then(() => {
            // Отправляем пустой ответ с кодом 201 (Created)
            res.sendStatus(201);
        })
        .catch((err) => handleError(res, err));
}
module.exports = { getBlockedUsers, toBlockUser };