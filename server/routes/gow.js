const express = require('express');
const GowDetails = require('../models/gow');
const router = express.Router()

router.get('/gows', (req, res) => {
    GowDetails.find(req.query)
        .then(data =>
            res.status(200).send(data)
        );
})

module.exports =  router;