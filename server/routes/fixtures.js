const express = require('express');
const gowDetail = require('../models/gow');
const User = require('../models/user');
const router = express.Router()

router.get('/fixtures', (req, res) => {
    const user = new User()
    user.firstName = "Robin"
    user.lastName = "Regis"
    user.username = "Robilol"
    user.password = "test123"
    user.save()

    const gow = new gowDetail()
    gow.firstName = 'Guillaume'
    gow.lastName = 'Pham Ngoc'
    gow.age = 29
    gow.nicknames = ['Guigui', 'Minimus', 'Vieux-man']
    gow.pictures = ['guigui1.jpeg', 'guigui2.jpg', 'guigui3.jpeg', 'guigui4.jpg']
    gow.releasedDate = new Date()
    gow.save()

    res.status(200).send()
})

module.exports =  router;