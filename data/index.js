// const mongoose =require("mongoose");
// const initData =require("./book.js");
// const Listing = require("../models/books.js");

// const libraryDB = "mongodb://127.0.0.1:27017/wanderlust";

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//     await mongoose.connect(libraryDB);
//   }

// const initDB = async () => {
//     await Listing.deleteMany({});
//     await Listing.insertMany(initData.data);
//     console.log("data was initialized");
//   };
  
//   initDB();