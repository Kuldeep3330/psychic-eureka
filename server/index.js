// import express from 'express'
// import cors from 'cors'
// import cookieParser from 'cookie-parser'
// import bcrypt from "bcryptjs";
// import jwt from 'jsonwebtoken';



// const app= express()
// const PORT= 4000
// // ✅ Middlewares
// app.use(cors({
//   origin: "http://localhost:5173", // your React app’s port
//   credentials: true                // ✅ important for cookies in cross-origin requests
// }));
// app.use(express.json());            // ✅ needed to parse JSON bodies (req.body)
// app.use(cookieParser());            // ✅ to read cookies from incoming requests


// const users=[]
// //register user
// app.post('/register', (req, res)=>{
//     const {username, password}= req.body
//     const hashedPassword= bcrypt.hashSync(password,10)
//     const newUser={username, password:hashedPassword}
//     users.push(newUser)
//     res.status(201).send({message:'user created', newUser})
// })

// //login
// app.post('/login', (req, res)=>{
//     const{username, password}= req.body
//     const user= users.find(user=>user.username===username)
//     if(!user) {
//         return res.status(404).send({error:'User not found'})
//     }
//     const checkPass=bcrypt.compareSync(password,user.password )

//     if(!checkPass){
//         return res.status(401).json({ error: "Invalid credentials"}) 
//     }

//     const token=jwt.sign({username}, 'merakhudkaapi', {expiresIn:"1h"})

//     res.json({token})
// })

// //middleware to verify JWT
// const authenticateJWT=(req, res, next)=>{
//     const token = req.headers.authorization?.split(" ")[1];
//     if(!token){
//         return res.status(403).json({ error: "Access denied, token missing!" });
//     }
//     try {
//     const decodedToken = jwt.verify(token, "merakhudkaapi");
//     req.user = decodedToken;
//     next();
//     } catch (err) {
//         res.status(401).json({ error: "Invalid or expired token!" });
//     }
// }

// app.get('/dashboard',authenticateJWT,(req, res)=>{
//     res.json({ message: `Welcome ${req.user.username}, this is your dashboard!` });

// })


// app.listen(PORT, ()=>{
//     console.log(`server is running on http://localhost:${PORT}`);

// })

import express from 'express'
import path from 'path'

const app= express()

const publicPath = path.resolve("public");
app.use(express.static(publicPath));
console.log(publicPath);


app.get("/", (req, res)=>{
    const absPath= path.resolve('form.html')
    res.sendFile(absPath)
})

app.listen(3200);