import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app= express()
const PORT= 4000

app.use(cors())
//A cookie is a small piece of data stored on client side
app.use(cookieParser())



app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})