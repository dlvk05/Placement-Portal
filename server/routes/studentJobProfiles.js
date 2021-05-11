const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const multer = require("multer");
const fs = require("fs-extra");
const mongoose = require("mongoose");

//Load JobProfile model
const JobProfile = require("../models/jobProfileModel");
const UserProfile = require("../models/profileModel");
const StudentStats = require("../models/studentStatsModel");

//multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = null;
    // console.log(req.body);
    path = ["../uploads", "JobProfiles", req.body.jobProfileID].join("/");

    console.log(path);
    fs.mkdirsSync(path);
    cb(null, path);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadStorage = multer({ storage: storage });

//route to get a random Mongoose id
router.get("/student/jobProfile/getRandomId", (req, res) => {
  let newId2 = new mongoose.mongo.ObjectId();
  res.json({
    id: newId2,
  });
});

//route for uploading files
router.post(
  "/jobProfile/uploadFile",
  uploadStorage.single("file"),
  async (req, res) => {
    console.log("/jobProfile/uploadFile called");
    res.json({
      success: true,
    });
  }
);

//route to download the  file attached to a jobProfile from server
router.get("/student/jobProfile/downloadFile", (req, res) => {
  console.log("/update/downloadFile called");
  // console.log(req.query);
  let path = null;
  let folderName = "JobProfiles";
  let jobProfileID = req.query.jobProfileID;
  let fileName = req.query.fileName;

  path = ["../uploads", folderName, jobProfileID, fileName].join("/");

  console.log("path is");
  console.log(path);
  res.download(path, (err) => {
    console.log("error occurred in res.download");
    console.log(err);
  });
});

// get all job profiles
router.get("/student/jobProfile/getAllJobProfiles", (req, res) => {
  console.log("/student/jobProfile/getAllJobProfiles called");
  JobProfile.find({}).then((foundJobProfiles) => {
    if (!foundJobProfiles) {
      res.json({
        success: false,
        error: "encountered an error",
      });
    }
    res.json({
      success: true,
      jobProfiles: foundJobProfiles,
    });
  });
});

//get specific job
router.get("/student/jobProfile/getJobProfile/:id", (req, res) => {
  JobProfile.findById(req.params.id).then((foundJobProfile) => {
    if (!foundJobProfile) {
      res.status(404).json({
        success: false,
        error: "jobProfile not found",
      });
    }
    res.json({
      success: true,
      jobProfile: foundJobProfile,
    });
    
  });
});

//apply to a job profile
router.post("/student/applyToJobProfile", (req, res) => {
  //add the userAccountId and userProfileId to initialApplications array of job
  JobProfile.findById(req.body.jobProfileId)
    .then((foundJobProfile) => {
      let temp = {
        userAccount: req.body.userAccountId,
        userProfile: req.body.userProfileId,
      };
      foundJobProfile.InitialApplications.push(temp);
      foundJobProfile
        .save()
        .then((updatedJobProfile) => {
          console.log("applied to the job for student");
          res.json({
            success: true,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

  //add the jobProfileId to JobProfilesAppliedFor array of studentStats
  StudentStats.findOne({ UserAccount: req.body.userAccountId })
    .then((foundStudentStats) => {
      if (!foundStudentStats) {
        console.log("error occurred in finding studentStats");
      } else {
        let temp = {
          JobProfileId: req.body.jobProfileId,
        };

        foundStudentStats.JobProfilesAppliedFor.push(temp);
        foundStudentStats
          .save()
          .then((updatedStudentStats) => {
            if (!updatedStudentStats) {
              console.log("error occurred in updating studentStats");
            } else {
              console.log("jobProfile added to studentStats");
            }
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
});

//withdraw application from a specific job Profile
router.post("/student/withdrawFromJobProfile", (req, res) => {
  //remove the userAccountId and userProfileId from initialApplications array of job
  JobProfile.findById(req.body.jobProfileId)
    .then((foundJobProfile) => {
      let temp = {
        userAccount: req.body.userAccountId,
        userProfile: req.body.userProfileId,
      };
      let newInitialApplications = [];
      foundJobProfile.InitialApplications.forEach((Application) => {
        if (
          Application.userAccount != temp.userAccount &&
          Application.userProfile != temp.userProfile
        ) {
          newInitialApplications.push(Application);
        }
      });
      foundJobProfile.InitialApplications = newInitialApplications;
      foundJobProfile
        .save()
        .then((updatedJobProfile) => {
          console.log("withdrawn  from the job for student");
          res.json({
            success: true,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

  //remove the jobProfileId from JobProfilesAppliedFor array of studentStats
  StudentStats.findOne({ UserAccount: req.body.userAccountId })
    .then((foundStudentStats) => {
      if (!foundStudentStats) {
        console.log("error occurred in finding studentStats");
      } else {
        let temp = {
          JobProfileId: req.body.jobProfileId,
        };
        let newJobProfilesAppliedFor = [];
        foundStudentStats.JobProfilesAppliedFor.forEach((JobProfile) => {
          if (JobProfile.JobProfileId != temp.JobProfileId) {
            newJobProfilesAppliedFor.push(JobProfile);
          }
        });
        foundStudentStats.JobProfilesAppliedFor = newJobProfilesAppliedFor;
        foundStudentStats
          .save()
          .then((updatedStudentStats) => {
            if (!updatedStudentStats) {
              console.log("error occurred in updating studentStats");
            } else {
              console.log("jobProfile removed from studentStats");
            }
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
});

//add feedback regarding a Job Profile Process
router.post("/student/addFeedbackToJobProfile", (req, res) => {
  //remove the userAccountId and userProfileId from initialApplications array of job
  JobProfile.findById(req.body.jobProfileId)
    .then((foundJobProfile) => {
      let temp = {
        userAccount: req.body.userAccountId,
        FeedBackText: req.body.FeedBackText,
        Rating: req.body.Rating,
      };

      foundJobProfile.StudentFeedback.push(temp);
      foundJobProfile
        .save()
        .then((updatedJobProfile) => {
          console.log("added feedback  to the job for student");
          res.json({
            success: true,
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
