const express = require('express');
const GowDetails = require('../models/gow');
const router = express.Router()

router.get('/gows', (req, res) => {
    GowDetails.find()
        .then((gows) => {
            console.log(gows)

            res.send({
                gows,
            })
        })
        .catch(error => console.log(error))
})

router.post('/gow/add', (req, res) => {
    console.log(req.body)
    const gow = new GowDetails(req.body)
    gow.lastName = 'Pham Ngoc'
    gow.age = 29
    gow.nicknames = ['Guigui', 'Minimus', 'Vieux-man']
    gow.pictures = ['guigui1.jpeg', 'guigui2.jpg', 'guigui3.jpeg', 'guigui4.jpg']
    gow.releasedDate = new Date()
    gow.save()
})

module.exports =  router;