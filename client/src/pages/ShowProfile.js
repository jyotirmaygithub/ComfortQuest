import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Logout } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { TokenStatusContext } from "../context/tokenStatus";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/States";
import ProfilePopUp from "../components/Profile-Pop-up/ProfilePop";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Progress from "../components/Progress";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useParams } from "react-router-dom";

export default function ActionAreaCard() {
  const { deleteAuthTokenCookie } = TokenStatusContext();
  const navigate = useNavigate();
  const { userDocument } = StateContext();
  const { name, email, picture } = userDocument;
  // const {name} = useParams()

  const [popUp, setPopUp] = useState(false);

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw] space-y-2">
      {/* <div className="p-2"> */}
      <div className="flex-col justify-center border-2 border-black border-solid p-4 rounded-md">
        <Avatar
          alt="profile picture"
          src={picture}
          sx={{ width: 250, height: 250 }}
        />
        <div className="space-y-2">
          <div className="flex justify-start items-center space-x-2">
            <AccountCircleOutlinedIcon className="h-10 w-10" />
            <Typography gutterBottom variant="h6" component="div">
              {name ? name : ""}
            </Typography>
          </div>
          <div className="flex justify-start items-center">
            <EmailOutlinedIcon />
            <Typography gutterBottom variant="h6" component="div">
              {email ? email : ""}
            </Typography>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
