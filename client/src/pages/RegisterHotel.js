import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import MyStyledTextField from "../components/myStyledTextField";
import ImageUploader from "../components/Gallery/imagePreview";
import FullscreenLoader from "../components/progress/fullscreen";
import InstructionBox from "../components/instruction";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/States";
import { HotelContext } from "../context/HotelsContext";
import { EditProfileContext } from "../context/EditProfile";
import { toast } from "react-toastify";

export default function PlacesFormPage() {
  const { selectedImages } = StateContext();
  const { handleRegisterNewhotel } = HotelContext();
  const { saveImage } = EditProfileContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    chainName: "",
    hotelName: "",
    hotelAddress: "",
    zipCode: "",
    cityName: "",
    stateName: "",
    countryName: "",
    hotelDescription: "",
    hotelEmail: "",
    hotelPhone: "",
    price: 10,
    totalRooms: 50,
    hotelUrl: "",
    photo1: "",
    photo2: "",
    photo3: "",
    photo4: "",
    photo5: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loader, setloader] = useState(false);

  const {
    chainName,
    hotelName,
    hotelAddress,
    zipCode,
    cityName,
    stateName,
    countryName,
    hotelUrl,
    totalRooms,
    hotelDescription,
    hotelPhone,
    hotelEmail,
    price,
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
  } = formData;

  function onchange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleRegister() {
    // Check for required fields
    if (hotelName.trim() === "") {
      toast.error("Hotel Name can't be empty!");
      return false;
    }
    if (hotelAddress.trim() === "") {
      toast.error("Hotel Address can't be empty!");
      return false;
    }
    // Check if zipCode is empty or not a number
    if (zipCode.trim() === "" || isNaN(zipCode.trim())) {
      toast.error("Zip Code must be a non-empty number!");
      return false;
    }
    if (cityName.trim() === "") {
      toast.error("City Name can't be empty!");
      return false;
    }
    if (stateName.trim() === "") {
      toast.error("State Name can't be empty!");
      return false;
    }
    if (countryName.trim() === "") {
      toast.error("Country Name can't be empty!");
      return false;
    }
    if (selectedImages.length < 1) {
      toast.error("Upload at least 1 photos!");
      return false;
    }
    if (selectedImages.length > 5) {
      toast.error("Upload images less than 5!");
      return false;
    }
    if (hotelDescription.trim() === "") {
      toast.error("Description can't be empty!");
      return false;
    }
    // Check if hotelEmail is empty
    if (hotelEmail.trim() === "") {
      toast.error("Hotel Email can't be empty!");
      return false;
    }
    // Validate email format
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(hotelEmail.trim())) {
      toast.error("Please enter a valid email address!");
      return false;
    }
    const maxPhoneNumberLength = 12;
    if (hotelPhone.trim() === "") {
      toast.error("Hotel Phone can't be empty!");
      return false;
    } else if (hotelPhone.trim().length > maxPhoneNumberLength) {
      toast.error("Hotel Phone number exceeds the maximum allowed length!");
      return false;
    }
    if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      toast.error("Price must be a valid number greater than 0!");
      return false;
    }
    if (parseInt(totalRooms) < 50) {
      toast.error("Total Rooms must be greater than 50!");
      return false;
    }
    if (!termsAccepted) {
      // Check if terms are accepted
      toast.error("Please accept the terms and conditions.");
      return false;
    }

    try {
      setloader(true)
      for (let i = 0; i < selectedImages.length; i++) {
        const image = selectedImages[i];
        let imageURL = await saveImage(image);
        formData[`photo${i + 1}`] = imageURL;
      }
      let response = await handleRegisterNewhotel(formData);
      if(response){
        setloader(false)
        navigate('/registration-success')
      } 
    } catch (error) {
      // Handle registration error
      console.error("Error registering hotel:", error);
      toast.error(
        "An error occurred while registering the hotel. Please try again later."
      );
    }
  }

  return (
    <>
     {loader &&  <FullscreenLoader />}
      <div className="container p-4 mt-32">
        <Typography variant="h4" gutterBottom>
          Register Your Hotel
        </Typography>
        <InstructionBox/>
        <div className="space-y-4 m-10">
          {/* Group 1: Hotel Names */}
          <Typography variant="h5" gutterBottom>
            Hotel Name
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MyStyledTextField
                label="Hotel Chain Name"
                variant="outlined"
                name="chainName"
                value={chainName}
                onChange={onchange}
                placeholder="Enter Hotel Chain Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <MyStyledTextField
                label="Hotel Name"
                variant="outlined"
                name="hotelName"
                value={hotelName}
                onChange={onchange}
                placeholder="Enter Hotel Name"
                fullWidth
                required
              />
            </Grid>
          </Grid>

          {/* Group 2: Hotel Address */}
          <Typography variant="h5" gutterBottom>
            Hotel Address
          </Typography>
          <MyStyledTextField
            label="Hotel Address"
            variant="outlined"
            name="hotelAddress"
            value={hotelAddress}
            onChange={onchange}
            placeholder="Enter Hotel Address"
            fullWidth
            required
          />
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <MyStyledTextField
                label="Hotel Zipcode"
                variant="outlined"
                name="zipCode"
                value={zipCode}
                onChange={onchange}
                placeholder="Enter Hotel Zipcode"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <MyStyledTextField
                label="City Name"
                variant="outlined"
                name="cityName"
                value={cityName}
                onChange={onchange}
                placeholder="Enter City Name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={3}>
              <MyStyledTextField
                label="State Name"
                variant="outlined"
                name="stateName"
                value={stateName}
                onChange={onchange}
                placeholder="Enter State Name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={3}>
              <MyStyledTextField
                label="Country Name"
                variant="outlined"
                name="countryName"
                value={countryName}
                onChange={onchange}
                placeholder="Enter Country Name"
                fullWidth
                required
              />
            </Grid>
          </Grid>

          {/* Group 3: Description and Images */}
          <Typography variant="h5" gutterBottom>
            Description and Images
          </Typography>
          <ImageUploader />
          <MyStyledTextField
            label="Description"
            variant="outlined"
            name="hotelDescription"
            value={hotelDescription}
            onChange={onchange}
            placeholder="Enter description"
            multiline
            rows={6}
            fullWidth
            required
          />

          {/* Group 4: Contact Details */}
          <Typography variant="h5" gutterBottom>
            Contact Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <MyStyledTextField
                label="Contact Email"
                variant="outlined"
                name="hotelEmail"
                value={hotelEmail}
                onChange={onchange}
                placeholder="Enter Hotel Email-Id"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <MyStyledTextField
                label="Contact Phone"
                variant="outlined"
                name="hotelPhone"
                value={hotelPhone}
                onChange={onchange}
                placeholder="Enter Hotel Contact Number"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <MyStyledTextField
                label="Website URL"
                variant="outlined"
                name="hotelUrl"
                value={hotelUrl}
                onChange={onchange}
                placeholder="Enter Hotel URl"
                fullWidth
              />
            </Grid>
          </Grid>

          {/* Group 5: Pricing and Rooms */}
          <Typography variant="h5" gutterBottom>
            Pricing and Rooms
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <MyStyledTextField
                label="Price per Night"
                variant="outlined"
                type="number"
                name="price"
                value={price}
                onChange={onchange}
                placeholder="Enter Price"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={3}>
              <MyStyledTextField
                label="Total Number Of Rooms"
                variant="outlined"
                type="number"
                name="totalRooms"
                value={totalRooms}
                onChange={onchange}
                placeholder="Enter total number of rooms"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          {/* Terms and conditions checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                color="primary"
              />
            }
            label={
              <Typography variant="body2">
                I accept the{" "}
                <Link href="/terms-and-conditions" target="_blank">
                  Terms and Conditions
                </Link>
              </Typography>
            }
          />

          {/* Submit Button */}
          <Button
            onClick={handleRegister}
            variant="contained"
            color="primary"
            className="w-full"
            disabled={!termsAccepted}
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
}
