import React, { useContext, createContext, useState } from "react";

const AppStates = createContext();

export function StatesFunction(props) {
  // state to store user document from the database.
  const [userDocument ,setUserDocument] = useState({})
  return (
    <AppStates.Provider value={{ userDocument,setUserDocument }}>
      {props.children}
    </AppStates.Provider>
  );
}

export function StateContext() {
  return useContext(AppStates);
}
