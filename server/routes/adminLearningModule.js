const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const mongoose = require("mongoose");
const csvConverter = require("json-2-csv");
const fs = require("fs-extra");

//Load model
const LearningModule = require("../models/learningModules");

//get all modules
router.get("/learningModules/getAllModules", (req, res) => {
  LearningModule.find({}).then((foundModules) => {
    if (!foundModules) {
      res.status(404).json({
        success: false,
        error: "encountered an error",
      });
    } else {
      res.json({
        success: true,
        modules: foundModules,
      });
    }
  });
});

//get specific module
router.get("/learningModules/getSpecificModule/:id", (req, res) => {
  LearningModule.findById(req.params.id).then((foundModule) => {
    if (!foundModule) {
      res.status(404).json({
        success: false,
        error: "module not found",
      });
    }

    res.json({
      success: true,
      module: foundModule,
    });
  });
});

//add new Module
router.post("/learningModules/addNewLearningModule", (req, res) => {
  LearningModule.findOne({
    VideoModuleTitle: req.body.VideoModuleTitle,
    VideoModuleTopic: req.body.VideoModuleTopic,
  }).then((foundModule) => {
    if (foundModule) {
      //des Module already exists with the same title and topic
      return res.status(400).json({
        Error: "Module with the same title for the same topic already exists",
      });
    } else {
      const newModule = new LearningModule({
        VideoModuleTitle: req.body.VideoModuleTitle,
        VideoModuleTopic: req.body.VideoModuleTopic,
        TotalVideos: req.body.TotalVideos,
        VideoModuleDescription: req.body.VideoModuleDescription,
        VideoLinks: req.body.VideoLinks,
        AdminAccount: req.body.AdminAccount,
      });
      //save new module
      newModule
        .save()
        .then((createdModule) => {
          res.json({
            success: true,
            createdModule: createdModule,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

module.exports = router;
