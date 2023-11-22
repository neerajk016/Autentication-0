const JWT_SECRETKEY="all my friends are toxic";


const jwt = require('jsonwebtoken');




const fetchuser=(req,res,next)=>{
    const token=req.header("auth-token");
    if(!token){
        return res.status(401).json({ errors: "please autenticate using valid token1"});
    }

    try{
        const data=jwt.verify(token,JWT_SECRETKEY);
        req.user=data.user;
        next();


    }catch (error) {
        return res.status(401).json({ errors: "please autenticate using valid token2"});
        
    }
}

module.exports=fetchuser;