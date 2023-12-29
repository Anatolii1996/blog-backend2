const Comment = require("../models/comment");
const { handleError } = require("../helper");
const { ObjectId } = require("mongodb")
const moment = require('moment');

const addComment = (req, res) => {
    const newRecord = {
        name: req.body.name,
        surname: req.body.surname,
        comment: req.body.comment,
        date: moment().format("DD.MM.YYYY HH:mm"),
        creatingTime: moment().format("DD.MM.YYYY HH:mm:ss"),
        ipAddress: req.ip || req.headers['x-forwarded-for'],
        _id: new ObjectId().toString()
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
const deleteComment = (req, res) => {
    // console.log(req.body.ipAddress)
    Comment
    .findOneAndDelete({ _id: req.body.ipAddress })
    .then((comment) => {
        if (!comment) {
            return res.status(404).json({ message: 'Комментарий не найден' });
        }
        res.status(200).json({ message: 'Комментарий успешно удален' });
    })
    .catch((err) => handleError(res, err));
}

module.exports = { addComment, getComments, deleteComment };