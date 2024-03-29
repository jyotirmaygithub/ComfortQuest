import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MyStyledTextField from "../myStyledTextField";
import Avatar from "@mui/material/Avatar";
import { StateContext } from "../../context/States";

export default function FormDialog({ open, openState }) {
  const { userDocument } = StateContext();
  const { name, picture } = userDocument;
  const [selectedFile, setSelectedFile] = useState(null);

  // To render the image url into the state, when data of the user get fetch.
  useEffect(()=>{
    if(picture){
      setSelectedFile(picture)
    }
  },[userDocument])


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file)
    setSelectedFile(imageURL);
  };

  function handleClose() {
    openState(false);
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Edit Your Profile</DialogTitle>
      <DialogContent className="space-y-4">
        <DialogContentText>
          Edit and elevate your existing notes effortlessly in the NoteVault app
        </DialogContentText>
        <Avatar
        type="file"
        accept="image/*"
        onClick={handleFileChange}
          alt="profile picture"
          src={selectedFile === picture ? picture : selectedFile }
          sx={{ width: 250, height: 250 }}
        />
        {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}
        <MyStyledTextField
          margin="normal"
          value={name}
          required
          fullWidth
          id="username"
          name="username"
          autoComplete="name"
          onChange={onchange}
          autoFocus
        />
      </DialogContent>
      <DialogActions className="mb-3">
        <Button onClick={handleClose} className="text-white bg-black">
          Cancel
        </Button>
        <Button onClick={handleClose} className="text-white bg-black">
          Edit Note
        </Button>
      </DialogActions>
    </Dialog>
  );
}
