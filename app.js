const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
require('dotenv').config();
const books = require('./data/book.js');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/libraryDB')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Session config
app.use(session({
  secret: 'librarySecret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/libraryDB' })
}));

app.get('/', (req, res) => {
  res.render('index'); // Render index.html page
});

// Add more routes for other pages as needed
app.get('/books', async(req, res) => {
  const allLisitng = await books.find(); // Fetch from MongoDB
  res.render('books.ejs', { allLisitng });  // Pass to frontend
  // res.send('Books Page'); // Replace with dynamic content
});

app.get('/add-book', (req, res) => {
  res.render('addBook.ejs'); // Replace with dynamic content
});

app.get('/login', (req, res) => {
  res.render('login.ejs'); // Replace with login form
  });


  // app.get('/', async (req, res) => {
  //   const books = await Book.find(); // Fetch from MongoDB
  //   res.render('books', { books });  // Pass to frontend
  // }); 
  
// Routes
const authRoutes = require('./routes/auth');
app.use('/', authRoutes);

const bookRoutes = require('./routes/book');
app.use('/', bookRoutes);

const issueBook =require("./routes/issue")
app.use('/',issueBook);

const adminRoutes = require('./routes/admin');
app.use('/', adminRoutes);


// Test route (optional)
app.get('/test', (req, res) => {
  res.send("✅ App is working.");
});




app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
