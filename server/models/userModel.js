const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  regNo: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
  programme: {
    type: String,
  },
  department: {
    type: String,
  },
  semester: {
    type: String,
  },
  dateOfCreation: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

User = mongoose.model("userAccounts", userSchema);

module.exports = User;
