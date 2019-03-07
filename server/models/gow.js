const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema
const gowDetailSchema = new Schema({
    firstName: String,
    lastName: String,
    age: {type: Number, min: 6, max: 99},
    nicknames : [String],
    releasedDate: Date,
    pictures: [String],

    //Physical
    height: Number,
    weight: Number,
    IMC: Number,
    eyesColor: String,
    boobsSize: String,
    boobsSoftness: String
});

module.exports = db.model("gowDetail", gowDetailSchema );