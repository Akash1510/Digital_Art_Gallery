const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{
    const token = req.header('x-token')
    if(!token){
        return res.status(401).json({
            msg:'No toekn access Denied',
            success:false
     } )
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET) 
        req.user = decoded
        next();     
    } catch (error) {
        res.status(400).json({
            msg:'Invalid token',
            success:false
        })
    }
}