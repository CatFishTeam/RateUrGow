const mongoose = require('mongoose');
const db = require('../libs/db');

const Schema = mongoose.Schema
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
});

module.exports = db.model("user", userSchema );