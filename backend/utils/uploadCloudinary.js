const cloudinary = require("cloudinary").v2;
const fs = require('fs');
require("dotenv").config();

// Cloudinary configurations.
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET 
});

// Function to upload a picture to Cloudinary.
async function uploadImage(filePath) {
  console.log("actual filepath = ",  filePath);
  if (fs.existsSync(filePath)) {
    console.log('File exists:', filePath);
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(filePath, { folder: "user/Profile/Picture" }, (error, result) => {
        if (error) {
          console.error("Error uploading image:", error);
          reject(error);
        } else {
          console.log("Image uploaded successfully:", result.secure_url);
          resolve(result.secure_url); // Return the secure URL of the uploaded image.
        }
      });
    });
  } else {
    console.error('File does not exist:', filePath);
    return Promise.reject(new Error('File does not exist')); // Reject the Promise if the file doesn't exist.
  }
}

module.exports = uploadImage;
