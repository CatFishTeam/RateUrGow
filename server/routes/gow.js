const express = require('express');
const GowDetails = require('../models/gow');
const router = express.Router()

router.get('/gows', (req, res) => {
    GowDetails.find()
    .then((gows) => { res.send({ gows })
    })
    .catch(error => console.log(error))
})

router.post('/gow/add', (req, res) => {
    console.log(req.body)
    const pictures = req.body.images.map( image => image.url )
    const gow = new GowDetails(req.body)
    gow.pictures = pictures
    gow.releasedDate = new Date()
    gow.save()
})

router.get('/gow/:id', (req, res) => {
    GowDetails.findOne({
        _id: req.params.id
    })
        .then((gow) => {
            console.log(gow)

            res.send({
                gow,
            })
        })
        .catch(error => console.log(error))
})

module.exports = router;
