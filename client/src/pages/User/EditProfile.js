import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { CardActionArea } from "@mui/material";
import { Logout, Person2Outlined } from "@mui/icons-material";
import ProfilePopUp from "../../components/PopUps/EditProfilePop"; // Assuming this is a custom component for profile editing
import CircleProgress from "../../components/progress/circle";
import { useNavigate } from "react-router-dom";
import { TokenStatusContext } from "../../context/tokenStatus";
import { StateContext } from "../../context/States";
import { FrontAuthContext } from "../../context/front-auth";

export default function ActionAreaCard() {
  const navigate = useNavigate();
  const { deleteAuthTokenCookie } = TokenStatusContext();
  const { userDocument, editLoader } = StateContext();
  const { handleExistingUserData } = FrontAuthContext();
  const { name, email, picture } = userDocument;

  const [popUp, setPopUp] = useState(false);

  function handleLogout() {
    deleteAuthTokenCookie();
    handleExistingUserData();
    navigate("/login");
  }

  function handleSubmit() {
    setPopUp(true);
  }

  return (
    <div className=" flex justify-center items-center mt-32 my-10">
      <Card className="p-2">
        <CardActionArea className="flex-col justify-center">
          <Avatar
            alt="profile picture"
            src={editLoader ? undefined : picture}
            sx={{ width: 250, height: 250, margin: "auto" }}
          >
            {editLoader && <CircleProgress />}
          </Avatar>

          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <EmailOutlinedIcon sx={{ marginRight: 1, color: "#60A5FA" }} />
              {email ? email : ""}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Person2Outlined sx={{ marginRight: 1, color: "#60A5FA" }} />
              {name ? name : ""}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="flex justify-between gap-8 p-4">
          <Button
            onClick={handleSubmit}
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{
              background: "white",
              color: "#3B82F6", // Blue color
              borderColor: "#3B82F6", // Matching border color
              "&:hover": {
                background: "#3B82F6", // Darker blue on hover
                color: "white", // Text color on hover
                borderColor: "#3B82F6", // Matching border color on hover
              },
            }}
          >
            Edit Profile
          </Button>

          <ProfilePopUp open={popUp} openState={setPopUp} />
          <Button
            onClick={handleLogout}
            variant="contained"
            startIcon={<Logout />}
            sx={{
              background: "white",
              color: "#60A5FA",
              "&:hover": {
                background: "white",
                color: "#3B82F6",
              },
            }}
          >
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
}
