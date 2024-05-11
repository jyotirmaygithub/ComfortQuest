import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Grid, Typography } from "@mui/material";
import MyStyledTextField from "../components/myStyledTextField";
import ImageUploader from "../components/Gallery/imageUploader";

const PlacesFormPage = () => {
  const { id } = useParams();
  const [addedPhotos, setAddedPhotos] = useState([]);
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
    const newValue = type === "checkbox" ? e.target.checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const isValidPlaceData = () => {
    if (title.trim() === "") {
      toast.error("Title can't be empty!");
      return false;
    } else if (address.trim() === "") {
      toast.error("Address can't be empty!");
      return false;
    } else if (addedPhotos.length < 5) {
      toast.error("Upload at least 5 photos!");
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
    return true;
  };

  const savePlace = async (e) => {
    e.preventDefault();
    const formDataIsValid = isValidPlaceData();
    if (formDataIsValid) {
      if (id) {
        // Update existing place
      } else {
        // Add new place
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" gutterBottom>
        Register Your Hotel
      </Typography>
      <form onSubmit={savePlace} className="space-y-4 m-10">
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
          type="submit"
          variant="contained"
          color="primary"
          className="w-full"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default PlacesFormPage;
