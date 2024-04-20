import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Perks from '../components/Perks/perksAcco';
import PhotosUploader from '../components/Gallery/ImageGallery';
import { Button, Grid } from '@mui/material';
import MyStyledTextField from '../components/myStyledTextField';

const PlacesFormPage = () => {
  const { id } = useParams();
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    description: '',
    perks: [],
    extraInfo: '',
    maxGuests: 1,
    price: 1,
  });

  const {
    title,
    address,
    description,
    perks,
    extraInfo,
    maxGuests,
    price,
  } = formData;

  const handleFormData = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? e.target.checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const isValidPlaceData = () => {
    if (title.trim() === '') {
      toast.error("Title can't be empty!");
      return false;
    } else if (address.trim() === '') {
      toast.error("Address can't be empty!");
      return false;
    } else if (addedPhotos.length < 5) {
      toast.error('Upload at least 5 photos!');
      return false;
    } else if (description.trim() === '') {
      toast.error("Description can't be empty!");
      return false;
    } else if (maxGuests < 1) {
      toast.error('At least one guest is required!');
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
      <form onSubmit={savePlace} className="space-y-4">
        <MyStyledTextField
          label="Title"
          variant="outlined"
          name="title"
          value={title}
          onChange={handleFormData}
          placeholder="Enter title"
          fullWidth
          required
        />
        <MyStyledTextField
          label="Address"
          variant="outlined"
          name="address"
          value={address}
          onChange={handleFormData}
          placeholder="Enter address"
          fullWidth
          required
        />
        <div className="flex flex-col">
          <label htmlFor="photos">Photos:</label>
          <PhotosUploader addedPhotos={addedPhotos} setAddedPhotos={setAddedPhotos} />
        </div>
        <MyStyledTextField
          label="Description"
          variant="outlined"
          name="description"
          value={description}
          onChange={handleFormData}
          placeholder="Enter description"
          multiline
          rows={4}
          fullWidth
          required
        />
        <div className="flex flex-col">
          <label>Perks:</label>
          <Perks selected={perks} handleFormData={handleFormData} />
        </div>
        <MyStyledTextField
          label="Extra Info"
          variant="outlined"
          name="extraInfo"
          value={extraInfo}
          onChange={handleFormData}
          placeholder="Enter extra information"
          multiline
          rows={4}
          fullWidth
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MyStyledTextField
              label="Max Guests"
              variant="outlined"
              type="number"
              name="maxGuests"
              value={maxGuests}
              onChange={handleFormData}
              placeholder="Enter max guests"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <MyStyledTextField
              label="Price"
              variant="outlined"
              type="number"
              name="price"
              value={price}
              onChange={handleFormData}
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
          Save
        </Button>
      </form>
    </div>
  );
};

export default PlacesFormPage;
