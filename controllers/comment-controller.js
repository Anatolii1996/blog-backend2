const Comment =require("../models/comment");

const handleError = (res, error) => {
    res.status(500).json({ error });
};

const addComment = (req, res) => {
    console.log(req.body)
    const comment = new Comment(req.body);
    comment
        .save()
        .then((result) => {
            // Отправляем пустой ответ с кодом 201 (Created)
            res.sendStatus(201);
        })
        .catch((err) => handleError(res, err));
    
}

module.exports = { addComment };