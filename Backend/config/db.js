import mongoose from "mongoose";

//database connection
export const connectDB= async ()=>{
await mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('Db connected');}).catch((error)=>{console.log('error',error);})
}