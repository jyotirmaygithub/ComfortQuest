import React, { useState } from "react";
import { Typography, Paper, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { StateContext } from "../../context/States";

const UploadContainer = styled("div")({
  textAlign: "center",
});

export default function ImagePreview() {
  const { selectedImages, setSelectedImages } = StateContext();

  const paperStyle = {
    padding: "32px",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.87)",
    border: "2px dashed #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#3f51b5",
    },
  };

  const iconStyle = {
    fontSize: "200px",
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    console.log("files = ", files);
    const selected = Array.from(files).map((file) => file);
    console.log("things in slected =", selected);
    setSelectedImages(selected);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Upload Images for Your Hotel</Typography>
        </Grid>
        <Grid item xs={12} component={UploadContainer}>
          <IconButton component="label">
            <Paper style={paperStyle} className="w-[80vw]">
              <CloudUploadOutlinedIcon style={iconStyle} />
              <input
                accept="image/*"
                style={{ display: "none" }}
                type="file"
                onChange={handleImageUpload}
                multiple
              />
              <Typography variant="body2" color="textSecondary">
                PNG, JPG, GIF up to 10MB
              </Typography>
            </Paper>
          </IconButton>
        </Grid>
      </Grid>

      {selectedImages.length > 0 && (
        <ImageList
          sx={{ width: "100%", height: 300 }}
          cols={selectedImages.length}
        >
          {selectedImages.map((imageUrl, index) => (
            <ImageListItem key={index}>
              <img
                src={URL.createObjectURL(imageUrl)}
                alt={`Uploaded image ${index + 1}`}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </>
  );
}
