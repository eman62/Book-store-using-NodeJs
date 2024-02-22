const User = require("../models/user.model");

const getUserByEmailService = async (email) => {
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    console.error("Error in getUserByIdService:", error);
    throw error;
  }
};
////////////////////////////////////////
// const getUserByEmailService = async (email) => {
//   try {
//     return await User.findOne({email}).exec();
//   } catch (error) {
//     console.log(error);
//   }
// };
module.exports = {
  getUserByEmailService
};
