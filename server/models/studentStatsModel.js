const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const studentStatsSchema = new Schema({
  UserProfile: { type: Schema.Types.ObjectId, ref: "userProfiles" },
  UserAccount: { type: Schema.Types.ObjectId, ref: "userAccounts" },

  QuizStats: [
    {
      QuizId: { type: Schema.Types.ObjectId, ref: "quizzes" },
      MarksScored: Number,
      AttemptedOn: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  JobProfilesAppliedFor: [
    {
      JobProfileId: { type: Schema.Types.ObjectId, ref: "jobProfiles" },
    },
  ],
  JobProfilesSelectedFor: [
    {
      JobProfileId: { type: Schema.Types.ObjectId, ref: "jobProfiles" },
    },
  ],
});

StudentStats = mongoose.model("studentStats", studentStatsSchema);

module.exports = StudentStats;
