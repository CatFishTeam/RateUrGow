const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema
const gowDetailSchema = new Schema({
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    age: {type: Number, min: 6, max: 99},
    nicknames : {type: [String], default: [""]},
    releasedDate: Date,
    pictures: [String],

    physical : {
        height: Number,
        weight: Number,
        eyesColor: {type: String, default: ""},
        boobsSize: {type: String, default: ""},
        boobsRating: {type: Number, min: 0, max: 5, default: 0},
        buttSize: Number,
        buttRating: {type: Number, min: 0, max: 5, default: 0}
    },

    skills: {
        cooking: {type: Number, min: 0, max: 5, default: 0},
        cleaning: {type: Number, min: 0, max: 5, default: 0},
        ironing: {type: Number, min: 0, max: 5, default: 0},
    },

    sexualPractices: {
        blowjob: {type: Number, min: 0, max: 5, default: 0},
        doggyStyle: {type: Number, min: 0, max: 5, default: 0},
        cowgirl: {type: Number, min: 0, max: 5, default: 0},
        missionary: {type: Number, min: 0, max: 5, default: 0},
        spoon: {type: Number, min: 0, max: 5, default: 0},
        sixnine: {type: Number, min: 0, max: 5, default: 0},
    }
});

module.exports = db.model("gowDetail", gowDetailSchema );