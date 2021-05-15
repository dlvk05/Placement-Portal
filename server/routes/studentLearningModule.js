const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const mongoose = require("mongoose");
const csvConverter = require("json-2-csv");
const fs = require("fs-extra");

//Load model
const LearningModule = require("../models/learningModules");

//get all modules
router.get("/student/learningModules/getAllModules", (req, res) => {
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
router.get("/student/learningModules/getSpecificModule/:id", (req, res) => {
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

module.exports = router;



