import mongoose from "mongoose";

export const connectDB= async ()=>{
await mongoose.connect(process.env.DATABASE).then(()=>{console.log('Db connected');}).catch((error)=>{console.log('error',error);})
}