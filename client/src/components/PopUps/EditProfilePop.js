import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MyStyledTextField from "../myStyledTextField";
import Avatar from "@mui/material/Avatar";
import { StateContext } from "../../context/States";
import { EditProfileContext } from "../../context/EditProfile";
import { FrontAuthContext } from "../../context/front-auth";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";

const AvatarContainer = styled("div")({
  position: "relative",
  width: 250,
  height: 250,
  cursor: "pointer",
  "&:hover .overlay": {
    opacity: 1,
  },
});

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
  color: "white",
});

export default function FormDialog({ open, openState }) {
  const { userDocument, setEditLoader } = StateContext();
  const { handleExistingUserData } = FrontAuthContext();
  const { saveImage, handleEditProfile } = EditProfileContext();
  const [userName, setUserName] = useState(null);
  const [userImage, setuserImage] = useState(null);
  const { name, picture } = userDocument;

  function onchange(e) {
    setUserName(e.target.value);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size exceeds 10MB limit");
        return;
      }
      setuserImage(file);
    } else {
      setuserImage(null);
    }
  };

  function handleClose() {
    openState(false);
  }

  async function handleEditProfileBtn() {
    if (userImage) {
      setEditLoader(true);
    }

    openState(false);

    const imageURL = userImage ? await saveImage(userImage) : null;
    returnResponse(await handleEditProfile(userName, imageURL));
    handleExistingUserData();

    // Reset the loader state if it was set
    if (userImage) {
      setuserImage(null)
      setEditLoader(false);
    }
  }

  function returnResponse(response) {
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title" sx={{color: "#60A5FA"}}>Edit Your Profile</DialogTitle>
      <DialogContent className="flex-col space-y-7">
          <DialogContentText>
          Revise your profile picture and name.
          </DialogContentText>
        <AvatarContainer>
          <label htmlFor="avatarInput">
            <Avatar
              alt="profile picture"
              src={userImage ? URL.createObjectURL(userImage) : picture}
              sx={{ width: 250, height: 250 }}
            />
            <Overlay className="overlay">
              <EditIcon sx={{ fontSize: 50 }} />
            </Overlay>
          </label>
          <input
            id="avatarInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </AvatarContainer>
        {/* <DialogContentText>Update User Name.</DialogContentText> */}
        <MyStyledTextField
          margin="normal"
          value={userName ? userName : name}
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
        <Button
          sx={{ color: "#60A5FA" }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          sx={{ color: "#60A5FA" }}
          onClick={handleEditProfileBtn}
        >
          Edit Profile
        </Button>
      </DialogActions>
    </Dialog>
  );
}
