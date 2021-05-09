const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const quizSchema = new Schema({
  QuizTitle: String,
  QuizTopic: String,
  MaxMarks: Number,
  DateOfCreation: {
    type: Date,
    default: Date.now,
  },
  AdminAccount: { type: Schema.Types.ObjectId, ref: "adminAccounts" },
  QuizBody: [
    {
      question: String,
      option1: String,
      option2: String,
      option3: String,
      option4: String,
      correctOption: Number,
    },
  ],
  AttemptedBy: [
    {
      UserProfile: { type: Schema.Types.ObjectId, ref: "userProfiles" },
      UserAccount: { type: Schema.Types.ObjectId, ref: "userAccounts" },
      MarksScored: Number,
      AttemptDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

Quiz = mongoose.model("quizzes", quizSchema);

module.exports = Quiz;
