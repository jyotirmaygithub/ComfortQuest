import React, { useContext, createContext } from "react";
import { jwtDecode } from "jwt-decode";

const FrontAuthContext = createContext();

// function  : To store auth token in the cookie..
function storeAuthToken(userAuth_Token) {
  // Set the cookie with an expiration time
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7); // Set to expire in 7 days
  document.cookie = `auth-token=${
    userAuth_Token.auth_token
  }; expires=${expirationDate.toUTCString()}; path=/`;
}

// Route 1 : handling creation of new user.
async function handleCreateUser(name, email, password) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_DEV_URL}/api/auth/newuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const userAuth_Token = await response.json();
    if (userAuth_Token.auth_token) {
      console.log("this is the authtoken = " + userAuth_Token);
      storeAuthToken(userAuth_Token);
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// Route 2 : handling existing user.
async function handleExistingUser(email, password) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_DEV_URL}/api/auth/newuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const userAuth_Token = await response.json();
    if (userAuth_Token.auth_token) {
      console.log("this is the authtoken = " + userAuth_Token);
      storeAuthToken(userAuth_Token);
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// Route 3 : handling google login.
async function handleGoogleLogin(credential) {
  const dataObject = jwtDecode(credential);
  console.log("dataobject values = ", dataObject);
  handleGoogleUser(dataObject.email, dataObject.name)
}

// Route 4 : handling google authenticating users. 
async function handleGoogleUser(name, email) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_DEV_URL}/api/auth/google-auth`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email}),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const userAuth_Token = await response.json();
    if (userAuth_Token.auth_token) {
      console.log("this is the authtoken = " + userAuth_Token);
      storeAuthToken(userAuth_Token);
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
}



export function AuthFunction(props) {
  return (
    <FrontAuthContext.Provider
      value={{ handleCreateUser, handleExistingUser, handleGoogleLogin }}
    >
      {props.children}
    </FrontAuthContext.Provider>
  );
}

export function FrontAuthFunction() {
  return useContext(FrontAuthContext);
}
