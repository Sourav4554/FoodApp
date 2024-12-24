import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

//create token
const createToken=(id)=>{
return jwt.sign({id},process.env.JWT_SECRET)
}

//login user
const loginUser=async(req,res)=>{
const {email,password}=req.body;
const user=await userModel.findOne({email});
try {
    if(!user){
        return res.status(404).json({sucess:false,message:"user didn't exist"})
        }
        const check=await bcrypt.compare(password,user.password);
        if(!check){
        return res.status(401).json({sucess:false,message:"Invalid creedentials"});
        }
        const token=createToken(user._id);
        return res.status(200).json({sucess:true,token,message:"login sucessfull"})
} catch (error) {
    return res.status(500).json({sucess:false,message:"Internal server error"})
}
}
//registeruser
const signupUser=async(req,res)=>{
const {name,email,password}=req.body;
try {
    //checking user already exist
    const userExist=await userModel.findOne({email});
    if(userExist){
    return res.status(409).json({sucess:false,message:"User already Exist"});
    }
    //validating email format and strong password
    if(!validator.isEmail(email)){
    return res.status(400).json({sucess:false,message:'Please Enter a Valid email'});
    }
    const passwordRequirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if(!passwordRequirements.test(password)){
    return res.status(400).json({sucess:false,message:'Password contain 1 uppercase 1 lowercase 1 digit and alteast 6 characters'})
    }
//password hashing
const salt= await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(password,salt);
//adding to database
const newUser=new userModel({
name:name,
email:email,
password:hashedPassword,
})

const user=await newUser.save();
const token=createToken(user._id);
 return res.status(200).json({sucess:true,token})
} catch (error) {
return res.status(500).json({sucess:false,message:"Internal Server error"})
}
}



export {loginUser,signupUser}