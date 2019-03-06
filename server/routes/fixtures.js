const express = require('express');
const gowDetail = require('../models/gow');
const User = require('../models/user');
const router = express.Router()

router.get('/', (req, res) => {
    const user = new User()
    user.firstName = "Robin"
    user.lastName = "Regis"
    user.username = "Robilol"
    user.password = "test123"
    user.save()

    const gow = new gowDetail()
    gow.firstName = 'Guillaume'
    gow.lastLame = 'Pham Ngoc'
    gow.age = 29
    gow.nicknames = ['Guigui', 'Minimus', 'Vieux-man']
    gow.releasedDate = new Date()
    gow.save()

    res.status(200).send()
})

module.exports =  router;