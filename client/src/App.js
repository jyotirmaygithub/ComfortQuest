import React from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthFunction } from "./context/front-auth";
import { TokenStatusFunction } from "./context/tokenStatus";
import { HotelContextFunc } from "./context/HotelsContext";
import { StatesFunction } from "./context/States";
import { EditProfileContextFunc } from "./context/EditProfile";
import LoginPage from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import NotFoundPage from "./pages/NotFound";
import EditProfile from "./pages/User/EditProfile";
import LandingPage from "./pages/LandingPage";
import HotelDetails from "./pages/HotelDetails";
import UserProfile from "./pages/User/UserProfile";
import RegisterHotel from "./pages/RegisterHotel";
import Contact from "./pages/Info/Contact";
import About from "./pages/Info/About";
import Reserved from "./pages/User/Reserved";
import Footer from "./components/footer";
import Header from "./Layout/Header";
import BookingSuccess from "./pages/BookingSuccess";
import HotelRegistrationSuccess from "./pages/RegisterSuccess";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#60A5FA", // Set primary color to light blue
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          // Set the default icon color to primary.main (light blue)
          color: "#60A5FA", // or 'currentColor' for inherited color
        },
      },
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GoogleOAuthProvider clientId={process.env.REACT_APP_AUTH_CLIENT_ID}>
          <StatesFunction>
            <TokenStatusFunction>
              <AuthFunction>
                <HotelContextFunc>
                  <EditProfileContextFunc>
                    <Router>
                      <Routes>
                        <Route
                          exact
                          path="/"
                          element={
                            <>
                              <Header />
                              <LandingPage />
                              <Footer />
                            </>
                          }
                        />
                        <Route exact path="/login" element={<LoginPage />} />
                        <Route exact path="/signup" element={<SignUp />} />
                        <Route
                          exact
                          path="/account/:name"
                          element={<UserProfile />}
                        />
                        <Route
                          exact
                          path="/account/edit-profile"
                          element={
                            <>
                              <Header />
                              <EditProfile />
                              <Footer />
                            </>
                          }
                        />
                        <Route
                          exact
                          path="/hotel/:id"
                          element={
                            <>
                              <Header />
                              <HotelDetails />
                              <Footer />
                            </>
                          }
                        />
                        <Route
                          exact
                          path="/booking/:name"
                          element={
                            <>
                              <Header />
                              <Reserved />
                              <Footer />
                            </>
                          }
                        />
                        <Route
                          exact
                          path="/Registration/:name"
                          element={
                            <>
                              <Header />
                              <RegisterHotel />
                              <Footer />
                            </>
                          }
                        />
                        <Route exact path="/About" element={<><Header /><About /><Footer /></>} />
                        <Route exact path="/Contact" element={<><Header /><Contact /><Footer /></>} />
                        <Route
                          exact
                          path="/booking-success"
                          element={<BookingSuccess />}
                        />
                        <Route
                          exact
                          path="/registration-success"
                          element={<HotelRegistrationSuccess />}
                        />
                        <Route exact path="*" element={<NotFoundPage />} />
                      </Routes>
                    </Router>
                  </EditProfileContextFunc>
                </HotelContextFunc>
                <ToastContainer autoClose={2000} transition={Slide} />
              </AuthFunction>
            </TokenStatusFunction>
          </StatesFunction>
        </GoogleOAuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
