import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MyStyledTextField from "../components/myStyledTextField";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const navigate = useNavigate()
  // const [loader,setLoader] = useState(false)

  function handleClickSignUp(){
    navigate("/sign")
  }
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        NoteVault {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const defaultTheme = createTheme();
  const [combinedState, setCombinedState] = useState({
    email: "",
    password: "",
  });
  const [details, setDetails] = useState({ type: "", message: "" });
  const Navigation = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // handleExistingUser(combinedState.email, combinedState.password);
  }

  function onchange(e) {
    setCombinedState({ ...combinedState, [e.target.name]: e.target.value });
  }
  function handleClick() {
    setTimeout(() => {
      Navigation(`/signup`);
    }, 100);
  }

  // API call : existing user log in.
  // async function handleExistingUser(email, password) {
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_DEV_URL}/api/auth/login`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email, password }),
  //       }
  //     );
  //     if (!response.ok) {
  //       setAlertState(true);
  //       setDetails({ type: "error", message: "Invalid Username or Password!" });
  //       alertRemoval();
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     setLoader(true)
  //     const userAuth_Token = await response.json();

  //     if (userAuth_Token && userAuth_Token.auth_token) {
  //       // Set the cookie with an expiration time
  //       const expirationDate = new Date();
  //       expirationDate.setDate(expirationDate.getDate() + 7); // Set to expire in 7 days
  //       document.cookie = `auth_token=${
  //         userAuth_Token.auth_token
  //       }; expires=${expirationDate.toUTCString()}; path=/`;

  //       setDetails({ type: "success", message: "Welcome Back!" });
  //       setAlertState(true);
  //       alertRemoval();
  //       handleExistingUsername()
  //       const result = await fetchAllNotes()
  //       setTimeout(() => {
  //         if(result.length === 0){
  //           Navigation(`/create-notes`);
  //         }
  //         else{
  //           Navigation(`/fetchingdata`);
  //         }
  //       }, 2500);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching notes:", error);
  //   }
  // }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
            <MyStyledTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={onchange}
              autoFocus
            />
            <MyStyledTextField
              className="text-black"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onchange}
            />
            <Button
            className="bg-black"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <p>LOG IN</p>
            </Button>
            <div className="mb-4 flex w-full items-center gap-4">
          <div className="h-0 w-1/2 border-[1px]"></div>
          <p className="small -mt-1">or</p>
          <div className="h-0 w-1/2 border-[1px]"></div>
        </div>
         {/* Google login button */}
         <div className="flex h-[50px] justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              // handleGoogleLogin(credentialResponse.credential);
              console.log("values of the user = " + credentialResponse.credential)
              const dataObject = jwtDecode(credentialResponse.credential)
              console.log("data object = " + dataObject)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            text="continue_with"
            width="350"
          />
        </div>

        <div className="py-2 px-8 text-center flex text-gray-500">
          Don't have an account yet?{' '}
          <div onClick={handleClickSignUp} className="text-black cursor-pointer underline">
            Register now
          </div>
        </div>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
