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

router.get('/gow/:id', (req, res) => {
    console.log(req.params.id)
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