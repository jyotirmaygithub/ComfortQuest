const cloudinary = require("cloudinary").v2
const fs = require('fs');
require("dotenv").config();

// cloudinary configurations.        
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECREAT 
});

//function to upload a picture to the cloudinary
async function  uploadImage(filePath) {
  console.log("actual filepath = ",  filePath)
  if (fs.existsSync(filePath)) {
    console.log('File exists.');
  } else {
    console.error('File does not exist:', filePath);
  }
  return new Promise((resolve,reject)=>{
    cloudinary.uploader.upload(filePath,{folder : "user/Profile/Picture"}, (error,result)=>{
      if(error){
        console.log("may i am getting error");
        reject(error)
      }
      else{
        resolve(result.secure_url) // return the secure URL of the uploaded one.
        console.log(result.secure_url)
        return result.secure_url
      }
    })
  })
}


module.exports = uploadImage