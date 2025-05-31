require("dotenv").config();

const mongodbConfig = {
    url: process.env.MONGODB_URL,
    dbName: process.env.MONGODB_DBNAME
}

module.exports = {
    mongodbConfig
}