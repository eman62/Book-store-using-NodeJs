const express=require("express")
const router=express.Router();
const { getAllBooks, getBookById, addNewBook, updateBook, deleteBook } = require("../controller/book.controller")


router.get("/",getAllBooks)
router.get("/:id",getBookById)

router.post("/", addNewBook)

router.patch("/:id",updateBook)
router.delete("/:id",deleteBook)

module.exports=router
