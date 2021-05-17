const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const profileSchema = new Schema({
  userAccount: { type: Schema.Types.ObjectId, ref: "userAccounts" },
  Summary: String,
  About: {
    Overview: {
      Name: String,
      DateOfBirth: Date,
      Gender: String,
      Category: String,
    },
    ContactDetails: {
      ContactNo: {
        value: {
          type: String,
        },
        verified: {
          type: Boolean,
          default: false,
        },
      },
      Email: {
        value: {
          type: String,
        },
        verified: {
          type: Boolean,
          default: false,
        },
      },
      PersonalEmail: {
        value: {
          type: String,
        },
        verified: {
          type: Boolean,
          default: false,
        },
      },
    },
    Address: {
      CompleteAddress: String,
      Pincode: String,
      State: String,
      City: String,
    },
    AdditionalInfo: {
      StudentWhatsappNo: Number,
      FatherName: String,
      FatherContactNo: Number,
      FatherOccupation: String,
      FatherEmail: String,
    },
  },
  //Education
  Education: {
    Current: {
      Department: String,
      Programme: String,
      RegNo: Number,
      CurrentSemester: String,
      CGPAScore: String,
      PercentageScore: String,
      StartDate: Date,
      EndDate: Date,
      CurrentCompleted:{
        type:Boolean,
        default:false,
      },
      Performance: [
        {
          SemNo: String,
          CGPA: String,
          SGPA: String,
          BacklogTotal: String,
          BacklogOngoing: String,
          MarksheetProvided: {
            type: Boolean,
            default: false,
          },
          FileName: String,
          // FileLocation: String,
        },
      ],
    },
    Class12th: {
      School: String,
      Board: String,
      Branch: String,
      EducationType: String,
      Score: String,
      ScoreType: String,
      StartDate: Date,
      EndDate: Date,
      Class12thCompleted:{
        type:Boolean,
        default:false,
      },
      MarksheetProvided: {
        type: Boolean,
        default: false,
      },
      FileName: String,
      // FileLocation: String,
    },
    Class10th: {
      School: String,
      Board: String,
      EducationType: String,
      Score: String,
      ScoreType: String,
      StartDate: Date,
      EndDate: Date,
      Class10thCompleted:{
        type:Boolean,
        default:false,
      },
      MarksheetProvided: {
        type: Boolean,
        default: false,
      },
      FileName: String,
      // FileLocation: String,
    },
  },
  //Internships and Work Exp
  WorkExp: [
    {
      Company: String,
      JobTitle: String,
      Location: String,
      PositionType: String,
      JobFunction: String,
      CompanySector: String,
      StartDate: Date,
      EndDate: Date,
      MonthlySalary: String,
      Details: String,
    },
  ],
  //Technical Skills
  TechnicalSkills: [
    {
      Skill: String,
      Proficiency: String,
      DocumentProvided: {
        type: Boolean,
        default: false,
      },
      FileName: String,
      // FileLocation: String,
    },
  ],
  //Positions of Responsibility
  PositionsOfResponsibility: [
    {
      Title: String,
      OrganizationName: String,
      StartDate: Date,
      EndDate: Date,
      Description: String,
    },
  ],
  //Projects
  Projects: [
    {
      Title: String,
      ProjectDomain: String,
      StartDate: Date,
      EndDate: Date,
      Description: String,
      DocumentProvided: {
        type: Boolean,
        default: false,
      },
      FileName: String,
      // FileLocation: String,
    },
  ],
  Accomplishments: {
    Awards: [
      {
        Title: String,
        Issuer: String,
        IssueDate: Date,
        Description: String,
      },
    ],
    Certifications: [
      {
        Title: String,
        Issuer: String,
        CertificationURL: String,
        CertificationDate: Date,
        LicenceNumber: String,
        Description: String,
      },
    ],
    Competitions: [
      {
        Title: String,
        Position: String,
        CompetitionDate: Date,
        Description: String,
      },
    ],
    Conferences: [
      {
        Title: String,
        Organizer: String,
        EventDate: Date,
        Description: String,
      },
    ],
    TestScores: [
      {
        Title: String,
        ScoreObtained: String,
        MaximumPossibleScore: String,
        RankObtained: String,
        ExamDate: Date,
        Description: String,
      },
    ],
    Publications: [
      {
        Title: String,
        Publisher: String,
        PublicationDate: Date,
        PublicationURL: String,
        Description: String,
      },
    ],
    Scholarships: [
      {
        Title: String,
        GrantDate: Date,
        Description: String,
      },
    ],
  },
  Resumes: [{
    DocumentName: String,
    dateOfCreation: {
      type: Date,
      default: Date.now,
    },
    // FileLocation: String,
  }],
});

UserProfile = mongoose.model("userProfiles", profileSchema);

module.exports = UserProfile;
