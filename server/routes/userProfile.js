const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const multer = require("multer");
const fs = require("fs-extra");

//multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let profileId = req.profileId;
    console.log(req.body);
    let path = [
      "../uploads",
      req.body.folderName,
      req.body.profileId,
      req.body.header,
      req.body.subHeader,
    ].join("/");
    // console.log(path);
    fs.mkdirsSync(path);
    cb(null, path);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadStorage = multer({ storage: storage });

//route for uploading files
router.post("/uploadFile", uploadStorage.single("file"), async (req, res) => {
  res.json({
    success: true,
  });
});

//route to download a file from server
router.get("/downloadFile", (req, res) => {
  let path = [
    "../uploads",
    req.body.folderName,
    req.body.profileId,
    req.body.header,
    req.body.subHeader,
    req.body.fileName,
  ].join("/");
  res.download(path,err=>{
    console.log(err);
  });
});

//Load Profile model
const UserProfile = require("../models/profileModel");


//get user profile
router.get("/userProfile", (req, res) => {
  UserProfile.findOne(req.profileId)
    .populate("userAccount")
    .then((profile) => {
      if (!profile) {
        return res
          .status(404)
          .json({ Error: "profile not found in the database" });
      }
      res.json({
        success: true,
        profile: profile,
      });
    });
});

//update summary
router.put("/updateUserProfile/summary", (req, res) => {
  let header = "Summary";
  let data = req.body.formData.summary;
  let updatedData = {
    [header]: data,
  };

  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    foundProfile[header] = data;
    foundProfile.save().then((updatedProfile) => {
      res.json({
        success: true,
        updatedProfile: updatedProfile,
      });
    });
  });
});

//update about
router.put("/updateUserProfile/about", (req, res) => {
  let header = "About";
  let subHeader = req.body.subHeader;
  let data = req.body.formData;
  let updatedData = null;
  let options = { new: true };
  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    console.log("called");
    console.log(foundProfile);
    if (subHeader != null) {
      foundProfile[header][subHeader] = data;
    } else {
      foundProfile[header] = data;
    }
    foundProfile.save().then((updatedProfile) => {
      res.json({
        success: true,
        updatedProfile: updatedProfile,
      });
    });
  });
});

//update education

router.put("/updateUserProfile/education", (req, res) => {
  let header = "Education";
  let subHeader = req.body.subHeader;
  let data = req.body.formData;

  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    // console.log("called");
    console.log(foundProfile);
    foundProfile[header][subHeader] = data;

    foundProfile.save().then((updatedProfile) => {
      res.json({
        success: true,
        updatedProfile: updatedProfile,
      });
    });
  });
});

//update workExp


router.put("/updateUserProfile/workExp", (req, res) => {
  let header = "WorkExp";
  let data = req.body.formData;

  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    // console.log("called");
    console.log(foundProfile);
    foundProfile[header].push(data);

    foundProfile.save().then((updatedProfile) => {
      res.json({
        success: true,
        updatedProfile: updatedProfile,
      });
    });
  });
});

//update TechnicalSkills


router.put("/updateUserProfile/TechnicalSkills", (req, res) => {
  let header = "TechnicalSkills";
  let data = req.body.formData;

  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    // console.log("called");
    console.log(foundProfile);
    foundProfile[header].push(data);

    foundProfile.save().then((updatedProfile) => {
      res.json({
        success: true,
        updatedProfile: updatedProfile,
      });
    });
  });
});

//update PositionsOfResponsibility


router.put("/updateUserProfile/PositionsOfResponsibility", (req, res) => {
  let header = "PositionsOfResponsibility";
  let data = req.body.formData;

  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    // console.log("called");
    console.log(foundProfile);
    foundProfile[header].push(data);

    foundProfile.save().then((updatedProfile) => {
      res.json({
        success: true,
        updatedProfile: updatedProfile,
      });
    });
  });
});

//update Projects


router.put("/updateUserProfile/Projects", (req, res) => {
  let header = "Projects";
  let data = req.body.formData;

  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    // console.log("called");
    console.log(foundProfile);
    foundProfile[header].push(data);

    foundProfile.save().then((updatedProfile) => {
      res.json({
        success: true,
        updatedProfile: updatedProfile,
      });
    });
  });
});

//update Accomplishments


router.put("/updateUserProfile/Accomplishments", (req, res) => {
  let header = "Accomplishments";
  let subHeader = req.body.subHeader;
  let data = req.body.formData;

  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    // console.log("called");
    console.log(foundProfile);
    foundProfile[header][subHeader].push(data);

    foundProfile.save().then((updatedProfile) => {
      res.json({
        success: true,
        updatedProfile: updatedProfile,
      });
    });
  });
});

//update Resumes


router.put("/updateUserProfile/Resumes", (req, res) => {
  let header = "Resumes";
  let data = req.body.formData;

  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    // console.log("called");
    console.log(foundProfile);
    foundProfile[header].push(data);

    foundProfile.save().then((updatedProfile) => {
      res.json({
        success: true,
        updatedProfile: updatedProfile,
      });
    });
  });
});

module.exports = router;
