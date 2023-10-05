const Comment = require("../models/comment");

const handleError = (res, error) => {
    res.status(500).json({ error });
};

const addComment = (req, res) => {

    const currentDate = new Date();

    // Добавляем 3 часа к текущей дате и времени
    currentDate.setHours(currentDate.getHours() + 3);

    // Преобразуем дату и время в строку в формате UTC
    const gmtPlus3TimeString = currentDate.toUTCString();

    const newRecord = {
        name: req.body.name,
        surname: req.body.surname,
        comment: req.body.comment,
        date: gmtPlus3TimeString,
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
    .then((comments)=>{
        res
        .status(200)
        .json(comments)
    })
    .catch((err) => handleError(res, err));
 }

module.exports = { addComment, getComments };