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
import { FrontAuthFunction } from "../../context/front-auth";
import { toast } from "react-toastify";

export default function FormDialog({ open, openState }) {
  const { userDocument } = StateContext();
  const { name, picture } = userDocument;
  const [selectedFile, setSelectedFile] = useState(null);
  const { handleEditProfile } = FrontAuthFunction();
  const [userName, setUserName] = useState(null);
  const [userImage , setuserImage] = useState(null)
  // To render the image url into the state, when data of the user get fetch.
  useEffect(() => {
    if (picture) {
      setSelectedFile(picture);
    }
    if (name) {
      setUserName(name);
    }
  }, [userDocument]);

  function onchange(e) {
    setUserName(e.target.value);
  }

  async function handleFileChange(event) {
    const file = event.target.files;
    console.log("length of the file =",file.length);
    console.log("info about file =", file);
    // const imageURL = URL.createObjectURL(file);
    const base64 = await convertBase64(file[0]);
    console.log("info belongs to the base64 = ", base64);
    setuserImage(base64);
    // setSelectedFile(imageURL);
  }

  function convertBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  function handleClose() {
    openState(false);
  }
  async function handleEditProfileBtn() {
    openState(false);
    console.log("value of name and selected file = " , name + "and " + userImage)
   let waiting =  await handleEditProfile(userName ,userImage);
   console.log("wating response = " , waiting)
  }
  function returnResponse(response) {
    console.log("what is response = ", response);
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Edit Your Profile</DialogTitle>
      <DialogContent className="space-y-4">
        <DialogContentText>
          Edit and elevate your existing notes effortlessly in the NoteVault app
        </DialogContentText>
        <Avatar
          // type="file"
          // accept="image/*"
          // onClick={handleFileChange}
          alt="profile picture"
          src={selectedFile === picture ? picture : selectedFile}
          sx={{ width: 250, height: 250 }}
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <MyStyledTextField
          margin="normal"
          value={userName}
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
        <Button onClick={handleEditProfileBtn} className="text-white bg-black">
          Edit Profile
        </Button>
      </DialogActions>
    </Dialog>
  );
}
