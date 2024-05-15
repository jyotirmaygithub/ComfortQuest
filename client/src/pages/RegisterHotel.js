import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Grid, Typography } from "@mui/material";
import MyStyledTextField from "../components/myStyledTextField";
import ImageUploader from "../components/Gallery/imageUploader";
// import MapWithSearchBox from "../components/Maps";
import { StateContext } from "../context/States";
import { HotelContext } from "../context/HotelsContext";

export default function PlacesFormPage() {
  const { selectedImages } = StateContext();
  const { handleRegisterNewhotel } = HotelContext();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    description: "",
    extraInfo: "",
    maxGuests: 1,
    price: 1,
  });
  const { title, address, description, extraInfo, maxGuests, price } = formData;

  const onchange = (e) => {
    const { name, value, type } = e.target;
    console.log("type =", type);
    const newValue = type === "checkbox" ? e.target.checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  async function handleRegister() {
    console.log("form data = ", formData);
    if (title.trim() === "") {
      toast.error("Title can't be empty!");
      return false;
    } else if (address.trim() === "") {
      toast.error("Address can't be empty!");
      return false;
    } else if (selectedImages.length < 3) {
      toast.error("Upload at least 3 photos!");
      return false;
    } else if (description.trim() === "") {
      toast.error("Description can't be empty!");
      return false;
    } else if (maxGuests < 1) {
      toast.error("At least one guest is required!");
      return false;
    } else if (maxGuests > 10) {
      toast.error("Max. guests can't be greater than 10");
      return false;
    }
    const response = await handleRegisterNewhotel(
      title,
      address,
      description,
      extraInfo,
      maxGuests,
      price
    );
    console.log(response);
  }

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" gutterBottom>
        Register Your Hotel
      </Typography>

      {/* <MapWithSearchBox/> */}
      <div className="space-y-4 m-10">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MyStyledTextField
              label="Hotel Name"
              variant="outlined"
              name="title"
              value={title}
              onChange={onchange}
              placeholder="Enter hotel name"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <MyStyledTextField
              label="Address"
              variant="outlined"
              name="address"
              value={address}
              onChange={onchange}
              placeholder="Enter address"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <ImageUploader />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MyStyledTextField
              label="Description"
              variant="outlined"
              name="description"
              value={description}
              onChange={onchange}
              placeholder="Enter description"
              multiline
              rows={4}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <MyStyledTextField
              label="Extra Information"
              variant="outlined"
              name="extraInfo"
              value={extraInfo}
              onChange={onchange}
              placeholder="Enter extra information"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MyStyledTextField
              label="Max Guests"
              variant="outlined"
              type="number"
              name="maxGuests"
              value={maxGuests}
              onChange={onchange}
              placeholder="Enter max guests"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <MyStyledTextField
              label="Price per Night"
              variant="outlined"
              type="number"
              name="price"
              value={price}
              onChange={onchange}
              placeholder="Enter price"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        <Button
          onClick={handleRegister}
          type="submit"
          variant="contained"
          color="primary"
          className="w-full"
        >
          Register
        </Button>
      </div>
    </div>
  );
}
