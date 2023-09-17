const express = require("express");
const mongoose = require("mongoose");
const Visit = require("./models/visit");

const PORT = 3002;
const URL = "mongodb://0.0.0.0:27017/dbBlogPage";

const app = express();
app.use(express.json());

mongoose
    .connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));



app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});

app.get("/visits", (req, res) => {
    Visit
        .find()
        .then((visits) => {
            res.status(200)
                .json(visits)
        })
        .catch(() => {
            res
                .status(500)
                .json({ error: "Somthing does wrong" })
        }
        )
})

