const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const adminSchema = new Schema({
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
  employeeId: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
  department: {
    type: String,
  },
  dateOfCreation: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
});

Admin = mongoose.model("adminAccounts", adminSchema);

module.exports = Admin;
