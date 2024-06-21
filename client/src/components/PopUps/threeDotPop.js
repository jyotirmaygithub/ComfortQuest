import React, { useContext, useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { HotelOutlined, PersonOutline } from "@mui/icons-material";
import { StateContext } from "../../context/States";

export default function BasicPopover() {
  const navigate = useNavigate();
  const { userDocument } = StateContext();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRoutes = (value) => {
    if (value === "/booking") {
      navigate(`${value}/${userDocument.name}`);
    } else {
      navigate(`${value}`);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="relative">
      <MoreHorizOutlinedIcon
        className="absolute right-0 cursor-pointer"
        aria-describedby={id}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Typography
          className="p-2 gap-2 hover:underline cursor-pointer flex justify-center items-center"
          onClick={() => handleRoutes("/account/edit-profile")}
        >
          Edit Profile
          <PersonOutline/>
        </Typography>
        <hr />
        <Typography
          className="p-2 gap-2 hover:underline cursor-pointer flex justify-center items-center"
          onClick={() => handleRoutes("/booking")}
        >
          Bookings
          <HotelOutlined />
        </Typography>
      </Popover>
    </div>
  );
}
