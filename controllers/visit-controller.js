const Visit = require("../models/visit");

const handleError = (res, error) => {
    res.status(500).json({ error });
};

const getVisits = (req, res) => {

    Visit
        .find()
        .then((visits) => {
            res.status(200)
                .json(visits)
        })
        .catch((err) => handleError(res, err));
};

module.exports = { getVisits };