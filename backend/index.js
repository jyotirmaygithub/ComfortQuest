const connectToMongo = require("./config/db");
const express = require("express");
var cors = require("cors");
import {v2 as cloudinary} from 'cloudinary';

// connect with database
connectToMongo();

// cloudinary configurations.        
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECREAT 
});

const app = express();

// port number.
const port = 5000;

app.use(cors());
app.use(express.json()); // we are using middleware to convert raw json data into js object. 

// available routes in the project
app.use("/api/auth", require("./routes/auth"));
app.use("/api/forgetpass", require("./routes/forgetpass"));

app.listen(port, () => {
  console.log(`hotel-backend is working on port number :  ${port}`);
});
