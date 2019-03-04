const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo', {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    dbName: process.env.MONGO_DBNAME,
    useNewUrlParser: true
});

const db = mongoose.connection

db.on('error', (error) => console.log(error))
db.on('open', () => {
    console.log("Connected");
});

module.exports = db;