const express = require("express")
const {createToken} = require("../libs/auth")
const router = express.Router()
const User = require("../models/user")
const bcrypt = require('bcryptjs');


router.post('/login_check', (req, res) => {
    if (req.body.username && req.body.password) {
        User.findOne({username: req.body.username})
            .then((user) => {
                if (user) {
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                        const token = createToken({
                            firstName: user.firstName,
                            lastName: user.lastName,
                        })
                        res.send({
                            token,
                            message: {
                                success: "Vous etes bien connecte"
                            }
                        })
                    } else {
                        res.status(400).send({
                            message: {
                                error: "Invalid credentials"
                            }
                        })
                    }
                } else {
                    res.status(400).send({
                        message: {
                            error: "Invalid credentials"
                        }
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
    if (req.body.username && req.body.password && req.body.firstName && req.body.lastName) {

        User.findOne({
            username: req.body.username
        }).then((user) => {
            if (user) {
                res.status(400).send({
                    error: "L'utilisateur existe deja"
                })
            } else {
                const user = new User(req.body)
                user.password = bcrypt.hashSync(req.body.password, 8);
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
