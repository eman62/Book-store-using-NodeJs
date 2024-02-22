const {
  getAllUsersService,
  getUserByEmailService,
  createUserService,
} = require("../services/user.service");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
const { validateUser } = require("../validators/user.validator");


const getAllUsers = async (req, res) => {
  try {
    const getUser = await getAllUsersService();
    res.send(getUser);
  } catch(e) {
    console.log("error in getting all Users");
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const getUserEmail= await getUserByEmailService(email);
    if (!getUserEmail) res.status(404).send("The user is not found");
    res.send(getUserEmail);
  } catch(e) {
    console.log("error in getting User by Email");
  }
};

const addNewUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email)
      return res.status(400).json({ msg: "Please fill all fields" });
    const User = await getUserByEmailService(email);
    if (User)
      return res.send(
        "This email is already exist, please choose another email.."
      );
    
    const passwordHash = await bcrypt.hash(password, 10);
    const { error, value } = validateUser(req.body);
    if (error) return res.status(400).send("Bad request");
    const newUser = await createUserService({
      userName,
      email,
      passwordHash,
    });
    res.status(201).send(newUser);
  } catch(e) {
    console.log("Error In Adding New User");
  }
};

const loginUser = async (req, res) => {
  try{
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: "Please fill all fields" });
  const userData = await getUserByEmailService(email);
  if (!userData)
    return res.status(400).json({ message: "Email or Password is incorrect" });
  const isValidPassword = bcrypt.compare(password, userData.passwordHash);
  if(!isValidPassword)
  return res.status(401).send({message:"password no invalid"})
const token =jwt.sign({email},"myjwtsecret",{expiresIn:"1h"})
console.log(token)
res.header({jwt:token}).send({token:token,message:"token access",data:{name:userData.userName,email:userData.email}})
}catch(error){
  res.status(500).send(error.message);
}


};
module.exports = {
  getAllUsers,
  getUserByEmail,
  addNewUser,
  loginUser,
};
