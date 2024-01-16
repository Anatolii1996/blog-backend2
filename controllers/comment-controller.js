const Comment = require("../models/comment");
const { handleError } = require("../helper");

const addComment = async (req, res) => {
    const newRecord = {
        name: req.body.name,
        surname: req.body.surname,
        comment: req.body.comment,
        ipAddress: req.ip,
        ipAddress_x_forwarded: req.headers['x-forwarded-for'],
        ip_remote: req.connection.remoteAddress,
    }
    const comment = new Comment(newRecord);
    await comment
        .save()
        .then(() => {
            // Отправляем пустой ответ с кодом 201 (Created)
            res.sendStatus(201);
        })
        .catch((err) => handleError(res, err));

}

const getComments = async (req, res) => {
    await Comment
        .find()
        .sort({ creatingTime: -1 })
        .then((comments) => {
            // console.log(comments)
            res
                .status(200)
                .json(comments)
        })
        .catch((err) => handleError(res, err));
}
const deleteComment = async (req, res) => {
    // console.log(req.body.ipAddress)
    await Comment
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