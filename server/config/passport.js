const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
// const User = mongoose.model("users"); 
const User = require("../models/userModel"); 
const keys = require("../config/keys");

const opts={};
opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey=keys.secretOrKey;

module.exports = passport => {
    passport.use(
      new JwtStrategy(opts, (jwt_payload, done) => {
          //des if inside then token has been verified
        User.findById(jwt_payload.id)
          .then(user => {
            if (user) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch(err => console.log(err));
      })
    );
  };