const {
  getAllBooksService,
  getBookByIdService,
  createBookService,
  deleteCourseService,
  updateBookService
} = require("../services/book.service");
const {
  validateCreateBook,
  validateUpdateBook,
} = require("../validators/book.validator");


const getAllBooks = async (req, res) => {
  const booksFromService = await getAllBooksService();
  res.send(booksFromService);
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  const bookIdEditService = await getBookByIdService(id);
  if (!bookIdEditService) res.status(404).send("The Book is not found");
  res.send(bookIdEditService);
};


const addNewBook = async (req, res) => {
  const addBook = req.body;
  const { error, value } = validateCreateBook(addBook);
  if (error) return res.status(400).send("Bad request");
  const newBookEDitService = await createBookService(addBook);
  res.status(201).send(newBookEDitService);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const bookIdEditService = await getBookByIdService(id);
  if (!bookIdEditService) return res.status(404).send("The book not found");

 
  const { error, value } = validateUpdateBook(req.body);
  if (error) 
    return res.status(400).send("Invalid Input");
  const updateBook = await updateBookService(id,req.body);
  res.send(updateBook);
  
};


const deleteBook = async (req, res) => {
  const { id } = req.params;
  const bookIdEditService = await getBookByIdService(id);
  if (!bookIdEditService) return res.status(404).send("The book not found");
  deleteCourseService(id)
  res.send("book deleted...!!!!");
};
module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
