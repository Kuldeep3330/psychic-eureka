import express from 'express'
import users from './data.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app= express()
const PORT= 4000
// ✅ Middlewares
app.use(cors({
  origin: "http://localhost:5173", // your React app’s port
  credentials: true                // ✅ important for cookies in cross-origin requests
}));
app.use(express.json());            // ✅ needed to parse JSON bodies (req.body)
app.use(cookieParser());            // ✅ to read cookies from incoming requests


app.post('/login',(req, res)=>{
    const{username, password}= req.body;
    if(!username || !password) {
        res.status(400).send({message:'username $ password are not found'})
    }

    res.cookie('sessionId', '123456', {maxAge:900000, httpOnly:true})
    res.cookie('username', username)
    res.status(200).json({message:'Login successful'})
})

app.get('/profile', (req, res)=>{
    const {sessionId, username}=req.cookies;
    if(sessionId!='12345')
    {
        return res.status(401).send('not valid user')
    }

    res.status(200).send(`Hello ${username}, welcome back!`)
})

//loqout route-clear cookie
app.post('/logout', (req, res)=>{
    res.clearCookie('sessionId')
    res.clearCookie('username')
    res.send('logged out successfully')
})


app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})