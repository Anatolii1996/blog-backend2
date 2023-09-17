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

const getCurrentIp=(req, res)=>{
    const currentIp=req.ip||req.headers['x-forwarded-for'];
    res
    .status(200)
    .json({ipAddress: currentIp})
}

module.exports = { getVisits, getCurrentIp };