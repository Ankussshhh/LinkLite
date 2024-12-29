const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    mainURL: {
        type: String,
        unique: true,
    },
    shortURL: {
        type: String,
        unique: true
    },
    count: {
        type: [{
            timestamps : Date.now(),
            visits : Number,
        }]
    },
    timestamps: true
})

const URL = mongoose.model("url", urlSchema);
module.exports = URL;
