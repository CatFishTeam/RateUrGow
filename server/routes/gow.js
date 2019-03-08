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
    const pictures = req.body.images.map( image => image.url )
    const gow = new GowDetails()

    gow.firstName = req.body.firstName
    gow.lastName = req.body.lastName
    gow.age = req.body.age
    gow.nicknames = req.body.nicknames.split(',')
    gow.releasedDate = req.body.releasedDate

    gow.physical = {
        height: req.body.height,
        weight: req.body.weight,
        eyesColor: req.body.eyesColor,
        boobsSize: req.body.boobsSize,
        boobsRating: req.body.boobsRating,
        buttSize: req.body.buttSize,
        buttRating: req.body.buttRating
    }

    gow.skills = {
        cooking: req.body.cooking,
        cleaning: req.body.cleaning,
        ironing: req.body.ironing,
    }

    gow.sexualPractices = {
        blowjob: req.body.blowjob,
        doggyStyle: req.body.doggyStyle,
        cowgirl: req.body.cowgirl,
        missionary: req.body.missionary,
        spoon: req.body.spoon,
        sixnine: req.body.sixnine,
    }

    gow.pictures = pictures;
    gow.save((err, gow) => {
        if (err) {
            console.log(err)
            return json({ message:{
                error: err
            }})
        }
        res.send({
            message: {
                success: "La gow a bien ete cree",
            }
        })
    });

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
