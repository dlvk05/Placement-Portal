const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const updatesSchema = new Schema({
  UpdateTitle: String,
  DateOfCreation: {
    type: Date,
    default: Date.now,
  },
  AdminAccount: { type: Schema.Types.ObjectId, ref: "adminAccounts" },
  UpdateBody: String,
  FileAttached: {
    type: Boolean,
    default: false,
  },
  FileName: String,
});

Updates = mongoose.model("updates", updatesSchema);

module.exports = Updates;
