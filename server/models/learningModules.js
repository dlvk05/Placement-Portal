const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const learningModuleSchema = new Schema({
  VideoModuleTitle: String,
  VideoModuleTopic: String,
  TotalVideos: Number,
  VideoModuleDescription: String,
  VideoLinks: [
    {
      VideoTitle: String,
      iframe: String,
    },
  ],
  DateOfCreation: {
    type: Date,
    default: Date.now,
  },
  AdminAccount: { type: Schema.Types.ObjectId, ref: "adminAccounts" },
});

LearningModules = mongoose.model("learningModules", learningModuleSchema);

module.exports = LearningModules;
