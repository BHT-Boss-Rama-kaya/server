const jwt = require('jsonwebtoken');

function generateToken(payload){
    return jwt.sign(payload, process.env.SECRET_JWT);
};

function verifyToken(token){
    return jwt.sign(token, process.env.SECRET_JWT);
};

module.exports = { generateToken, verifyToken }