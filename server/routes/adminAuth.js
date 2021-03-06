const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load Admin model
const Admin=require("../models/adminModel");


//get specific account
router.get("/admin/getSpecificUser/:id",(req,res)=>{
  Admin.findById(req.params.id)
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


// @route POST api/signupAdmin
// @desc Register admin
// @access Public
router.post("/signupAdmin", (req, res) => {
  console.log('signupAdmin called');
    Admin.findOne({ email: req.body.email }).then((admin) => {
    if (admin) {
      //des email already exists
      return res.status(400).json({ emailError: "Email already exists" });
    } else {
      //des creating new user object
      const newAdmin = new Admin({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        employeeId: req.body.employeeId,
        mobileNo: req.body.mobileNo,
        department: req.body.department, 
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;
          newAdmin.password = hash;
          newAdmin
            .save()
            .then((admin) => {
              // sending the newUser document
              res.json({
                success: true,
                admin: admin,
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});


// @route POST api//loginAdmin
// @desc Login admin and return JWT token
// @access Public
router.post("/loginAdmin", (req, res) => {
  console.log('loginAdmin called');
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);

  // Find user by email
  Admin.findOne({ email}).then((admin) => {
    // Check if user exists
    if (!admin) {
      return res.status(404).json({ emailError: "Email not found" });
    }

    //Check password
    bcrypt.compare(password, admin.password).then(async (isMatch) => {
      if (isMatch) {
        //User Matched

        //Create JWT Payload
        const payload = {
          id: admin.id,
          firstName: admin.firstName,
          lastName: admin.lastName,
          email: admin.email,
          isAdmin: admin.isAdmin,
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
router.put("/changePasswordAdmin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let newPassword = req.body.newPassword;

  // Find user by email
  Admin.findOne({ email }).then((user) => {
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


//change password
router.put("/admin/changePassword", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let newPassword = req.body.newPassword;
  console.log(email)
  console.log(password)
  console.log(newPassword)

  // Find user by email
  Admin.findOne({ email:email }).then((user) => {
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
