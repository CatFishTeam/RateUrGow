const {verifyJWTToken} = require('../libs/auth')

const anonymousRoutes = [
    '/login_check',
    '/register',
    '/fixtures',
    '/gows'
]

const verifyToken = (req, res, next) => {
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