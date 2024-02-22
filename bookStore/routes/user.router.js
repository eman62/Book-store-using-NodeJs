const express=require("express")
const router=express.Router();
const { getAllUsers, getUserByEmail, addNewUser, updateUser, deleteUser, loginUser } = require("../controller/user.controller")


router.get("/",getAllUsers)
router.get("/:email",getUserByEmail)

router.post("/", addNewUser)
router.post("/login",loginUser)


module.exports=router
