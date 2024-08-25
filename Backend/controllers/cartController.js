
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

    res.json({ success: true, message: "Added to the cart." });

} catch (error) {
    console.log(error);
    res.json({sucess:false,message:"error"})
}}

//remove cartdata
const removeCartdata=async(req,res)=>{
try {
    const {itemId,userId}=req.body;
    const userData=await userModel.findById(userId);
    let cartData=userData.cartData;
    if(cartData[itemId]){
    cartData[itemId]-=1;
    
    if(cartData[itemId]){
    delete cartData[itemId];
    }
    await userModel.findByIdAndUpdate(userId, { cartData })
    res.json({success:true,message:"Cart item removed"})
}
else{
res.json({success:false,message:"no items in cart"})
}
} catch (error) {
    console.log(error);
    res.json({success:false,message:'error'})
}
}
//get cartdata
const getCartdata=async(req,res)=>{
try {
    const {userId}=req.body;
    const userData=await userModel.findById(userId);
    const cartData=userData.cartData;
    if(cartData){
    res.json({success:true,cartData});
    }
    else{
    res.json({success:false,message:"no cartdata available"});
    }
} catch (error) {
    console.log(error);
    res.json({success:false,message:"error"})
}
}

export{getCartdata,addCartdata,removeCartdata,}