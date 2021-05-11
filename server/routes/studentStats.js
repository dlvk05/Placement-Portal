const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const multer = require("multer");
const fs = require("fs-extra");
const mongoose = require("mongoose");

//Load StudentStats model
const StudentStats = require("../models/studentStatsModel");

//route to get all StudentStats
router.get("/student/getAllStudentStats", (req, res) => {
  StudentStats.find({})
    .populate("UserProfile")
    .populate("UserAccount")
    // .populate("QuizStats.QuizId")
    .populate("JobProfilesAppliedFor.JobProfileId")
    .populate("JobProfilesSelectedFor.JobProfileId")
    .then((foundStudentStats) => {
      if (!foundStudentStats) {
        res.json({
          success: false,
          error: "encountered an error while loading studentStats",
        });
      }
      res.json({
        success: false,
        studentStats: foundStudentStats,
      });
    });
});

//route to get a specific Student Stat
router.get("/student/getSpecificStudentStat/:userAccountId", (req, res) => {
    console.log()
  StudentStats.findOne({ UserAccount: req.params.userAccountId })
    .populate("UserProfile")
    .populate("UserAccount")
    // .populate("QuizStats.QuizId")
    .populate("JobProfilesAppliedFor.JobProfileId")
    .populate("JobProfilesSelectedFor.JobProfileId")
    .then((foundStudentStat) => {
      if (!foundStudentStat) {
        res.status(404).json({
          success: false,
          error: "studentStat not found",
        });
      }

      res.json({
        success: true,
        foundStudentStat: foundStudentStat,
      });
    });
});

module.exports = router;

