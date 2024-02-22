// i use this service when i do the validation in it so
//  i will do CRUD operation to send it controller

const Book = require("../models/book.model");

// getBookById
const getBookByIdService = async (id) => {
  try {
    const book = await Book.findOne({ _id: id }).exec();
    return book;
  } catch (error) {
    console.log(error);
  }
};

// getAllBook
const getAllBooksService = async () => {
  try {
    return await Book.find().limit(6);
  } catch (error) {
    console.log(error);
  }
};

//createBook
const createBookService = async ({ title, author, genre, price }) => {
  try {
    return await Book.create({ title, author, genre, price });
  } catch (error) {
    console.log(error);
  }
};

// updateBook
const updateBookService = async (id,updateData) => {
  try {
    await Book.updateOne({ _id: id },updateData);
    return await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
};

const deleteCourseService = async (id) => {
  try {
     return await Course.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getBookByIdService,
  getAllBooksService,
  createBookService,
  updateBookService,
  deleteCourseService,
};
