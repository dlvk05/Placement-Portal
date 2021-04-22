const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load User model
const User = require("../models/userModel");


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
            .then((user) => res.json({
              success:true,
              user:user,
            }))
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
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //User Matched
        //Create JWT Payload
        const payload = {
          id: user.id,
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
        return res
          .status(400)
          .json({ passwordError: "Password incorrect" });
      }
    });
  });
});

module.exports = router;