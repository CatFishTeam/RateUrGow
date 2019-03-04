const express = require('express');
const MovieDetails = require('../models/movie');
const router = express.Router()

router.get('/movies', (req, res) => {
    MovieDetails.find(req.query)
        .then(data =>
            res.status(200).send(data)
        );
})

module.exports =  router;