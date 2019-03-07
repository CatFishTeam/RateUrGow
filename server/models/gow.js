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

    physical : {
        height: Number,
        weight: Number,
        eyesColor: String,
        boobsSize: String,
        boobsRating: Number,
        buttSize: Number,
        buttRating: Number
    },

    skills: {
        cooking: Number,
        cleaning: Number,
        ironing: Number,
    },

    sexualPractices: {
        blowjob: Number,
        doggyStyle: Number,
        cowgirl: Number,
        missionary: Number,
        spoon: Number,
        sixnine: Number,
    }
});

module.exports = db.model("gowDetail", gowDetailSchema );