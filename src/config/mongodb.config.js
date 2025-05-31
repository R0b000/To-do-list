const mongoose = require("mongoose");
const { mongodbConfig } = require("./config");

(() => {
    try {
        mongoose.connect(mongodbConfig.url, {
            dbName: mongodbConfig.dbName,
            autoCreate: true,
            autoIndex: true,
        })
        console.log("Mongodb Connected Successfully!")
    } catch (error) {
        console.log("Mongodb not connected!");
        process.exit(1);
    }
})()