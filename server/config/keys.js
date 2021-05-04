const dotenv = require('dotenv');
dotenv.config();//reads the .env file and imports the values

// module.exports={
//     mongoURI:'mongodb+srv://placementportal:placementportal1234@cluster0.y9dfr.mongodb.net/Placement_Portal',
//     secretOrKey:'secret',
// };

module.exports={
    mongoURI:process.env.MONGOURI,
    secretOrKey:process.env.SECRETORKEY,
};
