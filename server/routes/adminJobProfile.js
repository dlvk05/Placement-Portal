const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const multer = require("multer");
const fs = require("fs-extra");
const mongoose = require("mongoose");
const csvConverter = require("json-2-csv");
const archiver = require("archiver");
const AdmZip = require("adm-zip");

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
        _id: req.body.jobProfileID,
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

//delete a specific job profile
router.post("/jobProfile/deleteSpecificJobProfile", (req, res) => {
  JobProfile.findByIdAndDelete(req.body.jobProfileId).then(
    (deletedJobProfile) => {
      console.log("deletedJobProfile");
      console.log(req.body.jobProfileId);
      if (!deletedJobProfile) {
        res.status(404).json({
          success: false,
          error: "profile not found",
        });
      }
      res.json({
        success: true,
        deletedJobProfile: deletedJobProfile,
      });
    }
  );
});

// get Initial applicant list of a specific profile
router.get("/jobProfile/getApplicantList/:id", (req, res) => {
  console.log("called");
  let initialApplicantsCSV = [];
  let pathToResumes = [];
  let randomFolder = String(Date.now());
  JobProfile.findById(req.params.id).then((foundJobProfile) => {
    if (!foundJobProfile) {
      res.status(404).json({
        success: false,
        error: "encountered an error",
      });
    } else {
      //save initial Applications data
      let InitialApplicationsData = foundJobProfile.InitialApplications;
      // console.log(InitialApplicationsData);
      //create list of profileIds
      let InitialApplicationProfileIds = [];

      InitialApplicationsData.forEach((application) => {
        InitialApplicationProfileIds.push(String(application.userProfile));
      });

      //create data and resume path for all ids in InitialApplicationProfileIds
      UserProfile.find({}).then((foundUserProfiles) => {
        foundUserProfiles.forEach((profile) => {
          if (InitialApplicationProfileIds.includes(String(profile._id))) {
            let temp = {
              Name: null,
              RegistrationNumber: null,
              ResumeFileName: null,
            };
            temp.Name = profile.About.Overview.Name;
            temp.RegistrationNumber = profile.Education.Current.RegNo;
            temp.ResumeFileName = profile.Resumes[0].DocumentName;
            let path = "../uploads/Profile/" + profile._id + "/Resumes/";
            //+ temp.ResumeFileName;
            initialApplicantsCSV.push(temp);
            pathToResumes.push(path);
          }
        });

        // console.log(initialApplicantsCSV);
        // console.log(pathToResumes);

        //csv file configure
        let csvFileName =
          foundJobProfile.JobProfileTitle +
          "_" +
          foundJobProfile.CompanyName +
          ".csv";
        csvConverter.json2csv(initialApplicantsCSV, (err, csv) => {
          let filePath = "../temp/" + randomFolder + "/" + csvFileName;

          //creating the csv file in temp
          fs.outputFile(filePath, csv)
            .then(() => {
              console.log("successfully saved csv");

              //---------------------------
              //moving the required resumes to temp folder
              let index = 0;
              let numberOfResumes = pathToResumes.length;

              let des = "../temp/" + randomFolder + "/" + "resumes/";
              pathToResumes.forEach((path) => {
                index++;
                fs.copy(path, des)
                  .then(() => {
                    if (index === numberOfResumes) {
                      console.log("successfully copied the resumes");
                      //---------------------
                      // adding everything to zip

                      const file = new AdmZip();

                      let zipName =
                        foundJobProfile.CompanyName +
                        "_" +
                        foundJobProfile.JobProfileTitle +
                        "_" +
                        "Applicants.zip";
                      let zipDes = "../tempResults/" + randomFolder;
                      let zipFileDes =
                        "../tempResults/" + randomFolder + "/" + zipName;
                      let zipSrc = "../temp/" + randomFolder;
                      // file.addLocalFolder("../random");
                      file.addLocalFolder(zipSrc);
                      fs.ensureDirSync(zipDes);
                      file.writeZip(zipFileDes);
                      console.log("zip created");
                      console.log(zipFileDes);
                      res.download(zipFileDes, (err) => {
                        // console.log(err);
                      });

                      //removing the temporary files
                      let desToRemove = "../temp/" + randomFolder;
                      fs.removeSync(desToRemove);
                      console.log("temporary files removed");
                      // desToRemove="../tempResults/" + randomFolder;
                      // fs.removeSync(desToRemove);
                    }
                  })
                  .catch((err) => console.log(err));
              });
            })
            .catch((err) => console.log(err));
        });
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
      //retrieve all userProfiles
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

module.exports = router;
