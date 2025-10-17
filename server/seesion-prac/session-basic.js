import express from 'express'
import users from './data.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app= express()
const PORT= 4000
// ✅ Middlewares
app.use(cors({
  origin: "http://localhost:5173", // your React app’s port
  credentials: true                // ✅ important for cookies in cross-origin requests
}));
app.use(express.json());            // ✅ needed to parse JSON bodies (req.body)
app.use(cookieParser());            // ✅ to read cookies from incoming requests

//session setup 
app.use(session({
  secret: "mySecretKey",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000, httpOnly: true }
}));

// Login — create session
app.post("/login", (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).send("Username required");

  req.session.username = username; // store in session
  res.send(`Welcome ${username}, session started!`);
});

// Dashboard — use session
app.get("/dashboard", (req, res) => {
  if (!req.session.username) {
    return res.status(401).send("Please log in first!");
  }
  res.send(`Hello ${req.session.username}, you're logged in.`);
});

// Logout — destroy session
app.post("/logout", (req, res) => {
  req.session.destroy();
  res.send("Session destroyed, logged out!");
});


app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})