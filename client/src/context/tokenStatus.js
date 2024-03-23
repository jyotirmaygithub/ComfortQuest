import React, { useContext, createContext } from "react";

const TokenStatus = createContext();

// function : to check auth-token status : exist or not.
function checkCookie() {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('auth-token=')) {
      return true
    }
  }
  return false;
}

// Function : To delete the auth token.
async function deleteAuthTokenCookie() {
  document.cookie = `auth-token=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/;`;
}


export function TokenStatusFunction(props) {
  return (
    <TokenStatus.Provider value={{ checkCookie ,deleteAuthTokenCookie }}>
      {props.children}
    </TokenStatus.Provider>
  );
}

export function TokenStatusContext() {
  return useContext(TokenStatus);
}
