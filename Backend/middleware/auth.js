import  Jwt  from "jsonwebtoken";

const authMiddleware=async(req,res,next)=>{
const {token}=req.headers;
if(!token){
res.json({sucess:false,message:'Not Authorised Login again'})
}
try {
    const token_decode=Jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId=token_decode.id;
    next();
} catch (error) {
    console.log(error);
    res.json({sucess:false,message:error})
}
}


export {authMiddleware}
