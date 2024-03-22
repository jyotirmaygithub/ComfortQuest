import React, { useContext, createContext } from "react";

const FrontAuthContext = createContext();

function storeAuthToken(userAuth_Token){
 // Set the cookie with an expiration time
 const expirationDate = new Date();
 expirationDate.setDate(expirationDate.getDate() + 7); // Set to expire in 7 days
 document.cookie = `auth_token=${
   userAuth_Token.auth_token
 }; expires=${expirationDate.toUTCString()}; path=/`;
}

async function handleCreateUser(name, email, password) {
  console.log("value of name = " + name )
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
      )
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userAuth_Token = await response.json();
      console.log("are things working")
      if (userAuth_Token.auth_token) {
        console.log("this is the authtoken = " + userAuth_Token)
        storeAuthToken(userAuth_Token);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

export function AuthFunction(props) {
  return (
    <FrontAuthContext.Provider value={{ handleCreateUser }}>
      {props.children}
    </FrontAuthContext.Provider>
  );
}

export function FrontAuthFunction() {
  return useContext(FrontAuthContext);
}
