const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema
const gowDetailSchema = new Schema({
    firstname: String,
    lastname: String,
    age: {type: Number, min: 6, max: 99},
    nicknames : String,
    releaseDate: Date
});

module.exports = db.model("gowDetail", gowDetailSchema );