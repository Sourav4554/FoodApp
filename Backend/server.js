import express from 'express'
import cors from 'cors'


//config
const app=express()
const PORT=4000

//middlewares
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
res.send('API WORKING')
})

app.listen(PORT,()=>{
console.log(`Server is start http://localhost:${PORT}`);
})