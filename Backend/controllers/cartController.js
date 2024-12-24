
import userModel from '../models/userModel.js'

//add cartdata
const addCartdata=async(req,res)=>{
try {
const {itemId,userId}=req.body;
let userData=await userModel.findById(userId)
let cartData= userData.cartData;

if(!cartData[itemId]){
cartData[itemId]=1;
}
else{
cartData[itemId]+=1;
}
await userModel.findByIdAndUpdate(userId, { cartData });
  return  res.status(200).json({ success: true, message: "Added to the cart." });
} catch (error) {
  return  res.status(500).json({sucess:false,message:"Internal server error"})
}}

//remove cartdata
const removeCartdata=async(req,res)=>{
try {
    const {itemId,userId}=req.body;
    const userData=await userModel.findById(userId);
    let cartData=userData.cartData;
    if(cartData[itemId]){
    cartData[itemId]-=1;
    
    if(cartData[itemId]<=0){
    delete cartData[itemId];
    }
    await userModel.findByIdAndUpdate(userId, { cartData })
   return res.status(200).json({success:true,message:"Cart item removed"})
}
else{
return res.status(400).json({success:false,message:"no items in cart"})
}
} catch (error) {
    console.log(error);
  return  res.status(500).json({success:false,message:'Internal server error'})
}
}
//get cartdata
const getCartdata=async(req,res)=>{
try {
    const {userId}=req.body;
    const userData=await userModel.findById(userId);
    const cartData=userData.cartData;
    if(cartData){
   return res.status(200).json({success:true,message:cartData});
    }
    else{
   return res.status(400).json({success:false,message:"no cartdata available"});
    }
} catch (error) {
    console.log(error);
   return res.status(500).json({success:false,message:"Internal Server Error"})
}
}

export{getCartdata,addCartdata,removeCartdata,}