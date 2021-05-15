const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const mongoose = require("mongoose");
const csvConverter = require("json-2-csv");
const fs = require("fs-extra");

//Load Quiz model
const Quiz = require("../models/quizModel");
const studentStats = require("../models/studentStatsModel");

//get all quizzes
router.get("/student/quiz/getAllQuizzes", (req, res) => {
  Quiz.find({})
    .populate("AttemptedBy.UserAccount")
    .then((foundQuizzes) => {
      if (!foundQuizzes) {
        res.status(404).json({
          success: false,
          error: "encountered an error",
        });
      } else {
        res.json({
          success: true,
          quizzes: foundQuizzes,
        });
      }
    });
});

//get specific quiz
router.get("/student/quiz/getSpecificQuiz/:id", (req, res) => {
  Quiz.findById(req.params.id)
    .populate("AttemptedBy.UserAccount")
    .then((foundQuiz) => {
      if (!foundQuiz) {
        res.status(404).json({
          success: false,
          error: "quiz not found",
        });
      }

      res.json({
        success: true,
        quiz: foundQuiz,
      });
    });
});

//save student result for a specific quiz
router.put("/student/quiz/saveResult", (req, res) => {
  //update the quiz document
  Quiz.findById(req.body.quizId).then((foundQuiz) => {
    if (!foundQuiz) {
      res.status(404).json({
        success: false,
        error: "quiz not found",
      });
    } else {
      let newResult = {
        UserProfile: req.body.UserProfile,
        UserAccount: req.body.UserAccount,
        MarksScored: req.body.MarksScored,
      };
      foundQuiz.AttemptedBy.push(newResult);
      foundQuiz.save().then((updatedQuiz) => {
        res.json({
          success: true,
          updatedQuiz: updatedQuiz,
        });
      });
    }
  });

  //update student stats
  let newQuizAttempt = {
    QuizId: req.body.quizId,
    MarksScored: req.body.MarksScored,
  };

  studentStats
    .findOne({
      UserAccount: req.body.UserAccount,
    })
    .then((foundStudentStats) => {
      foundStudentStats.QuizStats.push(newQuizAttempt);
      foundStudentStats.save().then((updatedStudentStats) => {
        console.log("new quiz attempt added to studentStats ");
      });
    });
});

module.exports = router;
