import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app= express()
const PORT= 4000

app.use(cors())
//A cookie is a small piece of data stored on client side
app.use(cookieParser())

app.get('/setcookie', (req, res)=>{
    res.cookie('username', 'kuldeep', {maxAge:900000, httpOnly:true})
    res.send('cookie has been set!')
})

app.get('/getcookie',(req, res)=>{
    //cookies taht have not been signed
    const cookie=req.cookies
    console.log('cookies', cookie)
    res.send(cookie);    
})

app.get('/clearcookie', (req, res)=>{
    res.clearCookie('username');
    res.send('cookie has been cleared')
})






app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})