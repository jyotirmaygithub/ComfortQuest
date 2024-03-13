const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECREAT 
  });
  

async function uploadPicture(path) {
  try {
    const result = await cloudinary.uploader.upload(path, {
      folder: 'Airbnb/Users',
    });

    // Optionally log the Cloudinary upload result for debugging
    console.log('Cloudinary Upload Result:', result);

    // Respond with a success message and the secure URL
    res.status(200).json({
      message: 'Image uploaded successfully',
      imageUrl: result.secure_url,
    });
  } catch (error) {
    // Log the error for debugging
    console.error('Error uploading image to Cloudinary:', error);

    // Respond with an error message
    res.status(500).json({
      error: error.message, // Provide the error message in the response
      message: 'Internal server error',
    });
  }
}

module.exports = uploadPicture;
