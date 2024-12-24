
import foodModel from "../models/foodModel.js";
import fs from'fs';


//add food item
const addFood=async(req,res)=>{
const fileType=['image/jpeg','image/png','image/gif','image/jpg','image/wepb'];
if(!fileType.includes(req.file.mimetype)){
return res.status(400).json({sucess:false,message:"Select a image file"})
}
let image_filename=`${req.file.filename}`
const {name,description,price,category}=req.body;
const food=new foodModel({
name:name,
description:description,
price:price,
category:category,
image:image_filename
})
try {
    await food.save();
   return res.status(200).json({sucess:true,message:'Sucessfully added the food'})
    
} catch (error) {
   return res.status(500).json({sucess:false,message:'Internal Server error'})
}
}

//list food item
const listfood=async(req,res)=>{
const foodList= await foodModel.find({})
try {
   return res.status(200).json({sucess:true,message:foodList})
} catch (error) {
   return res.status(500).json({sucess:false,message:"error"})
}
}

//remove food item
const removefood=async(req,res)=>{
try {
//delete the image file
const food=await foodModel.findById(req.body.id);
fs.unlink(`uploads/${food.image}`,(error)=>{console.log("error"+error)})

await foodModel.findByIdAndDelete(req.body.id)
return res.status(200).json({sucess:true,message:'food removed'})
} catch (error) {
   return res.status(500).json({sucess:false,message:'Internal Server error'})
}
}

export {addFood,listfood,removefood}