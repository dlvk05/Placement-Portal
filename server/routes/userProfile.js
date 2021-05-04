const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const multer = require("multer");
const fs = require("fs-extra");

//multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let profileId = req.body.profileId;
    let path = null;
    // console.log(req.body);
    if (req.body.subHeader != "null") {
      path = [
        "../uploads",
        req.body.folderName,
        req.body.profileId,
        req.body.header,
        req.body.subHeader,
      ].join("/");
    } else {
      path = [
        "../uploads",
        req.body.folderName,
        req.body.profileId,
        req.body.header,
      ].join("/");
    }

    console.log(path);
    fs.mkdirsSync(path);
    cb(null, path);
  },
  filename: (req, file, cb) => {
    // let d=new Date();

    // let fileName=req.body.profileId+"_"+req.body.header+"_"+req.body.subHeader+"_"+d;
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
  res.download(path, (err) => {
    console.log(err);
  });
});

//Load Profile model
const UserProfile = require("../models/profileModel");

//get user profile
router.get("/userProfile/:id", (req, res) => {
  console.log('get profile route contacted');
  console.log(req.params.id);
  UserProfile.findById(req.params.id)
    .populate("userAccount")
    .then((profile) => {
      if (!profile) {
        console.log('profile not found');
        return res
          .status(404)
          .json({ Error: "profile not found in the database" });
      }
      console.log('profile  found');
      res.json({
        success: true,
        profile: profile,
      });
    });
});

//update summary
router.put("/updateUserProfile/summary", (req, res) => {
  let header = "Summary";
  let data = req.body.formData.Summary;

  console.log("called for " + header);

  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    console.log(foundProfile);
    foundProfile[header] = data;
    // foundProfile['Summary'] = data;
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
  // console.log(req.body);

  // console.log(subHeader);
  // console.log(data);

  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    console.log(" About called for " + subHeader);
    // console.log(foundProfile);
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

  console.log("called for " + header);

  UserProfile.findById(req.body.profileId).then((foundProfile) => {
    // console.log("called");
    // console.log(foundProfile);
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
    // console.log(foundProfile);
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
    // console.log(foundProfile);
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

  console.log(" Accomplishments called for " + subHeader);

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
