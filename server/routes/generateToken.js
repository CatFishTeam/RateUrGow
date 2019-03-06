const express = require("express")
const {createToken} = require("../libs/auth")
const router = express.Router()
const User = require("../models/user")

router.post('/login_check', (req, res) => {
    console.log(req.body)
    if (req.body.username && req.body.password) {
        const query = User.findOne({
            username: req.body.username,
            password: req.body.password
        })

        query.exec()
            .then((user) => {
                console.log(user)
                if (user) {
                    const token = createToken({
                        firstName: user.firstName,
                        lastName: user.lastName,
                    })

                    console.log(token)

                    res.send({token})
                } else {
                    res.status(400).send({
                        error: "Invalid credentials"
                    })
                }
            })
    } else {
        res.status(400).send({
            error: "Invalid body"
        })
    }
})

module.exports = router;
