const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const jobProfileSchema = new Schema({
  createdOn: {
    type: Date,
    default: Date.now,
  },
  adminAccount: { type: Schema.Types.ObjectId, ref: "adminAccounts" },
  ApplicationDeadLine: Date, //-->  USED IN ADDITIONAL INFO
  CompanyRepresentativeMailId: String, //won't be shown
  JobProfileTitle: String, //-->USED IN ADDITIONAL INFO
  CompanyName: String, //!!!USED IN OPENING OVERVIEW
  Location: String, //!!! USED IN OPENING OVERVIEW
  JobSector: String, //--> USEDJobSector IN ADDITIONAL INFO dropdown
  PositionType: String, //--> USED IN ADDITIONAL INFOdropdown
  Dream: { //-->USED IN ADDITIONAL INFO
    //checkbox
    type: Boolean,
    default: false,
  },
  OpeningOverview: { //!!! USED IN OPENING OVERVIEW
    Domain: String,
    Category: String, //dropdown ITES,Core/Preferred Domain/R&D ,Non-core
    JobFunctions: String,
    CTCRange: String,
    AbsoluteCTC: Number, //won't be shown
  },
  AboutCompany: String, /* ### USED IN JOB DESCRIPTIONS COMPONENT */
  JobDescription: String, //### USED IN JOB DESCRIPTIONS COMPONENT
  RequiredSkills: String, //### USED IN JOB DESCRIPTIONS COMPONENT
  HiringWorkflow: [ //OKK USED IN HIRINGWORKFLOW COMPONENT 
    {
      StageNo: Number,
      StageTitle: String,
      StageVenue: String,
      StartDate: Date,
      EndDate: Date,
      StageDescription: String,
      Selects: [  //haven't really used this anywhere
        {
          userAccount: { type: Schema.Types.ObjectId, ref: "userAccounts" },
          userProfile: { type: Schema.Types.ObjectId, ref: "userProfiles" },
        },
      ],
    },
  ],
  AttachedDocuments: [ //-->USED IN ADDITIONAL INFO
    {
      DocumentName: String,
    },
  ],
  EligibilityCriteria: {
    Backlogs: Number,
    ProgrammesAllowed: [
      {
        type: String,
      },
    ],
    BranchesAllowed: [
      {
        type: String,
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
      Rating: Number,
      CreatedOn: {
        type: Date,
        default: Date.now,
      },
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

JobProfile = mongoose.model("jobProfiles", jobProfileSchema);

module.exports = JobProfile;
