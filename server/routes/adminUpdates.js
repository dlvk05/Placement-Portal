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

//route to get a random Mongoose id
router.get("/updates/getRandomId", (req, res) => {
  let newId2 = new mongoose.mongo.ObjectId();

  res.json({
    id: newId2,
  });
});

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
router.get("/updates/downloadFile", (req, res) => {
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

//add new update
router.post("/updates/addNewUpdate", (req, res) => {
  console.log("addNewUpdate called");
  Update.findOne({
    UpdateTitle: req.body.UpdateTitle,
  }).then((foundUpdate) => {
    if (foundUpdate) {
      //des that is update with same Title  exists
      return res.status(400).json({
        Error: "Update with the same title  already exists",
      });
    } else {
      //create new Update Object
      const newUpdate = new Update({
        _id: new mongoose.mongo.ObjectId(req.body.updateID),
        UpdateTitle: req.body.UpdateTitle,
        AdminAccount: req.body.AdminAccount,
        UpdateBody: req.body.UpdateBody,
        FileAttached: req.body.FileAttached,
        FileName: req.body.FileName,
      });

      console.log(newUpdate);

      //save the new jobProfile
      newUpdate
        .save()
        .then((newUpdate) => {
          //send the new update on success
          res.json({
            success: true,
            update: newUpdate,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

//get all updates
router.get("/updates/getAllUpdates", (req, res) => {
  Updates.find({}).then((foundUpdates) => {
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

//get specific update
router.get("/updates/getSpecificUpdate/:id", (req, res) => {
  Update.findById(req.params.id).then((foundUpdate) => {
    if (!foundUpdate) {
      res.status(404).json({
        success: false,
        error: "encountered an error",
      });
    }
    res.json({
      success: true,
      update: foundUpdate,
    });
  });
});

//updateData of a update
router.put("/updates/updateData", (req, res) => {
  let updatedData = req.body.formData;
  let options = {
    new: true,
  };
  console.log("updated Data is");
  console.log(updatedData);
  Update.findByIdAndUpdate(req.body.updateID, updatedData, options).then(
    (updatedUpdate) => {
      if (!updatedUpdate) {
        res.status(404).json({
          success: false,
          error: "encountered an error",
        });
      }
      res.json({
        success: true,
        update: updatedUpdate,
      });
    }
  );
});

//delete a specific update
router.delete("/updates/deleteSpecificUpdate", (req, res) => {
  Update.findByIdAndDelete(req.body.updateID).then((deletedUpdate) => {
    if (!deletedUpdate) {
      res.status(404).json({
        success: false,
        error: "update not found",
      });
    }
    res.json({
      success: true,
      deletedUpdate: deletedUpdate,
    });
  });
});

module.exports = router;
