const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
    value: String
}, {
    timestamp: true, 
    autoCreate: true, 
    autoIndex: true,
})

const storeModel = mongoose.model("store", storeSchema)

module.exports = storeModel;