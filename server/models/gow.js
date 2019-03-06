const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema
const gowDetailSchema = new Schema({
    firstName: String,
    lastLame: String,
    age: {type: Number, min: 6, max: 99},
    nicknames : [String],
    releasedDate: Date
});

module.exports = db.model("gowDetail", gowDetailSchema );