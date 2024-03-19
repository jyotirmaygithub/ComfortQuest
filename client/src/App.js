import React from "react";
import { Auth0Provider } from '@auth0/auth0-react';
import Header  from "./components/header";

function App() {
  return (
   <>
   <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN_AUTH}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <Header/>
    </Auth0Provider>
   </>
  );
}

export default App;
