//package import
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();//reads the .env file and imports the values


//importing utilities
const checkAdmin=require('./utills/checkAdmin');

//importing routes
const userAuth = require("./routes/userAuth");
const userProfile = require('./routes/userProfile');
const adminAuth = require('./routes/adminAuth');
const adminJobProfile=require('./routes/adminJobProfile');
const adminUpdates=require('./routes/adminUpdates');
const studentUpdates=require('./routes/studentUpdates');
const studentJobProfiles=require('./routes/studentJobProfiles');


const app = express();

app.use(express.urlencoded({ extended: true|false }));
app.use(express.json());
app.use(cors()); // this is so that react server can communicate with this server



// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));



//Passport middleware
app.use(passport.initialize());



// Passport config
require("./config/passport")(passport);



//Defining Routes
app.use("/api", userAuth);
app.use("/api", userProfile);
app.use("/api", adminAuth);
app.use("/api", adminJobProfile);
app.use("/api", adminUpdates);
app.use("/api", studentJobProfiles);
app.use("/api", studentUpdates);


app.get(
  "/api/data",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      message: "have some data",
    });
  }
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
