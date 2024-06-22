import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MyStyledTextField from "../../components/myStyledTextField";
import CircleProgress from "../../components/progress/circle";
import Copyright from "../../components/copyright";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { FrontAuthContext } from "../../context/front-auth";
import { HotelContext } from "../../context/HotelsContext";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const { handleExistingUser, handleGoogleLogin } = FrontAuthContext();
  const {handleRetrivingBookingData} = HotelContext()

  function handleClickSignUp() {
    navigate("/signup");
  }

  const defaultTheme = createTheme();
  const [combinedState, setCombinedState] = useState({
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);
  const [loading2, setloading2] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!combinedState.email || !combinedState.password) {
      toast.error("Email and password are required");
      return;
    }
    // Check if email is in valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(combinedState.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    // Check password strength (medium or strong)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(combinedState.password)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }
    // If all checks pass, proceed with API call
    try {
      setloading2(true);
      const response = await handleExistingUser(
        combinedState.email,
        combinedState.password
      );
      // Handle successful response
      returnResponse(response);
    } catch (error) {
      // Handle API errors
      console.error(error);
      // toast.error("An error occurred. Please try again later.");
    }
  }

  function onchange(e) {
    setCombinedState({ ...combinedState, [e.target.name]: e.target.value });
  }

  function returnResponse(response) {
    setloading(false);
    setloading2(false);
    if (response.success) {
      toast.success(response.message);
      navigate("/");
      handleRetrivingBookingData()
    } else {
      toast.error(response.message);
    }
  }

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
              type="submit"
              fullWidth
              variant="contained"
            >
              {loading2 ? <CircleProgress color="white" /> : <>LOG IN</>}
            </Button>
            <div className="mb-4 flex w-full items-center gap-4">
              <div className="h-0 w-1/2 border-[1px]"></div>
              <p className="small -mt-1">or</p>
              <div className="h-0 w-1/2 border-[1px]"></div>
            </div>
            {/* Google login button */}
            <div className="flex h-[50px] justify-center">
              {loading ? (
                <CircleProgress/>
              ) : (
                <GoogleLogin
                  onSuccess={async (credentialResponse) => {
                    setloading(true);
                    returnResponse(
                      await handleGoogleLogin(credentialResponse.credential)
                    );
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  text="continue_with"
                  width="350"
                />
              )}
            </div>

            <div className="py-2 px-8 text-center flex text-gray-500">
              Don't have an account yet?{" "}
              <div
                onClick={handleClickSignUp}
                className="text-blue-400 cursor-pointer underline"
              >
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
