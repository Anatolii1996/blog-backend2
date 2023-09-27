const Visit = require("../models/visit");

const handleError = (res, error) => {
    res.status(500).json({ error });
};

const getVisits = (req, res) => {

    Visit
        .distinct("ipAddress")
        .then((visits) => {
            res.status(200)
                .json(visits)
        })
        .catch((err) => handleError(res, err));
};

const getCurrentIp = (req, res) => {
    const currentIp = req.ip || req.headers['x-forwarded-for'];
    res
        .status(200)
        .json({ ipAddress: currentIp })
};

const addVisit = (req, res) => {
    const visit = new Visit(req.body);
    visit
        .save()
        .then((result) => {
            res
                .status(201)
                .json(result)
        })
        .catch((err) => handleError(res, err));
    
}

module.exports = { getVisits, getCurrentIp, addVisit };