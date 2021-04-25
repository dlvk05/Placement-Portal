const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

//Load Profile model
const UserProfile = require("../models/profileModel");

// @route GET api/userProfile
// @desc get user profile from database
// @access Public

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
        updatedProfile: foundProfile,
      });
    });
  });
});

module.exports = router;
