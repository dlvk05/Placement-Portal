const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const multer = require("multer");
const fs = require("fs-extra");

//Load JobProfile model
const JobProfile = require("../models/jobProfileModel");
const UserProfile = require("../models/profileModel");

// get all job profiles
router.get("/getAllJobProfiles", (req, res) => {
  JobProfile.find({}).then((foundJobProfiles) => {
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

//get specific job
router.get("/getJobProfile/:id", (req, res) => {
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
router.post("/addNewJobProfile", (req, res) => {
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
router.put("/addSelectedApplications", (req, res) => {
  let selectedApplicantsRegNo = req.body.selectedApplicantsData;
  let SelectedApplications = [];

  //find the job profile to update
  JobProfile.findById(req.body.jobProfileId).then((foundJobProfile) => {
    if (!foundJobProfile) {
      //jobprofile not found
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
router.get("/getApplicantList/:id", (req, res) => {
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
