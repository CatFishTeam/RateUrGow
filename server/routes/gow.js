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

module.exports =  router;