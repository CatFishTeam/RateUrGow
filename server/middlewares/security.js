const {verifyJWTToken} = require('../libs/auth')

const anonymousRoutes = [
    '/login_check',
    '/register',
    '/fixtures',
    '/gows',
    '/gow/add',
    '/gow/:id'
]

const verifyToken = (req, res, next) => {
    console.log(req.path)
    if (anonymousRoutes.includes(req.path)) {
        next();
    } else {
        const auth = req.get('Authorization');
        if (!auth || !auth.startsWith('Bearer')) {
            res.sendStatus(401)
        } else {
            verifyJWTToken(auth.replace('Bearer ', ''))
                .then(decodedToken => {
                    req.user = decodedToken;
                    next();
                })
                .catch(error => res.status(400).send({
                    error: "JWT TOKEN invalid",
                    details: error
                }))
        }
    }
};

module.exports = verifyToken