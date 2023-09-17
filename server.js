const express = require("express");
const mongoose = require("mongoose");
const visitRouter = require("./routes/visit-routes");

const PORT = 3002;
const URL = "mongodb://0.0.0.0:27017/dbBlogPage";

const app = express();
app.use(express.json());
app.use(visitRouter)

mongoose
    .connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));



app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});


