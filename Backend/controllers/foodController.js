import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from'fs';

//add food item
const addFood=async(req,res)=>{
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
   return res.json({sucess:true,message:'foodadded'})
    
} catch (error) {
    console.log(error);
   return res.json({sucess:false,message:'error'})
}
}

//list food item
const listfood=async(req,res)=>{
const foodList= await foodModel.find({})
try {
   return res.json({sucess:true,message:foodList})
} catch (error) {
    console.log(error);
   return res.json({sucess:false,message:"error"})
}
}

//remove food item
const removefood=async(req,res)=>{
try {
//delete the image file
const food=await foodModel.findById(req.body.id);
fs.unlink(`uploads/${food.image}`,(error)=>{console.log("error"+error)})

await foodModel.findByIdAndDelete(req.body.id)
return res.json({sucess:true,message:'food removed'})
} catch (error) {
    console.log(error);
   return res.json({sucess:false,message:'error'})
}
}

export {addFood,listfood,removefood}