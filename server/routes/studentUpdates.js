const express = require("express");
const router = express.Router();
const keys = require("../config/keys");
const multer = require("multer");
const fs = require("fs-extra");
const mongoose = require("mongoose");

//Load  Mongoose Models
const Update = require("../models/updatesModel");

//multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = null;
    // console.log(req.body);
    path = ["../uploads", "Updates", req.body.updateID].join("/");

    console.log(path);
    fs.mkdirsSync(path);
    cb(null, path);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadStorage = multer({ storage: storage });


//route for uploading files
router.post(
  "/updates/uploadFile",
  uploadStorage.single("file"),
  async (req, res) => {
    console.log("/updates/uploadFile called");
    res.json({
      success: true,
    });
  }
);

//route to download the  file attached to a update from server
router.get("/student/updates/downloadFile", (req, res) => {
  console.log("/update/downloadFile called");
  // console.log(req.query);
  let path = null;
  let folderName = "Updates";
  let updateID = req.query.updateID;
  let fileName = req.query.fileName;

  path = ["../uploads", folderName, updateID, fileName].join("/");

  console.log("path is");
  console.log(path);
  res.download(path, (err) => {
    console.log("error occurred in res.download");
    console.log(err);
  });
});



//get all updates
router.get("/student/updates/getAllUpdates", (req, res) => {
  Updates.find({}).populate("AdminAccount").then((foundUpdates) => {
    if (!foundUpdates) {
      res.status(400).json({
        success: false,
        error: "encountered an error",
      });
    }
    res.json({
      success: true,
      updates: foundUpdates,
    });
  });
});







module.exports = router;
