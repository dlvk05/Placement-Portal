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

router.put("/updateUserProfile", (req, res) => {
  let header = req.header;
  let subHeader = req.subHeader;
  let data = req.formData;
  let updatedData = null;
  if (subHeader != null) {
    updatedData = {
      [header]: {
        [subHeader]: {
          ...data,
        },
      },
    };
  }else{
    updatedData = {
      [header]: {
        ...data
      }
    };
  };

  let options = { new: true };
  UserProfile.findByIdAndUpdate(req.profileId, updatedData, options).then(
    (updatedProfile) => {
      console.log(updatedProfile);
    }
  );
});

module.exports = router;
