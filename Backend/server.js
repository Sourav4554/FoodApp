import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config.js'
//config
const app=express()
const PORT=4000

//middlewares
app.use(express.json())
app.use(cors())

//database connection
connectDB();

//api endpoint for food
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'));

//api endpoint for user
app.use('/api/user',userRouter)
app.get('/',(req,res)=>{
res.send('API WORKING')
})

//creating server
app.listen(PORT,()=>{
console.log(`Server is start http://localhost:${PORT}`);
})
