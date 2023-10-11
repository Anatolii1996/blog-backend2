const Comment = require("../models/comment");
const moment = require('moment');

const handleError = (res, error) => {
    res.status(500).json({ error });
};

const addComment = (req, res) => {

    const newRecord = {
        name: req.body.name,
        surname: req.body.surname,
        comment: req.body.comment,
        date: moment().format("DD.MM.YYYY HH:mm"),
        creatingTime: new Date(),
        ipAddress: req.ip || req.headers['x-forwarded-for']
    }
    const comment = new Comment(newRecord);
    comment
        .save()
        .then(() => {
            // Отправляем пустой ответ с кодом 201 (Created)
            res.sendStatus(201);
        })
        .catch((err) => handleError(res, err));

}

const getComments = (req, res) => {
    Comment
        .find()
        .sort({ creatingTime: -1 })
        .then((comments) => {
            res
                .status(200)
                .json(comments)
        })
        .catch((err) => handleError(res, err));
}

module.exports = { addComment, getComments };