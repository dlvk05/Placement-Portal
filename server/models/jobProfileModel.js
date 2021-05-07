const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const jpbProfileSchema = new Schema({
  createdOn: {
    type: Date,
    default: Date.now,
  },
  adminAccount: { type: Schema.Types.ObjectId, ref: "adminAccounts" },
  JobProfileTitle: String,
  CompanyName: String,
  Location: String,
  JobSector: String, //dropdown
  PositionType: String, //dropdown
  Dream: {
    //checkbox
    type: Boolean,
    default: false,
  },
  OpeningOverview: {
    Domain: String,
    Category: String, //dropdown ITES,Core/Preferred Domain/R&D ,Non-core
    JobFunctions: String,
    CTCRange: String,
    AbsoluteCTC: Number,
  },
  AboutCompany: String,
  JobDescription: String,
  RequiredSkills: String,
  HiringWorkflow: [
    {
      StageNo: Number,
      StageTitle: String,
      StageVenue: String,
      StartDate: Date,
      EndDate: Date,
      StageDescription: String,
      Selects: [
        {
          userAccount: { type: Schema.Types.ObjectId, ref: "userAccounts" },
          userProfile: { type: Schema.Types.ObjectId, ref: "userProfiles" },
        },
      ],
    },
  ],
  AttachedDocuments: [
    {
      DocumentName: String,
    },
  ],
  EligibilityCriteria: {
    Backlogs: Number,
    ProgrammesAllowed: [
      {
        ProgrammeName: String,
      },
    ],
    BranchesAllowed: [
      {
        BranchName: String,
      },
    ],
    UGScoreRequired: Number, //in CGPA
    Class12thScoreRequiredPercentage: Number,
    Class12thScoreRequiredCGPA: Number,
    Class10thScoreRequiredPercentage: Number,
    Class10thScoreRequiredCGPA: Number,
  },
  //input won't be given by admin in the initial form
  StudentFeedback: [
    {
      userAccount: { type: Schema.Types.ObjectId, ref: "userAccounts" },
      FeedBackText: String,
    },
  ],
  InitialApplications: [
    {
      userAccount: { type: Schema.Types.ObjectId, ref: "userAccounts" },
      userProfile: { type: Schema.Types.ObjectId, ref: "userProfiles" },
    },
  ],
  SelectedApplications: [
    {
      userAccount: { type: Schema.Types.ObjectId, ref: "userAccounts" },
      userProfile: { type: Schema.Types.ObjectId, ref: "userProfiles" },
    },
  ],
});

JobProfile = mongoose.model("jobProfiles", jonProfileSchema);

module.exports = JobProfile;
