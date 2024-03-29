import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MyStyledTextField from "../components/myStyledTextField";
import { Logout } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { TokenStatusContext } from "../context/tokenStatus";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FrontAuthFunction } from "../context/front-auth";
import { StateContext } from "../context/States";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ProfilePopUp from "../components/Profile-Pop-up/ProfilePop";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import DialogContentText from "@mui/material/DialogContentText";

export default function ActionAreaCard() {
  const { deleteAuthTokenCookie } = TokenStatusContext();
  const navigate = useNavigate();
  const { handleEditProfile } = FrontAuthFunction();
  const { userDocument } = StateContext();
  const { name, email, picture } = userDocument;
  // To enable changing username at run time.
  const [combinedState, setCombinedState] = useState({
    username: name,
  });
  const [popUp, setPopUp] = useState(false);
  let newUserPicture =
    "C:/Users/jyotirmay gupta/Pictures/hostel fuck up/IMG_20230225_234354.jpg";

  useEffect(() => {
    setCombinedState({ username: name });
  }, [userDocument]);

  function onchange(e) {
    setCombinedState({ ...combinedState, [e.target.name]: e.target.value });
  }

  function handleLogout() {
    deleteAuthTokenCookie();
    navigate("/");
  }
  async function handleSubmit() {
    setPopUp(true);
    // returnResponse( await handleEditProfile(combinedState.username ,newUserPicture))
  }
  function returnResponse(response) {
    console.log("what is response = ", response);
    if (response.success) {
      toast.success(response.message);
      navigate("/");
    } else {
      toast.error(response.message);
    }
  }

  return (
    <div className="flex justify-center items-center">
      <Card className="p-2">
        <CardActionArea className="flex-col justify-center">
          <Avatar
            alt="profile picture"
            src={picture}
            sx={{ width: 250, height: 250 }}
          />
          <CardContent>
            <Typography
              startIcon={<EmailOutlinedIcon />}
              gutterBottom
              variant="h6"
              component="div"
            >
              {email ? email : ""}
            </Typography>
            <Typography
              startIcon={<EmailOutlinedIcon />}
              gutterBottom
              variant="h6"
              component="div"
            >
              {name ? name : ""}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="flex justify-between gap-8">
          <Button
            onClick={handleSubmit}
            variant="outlined"
            startIcon={<EditIcon />}
          >
            Edit Profile
          </Button>
          <ProfilePopUp open={popUp} openState={setPopUp} />
          <Button
            onClick={handleLogout}
            variant="contained"
            startIcon={<Logout />}
          >
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
}
