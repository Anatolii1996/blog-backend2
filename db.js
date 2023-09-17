const { MongoClient } = require("mongodb");

const URL = "mongodb://0.0.0.0:27017/dbBlogPage";

let dbConnection;

module.exports = {
    conectToDb: (cb) => {
        MongoClient
            .connect(URL)
            .then((client) => {
                console.log("Connected to DB");
                dbConnection = client.db();
                return cb();
            })
            .catch((err) => {
                return cb(err)
            })
    },
    getDb: () => dbConnection
}