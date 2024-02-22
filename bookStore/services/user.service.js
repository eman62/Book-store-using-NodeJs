const User = require("../models/user.model");

const createUserService = async (dataOfUser) => {
  try {
    return await User.create(dataOfUser);
  } catch (error) {
    console.log(error);
  }
};

const getUserByEmailService = async (email) => {
  try {
    return await User.findOne({email}).exec();
  } catch (error) {
    console.log(error);
  }
};

const getAllUsersService = async () => {
  try {
    return await User.find().limit(6);
  } catch (error) {
    console.log(error);
  }
};




module.exports = {
  getUserByEmailService,
  getAllUsersService,
  createUserService,
};
