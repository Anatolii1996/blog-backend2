const Visit = require("../models/visit");
const { handleError } = require("../helper")

const getVisits = async (req, res) => {
    await Visit
        .distinct("ipAddress")
        .then((visits) => {
            res.status(200)
                .json(visits)
        })
        .catch((err) => handleError(res, err));
};

const getCurrentIp = async (req, res) => {
    const currentIp = req.ip || req.headers['x-forwarded-for'];
    await res
        .status(200)
        .json({ ipAddress: currentIp })
};

const addVisit = async (req, res) => {
    const visit = new Visit(req.body);
    await visit
        .save()
        .then((result) => {
            res
                .status(201)
                .json(result)
        })
        .catch((err) => handleError(res, err));

}

module.exports = { getVisits, getCurrentIp, addVisit };