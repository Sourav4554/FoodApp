import foodModel from "../models/foodModel.js";
import fs from'fs';

//add food item
const addFood=async(req,res)=>{
let image_filename=`${req.file.filename}`
const food=new foodModel({
name:req.body.name,
description:req.body.description,
price:req.body.price,
category:req.body.category,
image:image_filename
})
try {
    await food.save();
    res.json({sucess:true,message:'foodadded'})
    
} catch (error) {
    console.log(error);
    res.json({sucess:false,message:'error'})
}
}

const listfood=async(req,res)=>{
const food= await foodModel.find({})
try {
    res.json({sucess:true,message:food})
} catch (error) {
    console.log(error);
    res.json({sucess:false,message:"error"})
}
}

export {addFood,listfood}