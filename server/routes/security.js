const express = require("express")
const {createToken} = require("../libs/auth")
const router = express.Router()
const User = require("../models/user")

router.post('/login_check', (req, res) => {
    console.log(req.body)
    if (req.body.username && req.body.password) {
        console.log(req.body)
        User.findOne(req.body)
            .then((user) => {
                console.log(user)
                if (user) {
                    const token = createToken({
                        firstName: user.firstName,
                        lastName: user.lastName,
                    })

                    console.log(token)

                    res.send({
                        token,
                        success: "Vous etes bien connecte"
                    })
                } else {
                    res.status(400).send({
                        error: "Invalid credentials"
                    })
                }
            })
            .catch(error => console.log(error))
    } else {
        res.status(400).send({
            error: "Invalid body"
        })
    }
})

router.post('/register', (req, res) => {
    console.log(req.body)
    if (req.body.username && req.body.password && req.body.firstName && req.body.lastName) {

        User.findOne({
            username: req.body.username
        }).then((user) => {
            console.log(user)
            if (user) {
                res.status(400).send({
                    error: "L'utilisateur existe deja"
                })
            } else {
                const user = new User(req.body)
                user.save()

                res.send({
                    success: "Le compte a ete cree"
                })
            }
        })
            .catch(error => console.log(error))
    } else {
        res.status(400).send({
            error: "Invalid body"
        })
    }
})

module.exports = router;
