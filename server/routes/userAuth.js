const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load User model
const User = require("../models/userModel");

//Load Profile model
const UserProfile = require("../models/profileModel");
const StudentStats = require("../models/studentStatsModel");



//get specific account
router.get("/getSpecificUser/:id",(req,res)=>{
  User.findById(req.params.id)
  .then(foundUser=>{
    if(!foundUser){
      res.status(404).json({
        success:false,
        error:"account not found"
      })
    }else{
      res.json({
        success:true,
        user:foundUser,
      })
    }
  })
})

// @route POST api/signupUser
// @desc Register user
// @access Public
router.post("/signupUser", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      //des email already exists
      return res.status(400).json({ emailError: "Email already exists" });
    } else {
      //des creating new user object
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        regNo: req.body.regNo,
        mobileNo: req.body.mobileNo,
        programme: req.body.programme,
        department: req.body.department,
        semester: req.body.semester,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              //creating empty profile linked to the account for the new user
              const newProfile = new UserProfile({
                userAccount: user._id,
              });
              //saving the new profile
              newProfile
                .save()
                .then((profile) => {
                  console.log("new profile created");
                  //create new student stats object
                  const newStudentStats = new StudentStats({
                    UserProfile: profile._id,
                    UserAccount: user._id,
                  });
                  newStudentStats
                    .save()
                    .then((studentStats) =>
                      console.log("new student stats created")
                    )
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));

              // sending the newUser document
              res.json({
                success: true,
                user: user,
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST api//loginUser
// @desc Login user and return JWT token
// @access Public
router.post("/loginUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailError: "Email not found" });
    }

    //Check password
    bcrypt.compare(password, user.password).then(async (isMatch) => {
      if (isMatch) {
        //User Matched

        //Find associated profile id
        let profileId = null;
        await UserProfile.findOne({ userAccount: user.id }).then((profile) => {
          profileId = profile.id;
        });

        //Create JWT Payload
        const payload = {
          id: user.id,
          profileId: profileId,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isAdmin: user.isAdmin,
          expiresIn: 36000,
        };

        //Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 36000, // 1 hr in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              // token: "Bearer" + token,
              token: token,
            });
          }
        );
      } else {
        return res.status(400).json({ passwordError: "Password incorrect" });
      }
    });
  });
});

//change password
router.put("/changePassword", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let newPassword = req.body.newPassword;
  console.log(email)
  console.log(password)
  console.log(newPassword)

  // Find user by email
  User.findOne({ email:email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailError: "Email not found" });
    }

    //Check password
    bcrypt.compare(password, user.password).then(async (isMatch) => {
      if (isMatch) {
        //User Matched

        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) throw err;
            newPassword = hash;
            user.password = newPassword;
            user
              .save()
              .then((user) => {
                console.log("password changed");
                res.json({
                  success: true,
                  updatedAccount: user,
                });
              })
              .catch((err) => console.log(err));
          });
        });
      } else {
        return res.status(400).json({ passwordError: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
