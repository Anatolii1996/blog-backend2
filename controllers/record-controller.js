const Record = require("../models/records");
const { handleError } = require("../helper")

const startAddandDelRecord = async (req, res) => {
    try {
        setInterval(async () => {
            await addRecord();
            console.log("add record");
            removeUnlessedRecord()
        }, 840000);

        // const records = await Record.find();
        // if (records.length > 10) {
        //     // Удаляем лишние записи, оставляя только последние 10
        //     const recordsToDelete = records.slice(0, records.length - 10);
        //     for (const record of recordsToDelete) {
        //         await Record.findByIdAndDelete(record._id);
        //     }
        // }
        res.sendStatus(201);

    } catch (err) {
        () => handleError()
    }



};


const addRecord = async (req, res) => {

    const record = new Record();
    await record
        .save()
}

const removeUnlessedRecord = async (req, res) => {
    const records = await Record.find();
    // console.log(records)
    if (records.length > 10) {
        // Удаляем лишние записи, оставляя только последние 10
        const recordsToDelete = records.slice(0, records.length - 10);
        for (const record of recordsToDelete) {
            await Record.findByIdAndDelete(record._id);
        }
    }
}








module.exports = { startAddandDelRecord };