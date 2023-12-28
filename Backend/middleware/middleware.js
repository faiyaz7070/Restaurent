const jwt=require("jsonwebtoken")

exports.authentication=(req,res,next)=>{
    const token=req.header('Authorization')
    if(!token){
        return res.sendStatus(401);
    }
    jwt.verify(token,'sajju',(err,user)=>{
        if(err) return res.sendStatus(403);
        req.user=user
        next()
    })
}
