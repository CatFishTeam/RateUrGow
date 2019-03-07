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
        boobsRating: {type: Number, min: 0, max: 10},
        buttSize: Number,
        buttRating: {type: Number, min: 0, max: 10}
    },

    skills: {
        cooking: {type: Number, min: 0, max: 10},
        cleaning: {type: Number, min: 0, max: 10},
        ironing: {type: Number, min: 0, max: 10},
    },

    sexualPractices: {
        blowjob: {type: Number, min: 0, max: 10},
        doggyStyle: {type: Number, min: 0, max: 10},
        cowgirl: {type: Number, min: 0, max: 10},
        missionary: {type: Number, min: 0, max: 10},
        spoon: {type: Number, min: 0, max: 10},
        sixnine: {type: Number, min: 0, max: 10},
    }
});

module.exports = db.model("gowDetail", gowDetailSchema );