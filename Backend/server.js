import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import 'dotenv/config.js'
import orderRouter from './routes/orderRouter.js'
//config
const app=express()
const PORT=process.env.PORT || 4000

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

//api endpoint for cart
app.use('/api/cart',cartRouter)

app.get('/',(req,res)=>{
res.send('API WORKING')
})

//api endpoint for order
app.use('/api/order',orderRouter);

//creating server
app.listen(PORT,()=>{
console.log(`Server is start http://localhost:${PORT}`);
})
