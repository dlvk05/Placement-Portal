//package import
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

//importing routes
const userAuth = require("./routes/userAuth");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("here1");

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

console.log("here2");

//Passport middleware
app.use(passport.initialize());

console.log("here3");

// Passport config
require("./config/passport")(passport);

console.log("here4");

//Defining Routes
app.use("/api", userAuth);
console.log("here5");

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
