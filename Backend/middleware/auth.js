import  Jwt  from "jsonwebtoken";

const authMiddleware=async(req,res,next)=>{
    // Check if the authorization header is provided
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized, login again",
    });
  }
const token=req.headers.authorization?.split(" ")[1];
if(!token){
res.json({sucess:false,message:'Not Authorisedd Login again'})
}
try {
    const token_decode=Jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId=token_decode.id;
    next();
} catch (error) {
    console.log(error);
    res.json({sucess:false,message:'error'})
}
}

export {authMiddleware}
