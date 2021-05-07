const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const multer = require("multer");
const fs = require("fs-extra");
const mongoose = require("mongoose");


//Load JobProfile model
const JobProfile = require("../models/jobProfileModel");
const UserProfile = require("../models/profileModel");

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
router.get("/jobProfile/getRandomId", (req, res) => {
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

//route to download the  file attached to a update from server
router.get("/jobProfile/downloadFile", (req, res) => {
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
router.get("/jobProfile/getAllJobProfiles", (req, res) => {
  JobProfile.find({}).then((foundJobProfiles) => {
    if (!foundJobProfiles) {
      res.status(404).json({
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
router.get("/jobProfile/getJobProfile/:id", (req, res) => {
  JobProfile.findById(re(q.params.id)).then((foundJobProfile) => {
    if (!foundJobProfile) {
      res.status(404).json({
        success: false,
        error: "jobProfile not found",
      });
    }

    res.json({
      success: true,
      jobProfile: foundJobProfiles,
    });

  });
});

//Add New Job Profile
router.post("/jobProfile/addNewJobProfile", (req, res) => {
  console.log("addNewJobProfile called");
  JobProfile.findOne({
    JobProfileTitle: req.body.JobProfileTitle,
    CompanyName: req.body.CompanyName,
  }).then((jobProfile) => {
    if (jobProfile) {
      //des profile already exists with the same title and company
      return res.status(400).json({
        Error: "Profile for the same title and company already exists",
      });
    } else {
      //create new jobProfile object
      const newJobProfile = new JobProfile({
        _id:req.body.jobProfileID,
        adminAccount: req.body.adminAccount,
        ApplicationDeadLine: req.body.ApplicationDeadLine,
        JobProfileTitle: req.body.JobProfileTitle,
        CompanyName: req.body.CompanyName,
        Location: req.body.Location,
        JobSector: req.body.JobSector,
        PositionType: req.body.PositionType,
        Dream: req.body.Dream,
        OpeningOverview: req.body.OpeningOverview,
        AboutCompany: req.body.AboutCompany,
        JobDescription: req.body.JobDescription,
        RequiredSkills: req.body.RequiredSkills,
        HiringWorkflow: req.body.HiringWorkflow,
        AttachedDocuments: req.body.AttachedDocuments,
        EligibilityCriteria: req.body.EligibilityCriteria,
      });

      //   console.log(newJobProfile);
      //save the new jobProfile
      newJobProfile
        .save()
        .then((jobProfile) => {
          //send the new job profile on success
          res.json({
            success: true,
            jobProfile: jobProfile,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

//add final SelectedApplications to a jobProfile
router.put("/jobProfile/addSelectedApplications", (req, res) => {
  let selectedApplicantsRegNo = req.body.selectedApplicantsData;
  let SelectedApplications = [];

  //find the job profile to update
  JobProfile.findById(req.body.jobProfileId).then((foundJobProfile) => {
    if (!foundJobProfile) {
      //jobProfile not found
      res.status(404).json({
        success: false,
        error: "job profile not found",
      });
    } else {
      //retrieve all
      UserProfile.find({}).then((foundUserProfiles) => {
        if (!foundUserProfiles) {
          res.status(400).json({
            success: false,
            error: "encountered an error",
          });
        } else {
          foundUserProfiles.forEach((profile) => {
            let temp = {
              userAccount: null,
              userProfile: null,
            };

            if (
              selectedApplicantsRegNo.includes(profile.Education.Current.RegNo)
            ) {
              temp.userAccount = profile.userAccount;
              temp.userProfile = profile.id;
              SelectedApplications.push(temp);
            }
          });
          //forEach loop ends here
          foundJobProfile.SelectedApplications = SelectedApplications;
          foundJobProfile.save().then((updatedJobProfile) => {
            res.json({
              success: true,
              updatedJobProfile: updatedJobProfile,
            });
          });
        }
      });
    }
  });
});

//! Not complete yet
// get applicant list of a specific profile
router.get("/jobProfile/getApplicantList/:id", (req, res) => {
  JobProfile.findById(req.params.id)
    .populate("InitialApplications.userAccount")
    .populate("InitialApplications.userProfile")
    .then((foundJobProfiles) => {
      if (!foundJobProfiles) {
        res.status(400).json({
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

module.exports = router;
