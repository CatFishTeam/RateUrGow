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

    gow.physical = {
        height: 212,
        weight: 400,
        eyesColor: "Verron",
        boobsSize: "Inexistant",
        boobsRating: 0,
        buttSize: 72,
        buttRating: 8
    }

    gow.skills = {
        cooking: 10,
        cleaning: 3,
        ironing: 0,
    }

    gow.sexualPractices = {
        blowjob: 0,
        doggyStyle: 0,
        cowgirl: 0,
        missionary: 0,
        spoon: 0,
        sixnine: 0,
    }

    gow.save()

    const gow2 = new gowDetail()
    gow2.firstName = 'Emily'
    gow2.lastName = 'Ratajkowski'
    gow2.age = 27
    gow2.nicknames = ['Emrata', 'My Babe']
    gow2.pictures = ['emily1.jpg', 'emily2.jpg', 'emily3.jpg']
    gow2.releasedDate = new Date()
    gow2.save()

    const gow3 = new gowDetail()
    gow3.firstName = 'Natalya'
    gow3.lastName = 'Krasavina'
    gow3.age = 27
    gow3.nicknames = ['Natalie007']
    gow3.pictures = ['natalya1.jpg', 'natalya2.jpg', 'natalya3.jpg', 'natalya4.jpg', 'natalya5.jpg']
    gow3.releasedDate = new Date()
    gow3.save()

    res.status(200).send()
})

module.exports = router;