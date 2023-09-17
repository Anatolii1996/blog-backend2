const { conectToDb, getDb } = require("./db");
const express = require("express");

const PORT = 3002;

const app = express();

let db;

conectToDb((err) => {
    if (!err) {
        app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Listening port ${PORT}`);
        });
        db = getDb();
    } else {
        console.log(`DB connection err ${err}`)
    }
})

