const express = require('express');
const router = express.Router()
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'welldon',
    api_key: '613514344981642',
    api_secret: 'VeyU3yAOyY8FDWQQMW7bGN_DVQE'
})


router.post('/image-upload', (req, res) => {

    const values = Object.values(req.files)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))

    Promise
        .all(promises)
        .then(results => {
            res.send(results)
            //res.json(results)}
        })
})

module.exports = router;
