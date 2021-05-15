const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const mongoose = require("mongoose");
const csvConverter = require("json-2-csv");
const fs = require("fs-extra");

//Load Quiz model
const Quiz = require("../models/quizModel");

//get all quizzes
router.get("/quiz/getAllQuizzes", (req, res) => {
  Quiz.find({}).then((foundQuizzes) => {
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
router.get("/quiz/getSpecificQuiz/:id", (req, res) => {
  Quiz.findById(req.params.id).then((foundQuiz) => {
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

//add new quiz
router.post("/quiz/addNewQuiz", (req, res) => {
  Quiz.findOne({
    QuizTitle: req.body.QuizTitle,
    QuizTopic: req.body.QuizTopic,
  }).then((foundQuiz) => {
    if (foundQuiz) {
      //des quiz already exists with the same title and topic
      return res.status(400).json({
        Error: "Quiz with the same title for the same topic already exists",
      });
    } else {
      const newQuiz = new Quiz({
        AdminAccount: req.body.AdminAccount,
        QuizTitle: req.body.QuizTitle,
        QuizTopic: req.body.QuizTopic,
        MaxMarks: req.body.MaxMarks,
        QuizBody: req.body.QuizBody,
      });
      //save new quiz
      newQuiz
        .save()
        .then((createdQuiz) => {
          res.json({
            success: true,
            createdQuiz: createdQuiz,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

//download Results for a quiz
router.get("/quiz/downloadQuizReport/:id", (req, res) => {
  console.log("/quiz/getSpecificQuiz/:id");
  let quizResultsCSV = [];
  let randomFolder = String(Date.now());

  Quiz.findById(req.params.id)
    .populate("AttemptedBy.UserAccount")
    .then((foundQuiz) => {
      if (!foundQuiz) {
        res.status(404).json({
          success: false,
          error: "quiz not found",
        });
      } else {
        let quizResults = foundQuiz.AttemptedBy;
        quizResults.forEach((result) => {
          let temp = {
            StudentName:
              result.UserAccount.firstName + " " + result.UserAccount.lastName,
            StudentRegNo: result.UserAccount.regNo,
            StudentProgramme: result.UserAccount.programme,
            StudentDepartment: result.UserAccount.department,
            MarksScored: result.MarksScored,
            DateGiven: String(result.AttemptDate).slice(4, 15),
          };
          quizResultsCSV.push(temp);
        });
        console.log(quizResultsCSV);
        //csv file configure
        let csvFileName =
          foundQuiz.QuizTitle + "_" + foundQuiz.QuizTopic + "_Results.csv";

        csvConverter.json2csv(quizResultsCSV, (err, csv) => {
          let filePath = "../temp/" + randomFolder + "/" + csvFileName;

          fs.outputFile(filePath, csv)
            .then(() => {
              console.log("successfully saved csv");
              //sending the csv to client
              res.download(filePath);
            })
            .catch((err) => console.log(err));
        });
      }
    });
});

module.exports = router;
