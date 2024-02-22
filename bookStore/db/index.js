const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost/booksDb";
const dbConnection = mongoose
  .connect(dbUrl)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.error("Couldn't connect to MongoDB...", error));

module.exports = dbConnection;