//package import
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");

//importing routes
const userAuth = require("./routes/userAuth");
const userProfile = require('./routes/userProfile');

const app = express();

app.use(express.urlencoded({ extended: true }));
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
