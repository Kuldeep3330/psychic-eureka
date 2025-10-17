import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

// ✅ Initialize session
app.use(session({
  secret: "superSecretKey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,     // prevent JS access
    maxAge: 1000 * 60,  // 1 minute for demo
  },
}));

// ✅ Mock user data (like a DB)
const USERS = [
  { username: "marco", password: "1234" },
  { username: "john", password: "abcd" }
];

// ✅ Login route — create session
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = USERS.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  // Store data in session
  req.session.user = { username: user.username };
  res.status(200).json({ message: `Welcome, ${user.username}!` });
});

// ✅ Protected route — only if logged in
app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ message: "Access denied. Please log in." });
  }

  res.json({
    message: `Hello ${req.session.user.username}, this is your dashboard.`,
    time: new Date().toLocaleTimeString()
  });
});

// ✅ Logout — destroy session
app.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).send("Error logging out");
    res.clearCookie("connect.sid"); // remove session cookie
    res.send("Logged out successfully!");
  });
});

// ✅ Start server
app.listen(4000, () => console.log("Server running at http://localhost:4000"));
