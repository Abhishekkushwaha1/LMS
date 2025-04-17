// seedBooks.js
const mongoose = require('mongoose');
const Listing = require('./models/book.js');
const Db =require("./data/book.js");


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/libraryDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Connection error:', err);
});


// Insert into DB
// Book.insertMany(book)
//   .then(() => {
//     console.log('Books inserted successfully!');
//     mongoose.connection.close();
//   })
//   .catch(err => {
//     console.error('Error inserting books:', err);
//   });


const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(Db.data);
    console.log("data was initialized");
  };
  
  initDB();
  