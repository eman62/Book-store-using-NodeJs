// here i do schema--
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    unique: true,
  },
});
// return class and to use it, i will do it in service
const User = mongoose.model("User", userSchema);
module.exports = User;
