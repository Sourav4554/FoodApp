import mongoose from "mongoose";

export const connectDB= async ()=>{
await mongoose.connect('mongodb+srv://souravkrishna:sourav425933@cluster0.gwd9puz.mongodb.net/food-del').then(()=>{console.log('Db connected');}).catch((error)=>{console.log('error',error);})
}