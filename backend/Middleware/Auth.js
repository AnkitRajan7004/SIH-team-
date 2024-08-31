const JWT = require('jsonwebtoken');
const jwtPass = process.env.JWT_CODE;

const jwtMiddleware = (req,res,next) => {
    const token = req.headers.authorization?.split(' ')[1];
    // Bearer JWT format
    // he ?. operator ensures that if req.headers.authorization is undefined or null
    // it won't throw an error. Instead, it will return undefined. This is useful in case the Authorization header is missing.

    if(!token){
        return res.status(401).json({message : "Unauthorized User ... Access denied"})
    }
    try{
        const decoded = JWT.verify(token,jwtPass);
        req.user = decoded;
        next();
    }catch(err){
        res.status(403).json({message: 'Invalid token' , error : err.message})
    }
}
module.exports = jwtMiddleware