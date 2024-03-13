const connectToMongo = require("./config/db");
const express = require("express");
const cors = require("cors");
// const cloudinary = require("cloudinary").v2
const cookieSession  = require('cookie-session');
const cookieParser = require("cookie-parser")

// connect with database
connectToMongo();

// // cloudinary configurations.        
// cloudinary.config({ 
//   cloud_name: process.env.CLOUD_NAME, 
//   api_key: process.env.CLOUD_API_KEY, 
//   api_secret: process.env.CLOUD_API_SECREAT 
// });

const app = express();

// port number.
const port = 5000;

app.use(cors());
// we are using middleware to convert raw json data into js object. 
app.use(express.json());

// available routes in the project
app.use("/api/auth", require("./routes/auth"));
app.use("/api/editProfile" , require("./routes/editProfile"))

app.listen(port, () => {
  console.log(`hotel-backend is working on port number :  ${port}`);
});
