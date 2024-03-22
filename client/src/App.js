import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header  from "./components/header";
import LoginPage from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFoundPage from "./pages/NotFound";

function App() {
  console.log("value of the client id = " , process.env.REACT_APP_AUTH_CLIENT_ID)
  return (
   <>
   <GoogleOAuthProvider clientId={process.env.REACT_APP_AUTH_CLIENT_ID}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Header />}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
    </GoogleOAuthProvider>;
   </>
  );
}

export default App;
