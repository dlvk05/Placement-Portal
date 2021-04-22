const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const profileSchema = new Schema({
  Summary:String,
  About:{
      Name:String,
      DateOfBirth:Date,
      Gender:String,
      Category:String,
  },
  ContactDetails:{
      ContactNo:{
          type:Number,
          verified:{
              type:Boolean,
              default:false,
          }
      },
      Email:{
        type:String,
        verified:{
            type:Boolean,
            default:false,
        }
      },
      PersonalEmail:{
        type:String,
        verified:{
            type:Boolean,
            default:false,
        }
      },

  }
});

Profile = mongoose.model("userProfiles", profileSchema);

module.exports = Profile;
