
import userModel from '../models/userModel.js'
//add cartdata
const addCartdata=async(req,res)=>{
try {
let userData=await userModel.findById(req.body.userId)
let cartData= userData.cartData;
if(!cartData[req.body.itemId]){
cartData[req.body.itemId]=1;
}
else{
cartData[req.body.itemId]+=1;
}
await userModel.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({ success: true, message: "Added to the cart." });

} catch (error) {
    console.log(error);
    res.json({sucess:false,message:"error"})
}}

//remove cartdata
const removeCartdata=async(req,res)=>{

}
//get cartdata
const getCartdata=async(req,res)=>{

}

export{getCartdata,addCartdata,removeCartdata,}