const jwt = require('jsonwebtoken');
const user = require('dotenv').config();

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token.split(' ')[1], process.env.SECRET, function(err) {
            if (err) {
                return res.status(498).json({"msg":"Token is not valid"});
            }
            req.user = user["id"]
            next();
        });
    } else {    
        res.status(498).json({"msg":"No token , authorization denied"});
    }
};