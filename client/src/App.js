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
import CircleProgress from "./pages/CircleProgress";
import LandingPage from "./pages/LandingPage";
import HotelDetails from "./pages/HotelDetails";
import UserProfile from "./pages/User/UserProfile";
import RegisterHotel from "./pages/RegisterHotel"
import Contact from "./pages/Info/Contact"
import About from "./pages/Info/About"
import BookedHotels  from "./pages/User/BookedHotels"
import Footer from "./components/footer";
import HeaderLayout from "./Layout/Header";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_AUTH_CLIENT_ID}>
        <StatesFunction>
          <TokenStatusFunction>
            <AuthFunction>
              <HotelContextFunc>
                <EditProfileContextFunc>
                  <Router>
                    <Routes>
                      <Route exact path="/" element={<LandingPage />} />
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
                        element={<EditProfile />}
                      />
                      <Route
                        exact
                        path="/hotel/:id"
                        element={<><HeaderLayout/><HotelDetails /><Footer /></>}
                      />
                      <Route
                        exact
                        path="/booking/:name"
                        element={<BookedHotels />}
                      />
                      <Route
                        exact
                        path="/accommodation/:name"
                        element={<RegisterHotel />}
                      />
                      <Route
                        exact
                        path="/About"
                        element={<About />}
                      />
                      <Route
                        exact
                        path="/Contact"
                        element={<Contact />}
                      />
                      <Route
                        exact
                        path="/fetching-data"
                        element={<CircleProgress />}
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
    </>
  );
}

export default App;
