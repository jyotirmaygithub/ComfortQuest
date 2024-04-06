import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import { StateContext } from "../context/States";
import {
  ContactSupport,
  Info,
  Logout,
  Person2Outlined,
  HotelOutlined,
  LivingOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { TokenStatusContext } from "../context/tokenStatus";

export default function AnchorTemporaryDrawer() {
  const navigate = useNavigate();
  const { userDocument } = StateContext();
  const { deleteAuthTokenCookie } = TokenStatusContext();
  const [state, setState] = React.useState({});

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  function handleClick(value) {
    if (value === "Logout") {
      deleteAuthTokenCookie();
      navigate(`/login`);
    } else if (value === "Profile") {
      navigate(`/account/edit-profile`);
    } else {
      navigate(`/${value}`);
    }
  }
  const icons = [<Person2Outlined />, <HotelOutlined />, <LivingOutlined />];
  const iconCount = icons.length;
  const icons2 = [<Info />, <ContactSupport />, <Logout />];
  const iconCount2 = icons.length;

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Profile", "Bookings", "Accommodation"].map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => handleClick(text)}>
            <ListItemButton>
              <ListItemIcon>{icons[index % iconCount]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["About", "Contact", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => handleClick(text)}>
            <ListItemButton>
              <ListItemIcon>{icons2[index % iconCount2]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="avatar">
        <Button onClick={toggleDrawer("avatar", true)}>
          {/* Render your Avatar component here */}
          <Avatar src={userDocument.picture} alt="User Avatar" />
        </Button>
        <Drawer
          anchor="right"
          open={state["avatar"]}
          onClose={toggleDrawer("avatar", false)}
        >
          {list("avatar")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
