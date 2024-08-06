import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'


//config
const app=express()
const PORT=4000

//middlewares
app.use(express.json())
app.use(cors())

//database connection
connectDB();

app.get('/',(req,res)=>{
res.send('API WORKING')
})

app.listen(PORT,()=>{
console.log(`Server is start http://localhost:${PORT}`);
})
//mongodb+srv://souravkrishna:sourav425933@cluster0.gwd9puz.mongodb.net/?