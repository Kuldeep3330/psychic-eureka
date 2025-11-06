import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
  secret: 'apple',
  resave: false,
  saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// login page
app.get('/login', (req, res) => {
  res.render('login');
});

// handle form submission
app.post('/profile', (req, res) => {
  req.session.data = req.body; // { username: '...', password: '...' }
  res.render('profile', { data: req.session.data });
});

// home page
app.get('/', (req, res) => {
  const data = req.session.data;
  res.render('home', { data });
});

app.listen(3200, () => {
  console.log('Server is running on http://localhost:3200');
});
