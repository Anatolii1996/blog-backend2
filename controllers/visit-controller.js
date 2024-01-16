const Visit = require("../models/visit");
const { handleError } = require("../helper")

const getVisits = async (req, res) => {
    try {
        const visitCount = await Visit.countDocuments();
        res.status(200).json({ count: visitCount });
    } catch (err) {
        handleError(res, err);
    }
}



const addVisit = async (req, res) => {
    const visit = new Visit(req.body);
    // console.log(visit)
    await visit
        .save()
        .then((result) => {
            res
                .status(201)
                .json(result)
        })
        .catch((err) => handleError(res, err));

}

module.exports = { getVisits, addVisit };