const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  title: { type: String, required: true, minLength: 3, maxLength: 100 },
  author: { type: String, required: true, minLength: 3, maxLength: 100 },
  genre: { type: String, minLength: 3, maxLength: 100 },
  price: { type: Number, minLength: 3, maxLength: 100 },
});

const Book=mongoose.model("Book",bookSchema)
module.exports=Book
