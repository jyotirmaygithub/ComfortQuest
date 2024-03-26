import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MyStyledTextField from "../components/myStyledTextField";
import { Logout } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import {TokenStatusContext} from "../context/tokenStatus"
import { Toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard() {
  const {checkCookie,deleteAuthTokenCookie} = TokenStatusContext();
  const navigate = useNavigate()
  
  function handleLogout(){
    deleteAuthTokenCookie()
    navigate("/")
  }
  function handleSubmit(){

  }
  return (
    <div className="flex justify-center items-center">
      <Card className=" px-12 p-3">
        <CardActionArea className="flex-col justify-center">
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="profile picture"
              src="https://res.cloudinary.com/rahul4019/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1695133265/pngwing.com_zi4cre.png"
              sx={{ width: 250, height: 250 }}
            />
          </Stack>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              email id
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="flex-col justify-center py-4 space-y-2">
        <MyStyledTextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Username"
          name="name"
          autoComplete="name"
          onChange={onchange}
          autoFocus
        />
        <div  className='flex justify-between'>
        <Button onClick={handleSubmit} variant="outlined" startIcon={<EditIcon />}>
          Edit
        </Button>
        <Button onClick={handleLogout} variant="contained" startIcon={<Logout />}>
          Logout
        </Button>
        </div>
        </div>
      </Card>
    </div>
  );
}
